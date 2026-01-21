# Database Fundamentals – Conceptual Understanding

## 1. Why is `db.json` not suitable as a database for real projects?

Using `db.json` (file-based storage) has several limitations:

- **Performance:** Reading and writing a JSON file requires loading the entire file into memory, which becomes slow as data grows.
- **Concurrency:** Multiple users cannot safely read/write simultaneously, leading to data conflicts or corruption.
- **Scalability:** File-based storage cannot efficiently handle large datasets or multiple servers.
- **Reliability:** Files can get corrupted, deleted, or lost, and there is no built-in backup, recovery, or transaction support.

In summary, `db.json` is only suitable for small demos or learning projects, not real-world applications.

---

## 2. Ideal characteristics of a database system

A robust database system should have the following characteristics:

- **Performance:** Fast data retrieval and updates, even for large datasets.
- **Concurrency:** Ability to handle multiple users accessing and modifying data simultaneously without conflicts.
- **Reliability:** Data remains available and durable even in case of crashes or power failures.
- **Data integrity:** Ensures accuracy and consistency through constraints, validation, and transactions.
- **Scalability:** Can handle growing amounts of data or users by scaling vertically (better hardware) or horizontally (adding servers).
- **Fault tolerance:** The system continues operating correctly even in case of hardware or software failures, often using replication or clustering.

---

## 3. Types of databases and their use cases

### Relational Databases (RDBMS)
- **Description:** Store data in structured tables (rows and columns) with defined relationships; use SQL for queries.
- **Use cases:** Applications requiring structured data and relationships between entities.
- **Real-world examples:** 
  - Banking systems (customer accounts, transactions)
  - E-commerce platforms (products, orders, customers)
  - Enterprise resource planning (ERP) systems

### Non-relational Databases (NoSQL)
- **Description:** Store data in flexible formats like key-value, document, column, or graph; schema-less.
- **Use cases:** Applications needing high scalability, flexibility, or handling unstructured/semi-structured data.
- **Real-world examples:** 
  - Social media apps (posts, likes, comments)
  - Real-time analytics systems (event streams)
  - Content management systems (storing multimedia content)
