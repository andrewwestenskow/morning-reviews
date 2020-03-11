# Week 5, Day 3 Review - SQL 1

Before jumping in, ask for any questions. Try to structure the review around their questions, making sure to touch on any points they ask about. I find it helpful to write down all of their questions at the start and work from there.

## Lecture Notes and Slides

- Notes: https://github.com/WLH-16/sql-1
- Slides: https://slides.com/matias_perez/scott-s-sql-one/

## Important Concepts to Review

1. What is SQL?
2. Common Queries and Syntax
   - CREATE TABLE
   - SELECT
   - INSERT
   - UPDATE
   - DELETE
3. Conditional Statements & Logical Operators
   - <, >, <=, >=, IN, NOT IN, AND, OR

## Review
Using the link to the DevMountain PostgreSQL DB included [here](https://postgres.devmountain.com/), have the students do the following:

    1. Create a table called `movies` with columns for `id`, `title`, `director`, and `release_year`
    2. Add 4 movies into the `movies` table
    3. Using a `SELECT` query, return all the movies from the `movies` table
    4. Using an `UPDATE` query, update the `title` of the second movie in the `movies` table
    5. Using a `DELETE` query, delete the third movie in the `movies` table
    6. Using a `SELECT` query, return all movies from the `movies` table ordered by `release_year` ascending
    7. Using a `SELECT` query, return all movies from the `movies` table where the `release_year` is greater than 1995
    8. Using a `SELECT` query, return all movies from the `movies` table where the `release_year` is greater than or equal to 2000
    9. Using a `SELECT` query, return all movies from the `movies` table where the `release_year` is less than 2010 or greater than 2013
    10. Using a `SELECT` query, return all movies from the `movies` table where the `release_year` is less than to 2010 and `id` is greater than 2
    11. Using a `SELECT` query, return all movies from the `movies` table where the `release_year` is either 2001, 2002, 2003, or 2004
    12. Using a `SELECT` query, return all movies from the `movies` table where the `release_year` is not 2001, 2002, 2003, or 2004
    13. Using a `DROP TABLE` query, drop the `movies` table from the database

Feel free to have the students practice additional SQL statements as needed