module com.example.jhipster5java10 {

    requires java.sql;
    requires java.mail;
    requires java.management;
    requires java.validation;
    requires javax.servlet.api;

    requires jhipster.framework;
    requires spring.core;
    requires spring.web;
    requires spring.context;
    requires spring.boot.actuator;
    requires spring.aop;
    requires spring.boot;
    requires spring.cloud.spring.service.connector;
    requires spring.data.jpa;
    requires spring.data.commons;
    requires spring.beans;
    requires spring.boot.autoconfigure;
    requires spring.tx;
    requires spring.webmvc;
    requires spring.security.core;
    requires spring.security.web;
    requires spring.security.config;
    requires spring.context.support;

    requires hibernate.jpa;
    requires hibernate.core;
    requires hibernate.envers;
    requires org.hibernate.validator;
    requires liquibase.core;
    requires com.zaxxer.hikari;

    requires metrics.jvm;
    requires metrics.core;
    requires metrics.spring;
    requires metrics.servlet;
    requires metrics.servlets;
    requires metrics.annotation;
    requires metrics.healthchecks;

    requires jackson.annotations;
    requires com.fasterxml.jackson.datatype.hibernate5;
    requires com.fasterxml.jackson.module.afterburner;

    requires thymeleaf;
    requires thymeleaf.spring5;
    requires logback.core;
    requires logback.classic;
    requires aspectjweaver;
    requires slf4j.api;
    requires logstash.logback.encoder;
    requires undertow.core;
    requires com.google.common;
    requires org.apache.commons.lang3;

    requires problem.spring.web;
    requires problem;
    requires jackson.datatype.problem;

    // patched module through Maven '--patch-module'
    // requires jsr305;
    requires java.xml.ws.annotation;
}
