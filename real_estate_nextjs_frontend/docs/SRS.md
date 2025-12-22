# Software Requirements Specification (SRS)

## Textile ERP Web Application

---

## 1. Introduction

### 1.1 Purpose

This document defines the **functional and non-functional requirements** for a **Textile ERP Web Application** covering Order Management, Stock Management, Job Requests, Dashboard, and Reporting.
It serves as a **single source of truth** for stakeholders, developers, and testers.

---

### 1.2 Scope

The system will:

* Manage textile orders
* Track stock by design and item
* Automatically trigger production jobs when stock is insufficient
* Provide dashboards and business reports
* Maintain master data for customers, brokers, transporters, items, and designs

Out-of-scope items are explicitly listed to prevent scope creep.

---

### 1.3 Definitions & Abbreviations

| Term      | Meaning                                 |
| --------- | --------------------------------------- |
| ERP       | Enterprise Resource Planning            |
| Design No | Unique textile design identifier        |
| Job       | Production request to manufacture stock |
| FIFO      | First-In-First-Out stock usage          |
| GST       | Goods and Services Tax                  |

---

## 2. Overall Description

### 2.1 User Roles

| Role   | Description                       |
| ------ | --------------------------------- |
| Admin  | Full system access, configuration |
| Staff  | Order, stock, and job operations  |
| Viewer | Read-only access (optional)       |

---

### 2.2 System Overview

* Web-based application
* Centralized database
* Role-based access control
* Supports multi-user concurrency

---

### 2.3 Assumptions & Dependencies

* Internet connectivity required
* Browser-based access
* GST rules configurable
* Email/WhatsApp optional in later phase

---

## 3. Functional Requirements

---

## 3.1 Order Management Module

### FR-OM-01 Create Order

The system shall allow users to create a new order with the following fields:

| Field             | Requirement                                    |
| ----------------- | ---------------------------------------------- |
| Customer Name     | Auto-complete from Customer Master             |
| Order No          | Auto-generated (YYMM#### or incremental)       |
| Order Date        | Default today, editable                        |
| Broker Name       | Auto-complete                                  |
| Transport Company | Auto-complete                                  |
| Design No         | Auto-complete                                  |
| Item Name         | Auto-complete                                  |
| Quantity          | Mandatory numeric                              |
| Rate              | Currency (per item or total)                   |
| GST               | Optional                                       |
| Status            | In Progress, Pending, Ready for Dispatch, Done |

---

### FR-OM-02 Order Edit Rules

* Orders in **In Progress** can be fully edited
* Orders in **Pending** can edit Qty and Rate only
* Orders in **Ready for Dispatch / Done** are read-only
* All edits shall be logged

---

### FR-OM-03 Stock Validation

On order save:

* System shall check available stock
* If sufficient stock exists → auto-assign stock
* If insufficient stock exists → show out-of-stock alert

---

### FR-OM-04 Job Trigger

When stock is insufficient:

* System shall display a **Create Job Request** option
* Order status shall move to **Pending**

---

### FR-OM-05 Order Completion

Order cannot be marked **Done** unless:

* Stock is fully assigned OR
* Linked job(s) are completed

---

## 3.2 Stock Management Module

---

### FR-SM-01 Stock Entry

The system shall allow stock entry with:

| Field      | Requirement   |
| ---------- | ------------- |
| Mark No    | Auto-complete |
| Design No  | Auto-complete |
| Item Name  | Auto-complete |
| Quantity   | Numeric       |
| Entry Date | Auto          |

---

### FR-SM-02 Stock Tracking

* Stock shall be tracked by Design No, Item Name, and Mark No
* FIFO allocation shall be supported (configurable)

---

### FR-SM-03 Stock Deduction

Stock shall be automatically deducted when:

* Order is fulfilled
* Stock is manually dispatched

---

### FR-SM-04 Stock Visibility

* Out-of-stock designs shall be visible on dashboard
* Inactive designs shall not be selectable

---

## 3.3 Job Request Module

---

### FR-JM-01 Create Job

The system shall allow users to create a job with:

| Field               | Requirement                     |
| ------------------- | ------------------------------- |
| Design No           | Mandatory                       |
| Matching Attributes | Up to 8 dropdown + text pairs   |
| Quantity            | Mandatory                       |
| Images              | Multiple uploads                |
| Linked Order No     | Optional                        |
| Status              | To Do, In Progress, Ready, Done |

---

### FR-JM-02 Job Completion Logic

When job status is marked **Done**:

* If linked to an order → stock auto-assigned
* If not linked → stock added to inventory

---

## 3.4 Dashboard & Reporting

---

### FR-DR-01 Dashboard KPIs

System shall display:

* Today’s Orders
* Pending Orders
* Pending Jobs
* Out-of-stock Designs

---

### FR-DR-02 Graphs

System shall provide:

* Monthly Sales
* Most Sold Designs
* Least Sold Designs
* Stock Trends

---

### FR-DR-03 Reports

Users shall be able to:

* Filter reports by date, customer, broker, design
* Export reports to Excel and PDF

---

## 3.5 Master Data Management

---

### FR-MD-01 Masters

System shall maintain master tables for:

* Customers
* Brokers
* Transport Companies
* Items
* Designs

---

### FR-MD-02 Activation Control

* Masters can be activated or deactivated
* Deactivated entries shall not appear in transactions

---

## 4. Non-Functional Requirements

---

### 4.1 Performance

* System shall support minimum 50 concurrent users
* Order save response ≤ 2 seconds

---

### 4.2 Security

* Role-based access control
* Secure authentication
* Audit logs for critical actions

---

### 4.3 Usability

* Auto-complete for all master-linked fields
* Responsive UI

---

### 4.4 Reliability

* No data loss on concurrent operations
* Transaction rollback on failure

---

### 4.5 Maintainability

* Modular architecture
* Configurable business rules

---

## 5. Constraints

* Web-based only (no mobile app in MVP)
* Barcode and AI features excluded
* Courier and accounting APIs excluded

---

## 6. Out of Scope

* Mobile application
* AI stock forecasting
* Worker/machine productivity
* QR/Barcode scanning

---

## 7. Open Items / Configuration Decisions

| Item                         | Status                |
| ---------------------------- | --------------------- |
| Rate type (Per item / Total) | To be finalized       |
| GST slabs                    | To be finalized       |
| Stock allocation             | FIFO / Manual         |
| Partial fulfillment          | Allowed / Not allowed |

---

## 8. Approval

This document is subject to approval by stakeholders.
Any change after approval shall follow a formal change request process.
