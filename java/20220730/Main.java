/* 
This is a demo for basic Hibernate functions and JPA annotations. Had to condense it to one file but should still work fine.
*/

import com.smeechy.hibernate.demo.entity.Employee;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import javax.persistence.*;
import java.util.List;

public class Main {
  private static final SessionFactory factory = new Configuration()
      .configure()
      .addAnnotatedClass(Employee.class)
      .buildSessionFactory();

  public static void main(String[] args) {
    List<Employee> employeeList = List.of(
        new Employee("MacCoy", "Smith", "Fishbowl Inventory"),
        new Employee("Austin", "Vance", "Fishbowl Inventory"),
        new Employee("David", "Hall", "Fishbowl Inventory"),
        new Employee("Matt", "White", "iSpot TV"),
        new Employee("Mikayla", "Smith", "Daltile"),
        new Employee("Michael", "Murdock", "STG Consulting"),
        new Employee("Brian", "Carter", "STG Consulting"),
        new Employee("Skii", "Lunceford", "AMP Security"));

    // test saving employees
    System.out.println("\n>> saving employees to database...");
    employeeList.forEach(PracticeApp::saveEmployee);
    System.out.println(">> done.");

    // test getting employee by id
    System.out.println("\n>> retrieving employee with id 4...");
    Employee matt = getEmployee(4);
    System.out.print(">> done: ");
    System.out.println(matt);

    // test getting employees by company
    System.out.println("\n>> getting employees from company Fishbowl Inventory...");
    List<Employee> fishbowlEmployees = getEmployeesByCompany("Fishbowl Inventory");
    System.out.println(">> done:");
    fishbowlEmployees.forEach(System.out::println);

    // test deleting employee
    System.out.println("\n>> deleting employee Austin Vance...");
    deleteEmployee(employeeList.get(1));
    System.out.println(">> done.");

    // close factory
    factory.close();
  }

  public static void saveEmployee(Employee employee) {
    try (Session session = factory.getCurrentSession()) {
      session.beginTransaction();
      session.save(employee);
      session.getTransaction().commit();
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

  public static Employee getEmployee(int primaryKey) {
    Employee employee = null;
    try (Session session = factory.getCurrentSession()) {
      session.beginTransaction();
      employee = session.get(Employee.class, primaryKey);
      session.getTransaction().commit();
    } catch (Exception e) {
      e.printStackTrace();
    }
    return employee;
  }

  public static List<Employee> getEmployeesByCompany(String company) {
    List<Employee> employeeList = null;
    try (Session session = factory.getCurrentSession()) {
      session.beginTransaction();
      employeeList = session
          .createQuery("from Employee where company = :company")
          .setParameter("company", company)
          .getResultList();
      session.getTransaction().commit();
    } catch (Exception e) {
      e.printStackTrace();
    }
    return employeeList;
  }

  public static void deleteEmployee(Employee employee) {
    try (Session session = factory.getCurrentSession()) {
      session.beginTransaction();
      session.delete(employee);
      session.getTransaction().commit();
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}

@Entity
@Table(name = "employee")
class Employee {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private int id;

  @Column(name = "first_name")
  private String firstName;

  @Column(name = "last_name")
  private String lastName;

  @Column(name = "company")
  private String company;

  public Employee() {
  }

  public Employee(String firstName, String lastName, String company) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.company = company;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getCompany() {
    return company;
  }

  public void setCompany(String company) {
    this.company = company;
  }

  @Override
  public String toString() {
    return "Employee{" +
        "id=" + id +
        ", firstName='" + firstName + '\'' +
        ", lastName='" + lastName + '\'' +
        ", company='" + company + '\'' +
        '}';
  }
}