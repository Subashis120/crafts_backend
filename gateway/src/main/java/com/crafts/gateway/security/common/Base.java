package com.crafts.gateway.security.common;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.io.Serializable;
import java.util.Date;


public abstract class Base implements Serializable {

    @CreatedDate
    private Date createdOn;
    @LastModifiedDate
    private Date lastUpdatedOn;
}
