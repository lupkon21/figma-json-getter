package com.figma.backend;

public class User {
    private String figmaUserToken;
    private String figmaFileID;

    public User(String figmaUserToken, String figmaFileID) {
        this.figmaUserToken = figmaUserToken;
        this.figmaFileID = figmaFileID;
    }

    public String getFigmaFileID() {
        return figmaFileID;
    }

    public String getFigmaUserToken() {
        return figmaUserToken;
    }

    public void setFigmaUserToken(String figmaUserToken) {
        this.figmaUserToken = figmaUserToken;
    }

    public void setFigmaFileID(String figmaFileID) {
        this.figmaFileID = figmaFileID;
    }
}
