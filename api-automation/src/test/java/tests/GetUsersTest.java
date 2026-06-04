package tests;

import io.restassured.response.Response;
import org.testng.Assert;
import org.testng.annotations.Test;
import utils.ApiUtils;
import utils.ConfigReader;

public class GetUsersTest {

    @Test
    public void getUsersTest() {

        String endpoint =
                ConfigReader.getProperty(
                        "users.endpoint"
                );

        Response response =
                ApiUtils.getRequest(endpoint);

        System.out.println(
                "Actual Status Code = "
                        + response.getStatusCode()
        );

        Assert.assertEquals(
                response.getStatusCode(),
                200
        );
    }
}