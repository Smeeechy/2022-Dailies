/*
Given a phone number, find every result possible from entering it using a T9 key layout.
If a number can be mapped to a letter, it must be.
*/

import java.util.ArrayList;
import java.util.Map;

class Main {
  private static final Map<Character, String> MAP = Map.of(
      '2', "abc",
      '3', "def",
      '4', "ghi",
      '5', "jkl",
      '6', "mno",
      '7', "pqrs",
      '8', "tuv",
      '9', "wxyz");

  public static void main(String[] args) {
    System.out.println(phoneNumberMnemonics(args[0]));
  }

  public static ArrayList<String> phoneNumberMnemonics(String phoneNumber) {
    ArrayList<String> results = new ArrayList<>();
    for (int i = 0; i < phoneNumber.length(); i++) {
      ArrayList<String> updatedResults = new ArrayList<>();
      if (results.size() == 0) results.add("");
      char num = phoneNumber.charAt(i);
      for (String current : results) {
        if (num == '0' || num == '1') updatedResults.add(current + num);
        else {
          String[] options = MAP.get(num).split("");
          for (String option : options) updatedResults.add(current + option);
        }
      }
      results = updatedResults;
    }
    return results;
  }
}
