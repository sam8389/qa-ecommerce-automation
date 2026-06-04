package tests;

import database.DatabaseUtils;
import org.testng.Assert;
import org.testng.annotations.Test;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

public class DatabaseConnectionTest {

    @Test
    public void validateUserExistsInDatabase() throws Exception {

        Connection connection =
                DatabaseUtils.getConnection();

        Statement statement =
                connection.createStatement();

        ResultSet resultSet =
                statement.executeQuery(
                        "SELECT * FROM users"
                );

        boolean userFound = false;

        while(resultSet.next()) {

            String name =
                    resultSet.getString("name");

            String email =
                    resultSet.getString("email");

            System.out.println(
                    name + " | " + email
            );

            if(name.equals("Samarth QA")) {

                userFound = true;

            }
        }

        Assert.assertTrue(
                userFound,
                "User not found in database"
        );

        connection.close();
    }
}