# Seasonal Workers (SW) - Database

<img alt="logo" src="https://seeklogo.com/images/A/amazon-database-logo-BAA099F432-seeklogo.com.png" width=80 />

---

SW is managed by RDBMS (Relational DataBase Management System). This documentation aims to define the database schema.

This System Information (SI) represents a comprehensive platform for both seasonal workers and recruiters alike. It serves as the backbone of our software infrastructure, facilitating the seamless connection between job seekers and employers in the seasonal work industry.

## Data Modelling

### Relationship Syntax

| Value (left) | Value (right) | Meaning                       |
| :----------: | :-----------: | ----------------------------- |
|    `\|o`     |     `o\|`     | Zero or one                   |
|    `\|\|`    |    `\|\|`     | Exactly one                   |
|     `}o`     |     `o{`      | Zero or more (no upper limit) |
|    `}\|`     |     `\|{`     | One or more (no upper limit)  |

### Relationship diagrams

The database schema design follows the principles of the **third normal form (3NF)**. This approach is employed to reduce data duplication, prevent data anomalies, ensure referential integrity, and simplify data management within the database.

<details open><summary>Conceptual Data Model</summary>

```mermaid
---
title: Entity Relationship model (or ER model)
---
erDiagram
    BENEFIT {
        integer benefit_id
        varchar name
    }
    AD {
        integer ad_id
        varchar title
        category category
        date start_date
        date end_date
        integer salary
        varchar description
        ad_type ad_type
    }
    COMPANY {
        integer company_id
        varchar name
    }
    EXPERIENCE {
        integer experience_id
        varchar title
        category category
        date start_date
        date end_date
    }
    USER {
        integer user_id
        varchar name
        varchar first_name
        varchar email
        varchar password
        gender gender
        date birthday
        nationality nationality
        varchar phone
        varchar description
        varchar cv_path
        date last_auth
    }
    ADDRESS {
        integer address_id
        varchar city
        integer postal_code
        varchar country
    }
    REFERENT {
        integer referent_id
        varchar name
        varchar email
        varchar phone
    }
    FEEDBACK {
        integer feedback_id
        varchar recruiter_name
        integer score
        varchar opinion
        date date
        feedback_type feedback_type
    }
    BENEFIT ||--o{ AD : "Includes"
    AD o|--o{ COMPANY : "Refer to"
    AD o|--o{ ADDRESS : "Relates to"
    USER o{--}o AD : "Is approved"
    EXPERIENCE ||--o{ COMPANY : "refer to"
    USER o{--|| AD : "Post"
    USER ||--o{ ADDRESS : "Live at"
    USER o{--|| REFERENT : "Provides"
    USER o{--|| EXPERIENCE : "Own"
    USER o{--|| FEEDBACK : "Relates to"
    ADDRESS o{--o{ COMPANY : "Located at"
    REFERENT ||--o{ COMPANY : "Work at"
```
</details>
