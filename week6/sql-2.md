# Week 6, Day 4 Review - SQL 2

This morning review will most likely not be delivered at this point of the course schedule - depending on when the full stack review is scheduled. Typically, the full stack review takes the entirety of the day to complete. During the last week of the lecture content, I found that a review of SQL-2 material was helpful for students as they thought about setting up their DB Schemas for personal projects.

## Lecture Notes and Slides

- Notes: https://github.com/WLH17/sql-2
- Slides: https://slides.com/mattbodily/sql-two

## Important Concepts to Review

1. Why data is organized in different tables
2. Table Relationships
   - One-to-One
    - One table has a primary key and the other table has no primary key, but rather has a foreign key linking to the primary key on the other table
   - One-to-Many
    - Both tables have primary keys, but the table (many) with a relationship to a single item on the other table (one) has a foreign key linking to the primary key of the other table (one)
   - Many-to-Many
      - Database efficiency of using a join or junction table for this type of relationship (easier to scale)
      - Join Tables

## Review

For this review, walk through [this slideshow](https://slides.com/lucasschaat/copy-of-sql-2#/) and help the students build a more complex database schema for a social media application. Although this example is not the only way to construct a database schema for a social media app, it illustrates various types of table relationships and methods for managing data that may be part of a social media application.