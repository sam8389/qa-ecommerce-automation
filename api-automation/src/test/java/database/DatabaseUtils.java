package database;

import java.sql.Connection;
import java.sql.DriverManager;

public class DatabaseUtils {

    public static Connection getConnection() throws Exception {

        return DriverManager.getConnection(
                "jdbc:postgresql://localhost:5432/qa_automation_db",
                "postgres",
                "root"
        );
    }
}