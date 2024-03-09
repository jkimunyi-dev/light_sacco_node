CREATE TABLE Members (
    member_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    id_number VARCHAR(20),
    date_of_birth DATE,
    contact_number VARCHAR(20),
    email VARCHAR(100),
    address VARCHAR(255)
);

-- Accounts table
CREATE TABLE Accounts (
    account_id INT AUTO_INCREMENT PRIMARY KEY,
    member_id INT,
    account_type ENUM('Savings', 'Loan'),
    balance DECIMAL(10, 2),
    FOREIGN KEY (member_id) REFERENCES Members(member_id)
);

-- Transactions table
CREATE TABLE Transactions (
    transaction_id INT AUTO_INCREMENT PRIMARY KEY,
    account_id INT,
    transaction_type ENUM('Deposit', 'Withdrawal', 'Loan'),
    amount DECIMAL(10, 2),
    transaction_date DATETIME,
    FOREIGN KEY (account_id) REFERENCES Accounts(account_id)
);

-- Loans table
CREATE TABLE Loans (
    loan_id INT AUTO_INCREMENT PRIMARY KEY,
    account_id INT,
    loan_amount DECIMAL(10, 2),
    interest_rate DECIMAL(5, 2),
    start_date DATE,
    end_date DATE,
    status ENUM('Active', 'Completed'),
    FOREIGN KEY (account_id) REFERENCES Accounts(account_id)
);

-- Loan Repayments table
CREATE TABLE LoanRepayments (
    repayment_id INT AUTO_INCREMENT PRIMARY KEY,
    loan_id INT,
    payment_amount DECIMAL(10, 2),
    payment_date DATE,
    FOREIGN KEY (loan_id) REFERENCES Loans(loan_id)
);

-- Loan Types table
CREATE TABLE LoanTypes (
    loan_type_id INT AUTO_INCREMENT PRIMARY KEY,
    loan_type_name VARCHAR(50),
    max_loan_amount DECIMAL(10, 2),
    interest_rate DECIMAL(5, 2)
);

-- Savings Plans table
CREATE TABLE SavingsPlans (
    plan_id INT AUTO_INCREMENT PRIMARY KEY,
    plan_name VARCHAR(50),
    minimum_balance DECIMAL(10, 2),
    interest_rate DECIMAL(5, 2)
);

-- Guarantors table
CREATE TABLE Guarantors (
    guarantor_id INT AUTO_INCREMENT PRIMARY KEY,
    member_id INT,
    loan_id INT,
    FOREIGN KEY (member_id) REFERENCES Members(member_id),
    FOREIGN KEY (loan_id) REFERENCES Loans(loan_id)
);

-- Shares table
CREATE TABLE Shares (
    share_id INT AUTO_INCREMENT PRIMARY KEY,
    member_id INT,
    share_amount DECIMAL(10, 2),
    purchase_date DATE,
    FOREIGN KEY (member_id) REFERENCES Members(member_id)
);

-- Loan Applications table
CREATE TABLE LoanApplications (
    application_id INT AUTO_INCREMENT PRIMARY KEY,
    member_id INT,
    loan_type_id INT,
    application_date DATE,
    status ENUM('Pending', 'Approved', 'Rejected'),
    FOREIGN KEY (member_id) REFERENCES Members(member_id),
    FOREIGN KEY (loan_type_id) REFERENCES LoanTypes(loan_type_id)
);