# Seasonal Workers (SW) - RDBMS

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
        varchar icon_path
    }
    AD {
        integer ad_id
        varchar title
        category category
        date start_date
        date end_date
        integer salary
        varchar currency
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
        varchar first_name
        varchar last_name
        varchar email
        varchar password
        gender gender
        date birthday
        nationality nationality
        varchar phone
        varchar description
        varchar cv_path
        varchar picture_path
        date last_auth
        boolean hidden
    }
    ADDRESS {
        integer address_id
        varchar city
        integer zip_code
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
        date created_at
        feedback_type feedback_type
    }
    BENEFIT o{--}o AD : "BENEFIT_AD"
    AD o|--}o COMPANY : "REFER"
    AD o|--}o ADDRESS : "RELATE"
    USER o{--}o AD : "AD_USER_RESPONSE"
    EXPERIENCE ||--}o COMPANY : "REFER"
    USER o{--o| AD : "POST"
    USER ||--}o ADDRESS : "LIVE"
    USER o{--|| REFERENT : "INFORM"
    USER o{--|| EXPERIENCE : "PROVIDE"
    USER o{--|| FEEDBACK : "RELATE"
    ADDRESS o{--}o COMPANY : "ADDRESS_COMPANY"
    REFERENT ||--}o COMPANY : "WORK"
```

</details>
