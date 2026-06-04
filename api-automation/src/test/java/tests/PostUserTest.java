package tests;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.testng.annotations.Test;

public class PostUserTest {

    @Test
    public void createUserTest() {

        String payload = """
                {
                  "name": "Samarth QA",
                  "job": "Automation Engineer"
                }
                """;

        Response response =
                RestAssured
                        .given()
                        .header("Content-Type", "application/json")
                        .body(payload)
                        .when()
                        .post("https://reqres.in/api/users");

        System.out.println(
                "POST Status Code = "
                        + response.getStatusCode()
        );

        System.out.println(
                response.getBody().asPrettyString()
        );
    }
}