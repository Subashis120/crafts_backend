package com.crafts.order.security.util;

import java.util.EnumSet;
import java.util.HashMap;
import java.util.Map;

public enum UserType {
    SUPER_ADMIN("SUPER_ADMIN", "Super Admin"),
    ADMIN("ADMIN", "Admin"),
    USER("USER", "User");


    private static final Map<String, String> lookup = new HashMap<String, String>();
    private static final Map<String, UserType> labelToStatus = new HashMap<String, UserType>();
    private static final Map<String, UserType> valueToStatus = new HashMap<String, UserType>();

    static {
        for (UserType userType : EnumSet.allOf(UserType.class)) {
            lookup.put(userType.getValue(), userType.getLabel());
        }
        for (UserType userType : EnumSet.allOf(UserType.class)) {
            labelToStatus.put(userType.getLabel(), userType);
        }
        for (UserType userType: EnumSet.allOf(UserType.class)) {
            valueToStatus.put(userType.getValue(), userType);
        }
    }

    private String value;
    private String label;

    private UserType(String valuesd, String label) {
        this.value = valuesd;
        this.label = label;
    }

    public String getValue() {
        return value;
    }

    public String getLabel() {
        return label;
    }

    public static String getLabel(Integer value) {
        return lookup.get(value);
    }

    public static UserType getRequestType(Integer value) {
        return valueToStatus.get(value);
    }

    public static UserType getRequestType(String label) {
        return labelToStatus.get(label);
    }

}
