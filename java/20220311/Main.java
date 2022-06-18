/*
Implement a file syncing algorithm for two computers over a low-bandwidth network. 
What if we know the files in the two computers are mostly the same?
*/

import java.util.Arrays;
import java.util.stream.Stream;
import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;

class Main {
	public static void main(String[] args) {
		String command = args[0];
		switch (command) {
			case "push":
				VCS.push();
				break;
			case "pull":
				VCS.pull();
				break;
			default:
				break;
		}
	}
}

class VCS {
	public static boolean push() {
		String wd = System.getProperty("user.dir");
		String[] files = files();
		try {
			// delete all old backups
			if (!Files.exists(Path.of("backups"))) Files.createDirectory(Path.of("backups"));
			String[] backups = files(wd + "/backups");
			for (String backup : backups) {
				Files.delete(Path.of(wd + "/backups/" + backup));
			}

			// create new backups
			for (String file : files) {
				Path source = Path.of(wd + "/" + file);
				Path target = Path.of(wd + "/backups/" + file);
				if (!Files.exists(target)) Files.createFile(target);
				Files.copy(source, target, StandardCopyOption.REPLACE_EXISTING);
			}
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public static boolean pull() {
		String wd = System.getProperty("user.dir");
		String[] files = files(wd + "/backups");
		try {
			if (!Files.exists(Path.of("backups"))) return false;
			for (String file : files) {
				Path source = Path.of(wd + "/backups/" + file);
				Path target = Path.of(wd + "/" + file);
				if (!Files.exists(target)) Files.createFile(target);
				Files.copy(source, target, StandardCopyOption.REPLACE_EXISTING);
			}
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	private static String[] files(String dir) {
		return Stream.of(new File(dir).listFiles())
			.filter(file -> !file.isDirectory())
			.filter(file -> file.getName().matches("^.*\\.txt$"))
			.map(file -> file.getName())
			.toArray(String[]::new);
	}

	private static String[] files() {
		return files(System.getProperty("user.dir"));
	}
}
