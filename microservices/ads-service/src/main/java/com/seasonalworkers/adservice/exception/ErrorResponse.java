package com.seasonalworkers.adservice.exception;

import java.util.List;

public class ErrorResponse {
    private List<String> errorMessages;
    private int statusCode;

    public ErrorResponse(List<String> errorMessages, int statusCode) {
        this.errorMessages = errorMessages;
        this.statusCode = statusCode;
    }

    public List<String> getErrorMessages() {
        return errorMessages;
    }

    public void setErrorMessages(List<String> errorMessages) {
        this.errorMessages = errorMessages;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }
}
