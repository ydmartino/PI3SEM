package com.quepassa.crm;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class InstantStringConverter implements AttributeConverter<Instant, String> {

    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSSSSS XXX");

    @Override
    public String convertToDatabaseColumn(Instant instant) {
        return instant == null ? null : FORMATTER.withZone(ZoneOffset.UTC).format(instant);
    }

    @Override
    public Instant convertToEntityAttribute(String dbData) {
        if (dbData == null || dbData.isEmpty()) {
            return null;
        }
        try {
            LocalDateTime localDateTime = LocalDateTime.parse(dbData, FORMATTER);
            return localDateTime.toInstant(ZoneOffset.UTC);
        } catch (Exception e) {
            throw new IllegalArgumentException("Erro ao converter o valor do banco para Instant: " + dbData, e);
        }
    }
}
