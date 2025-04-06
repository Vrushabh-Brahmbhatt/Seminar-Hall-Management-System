# Seminar Hall Management System

A comprehensive web application for managing seminar hall bookings and resources efficiently.

## Overview

The Seminar Hall Management System is designed to streamline the process of booking and managing seminar halls within an institution. This system provides a user-friendly interface for students, faculty, and administrators to reserve halls, manage bookings, and oversee resources - all in one centralized platform.

## Features

- **User Authentication and Authorization**
  - Secure login system with role-based access control
  - Different privileges for students, faculty, and administrators

- **Booking Management**
  - Intuitive calendar interface for scheduling
  - Real-time availability checking
  - Conflict prevention for overlapping bookings
  - Booking history and status tracking

- **Resource Management**
  - Equipment inventory tracking
  - Seating capacity management
  - Technical support requests
  - Resource availability visualization

- **Administrative Dashboard**
  - Comprehensive booking overview
  - Analytics and reporting features
  - User management capabilities
  - System configuration settings

- **Notifications System**
  - Email notifications for booking confirmations
  - Reminders for upcoming events
  - Status updates for pending requests

## Technology Stack

- **Frontend**: HTML, CSS, JavaScript, jQuery
- **Backend**: PHP
- **Database**: MySQL
- **Additional Libraries**: Bootstrap, Font Awesome

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/HolyKraken14/SeminarHallManagement.git
   ```

2. Set up a web server environment with PHP and MySQL support (like XAMPP, WAMP, or LAMP)

3. Import the database schema:
   - Create a new MySQL database
   - Import `database/seminar_hall_db.sql` into the created database

4. Configure database connection:
   - Edit `config/database.php` with your database credentials

5. Place the project files in your web server's document root

6. Access the application through your web browser at `http://localhost/SeminarHallManagement`

## Usage

### For Students
- Register for an account
- Browse available seminar halls
- Make booking requests
- View booking history and status

### For Faculty
- Review and approve student booking requests
- Schedule events and lectures
- Request additional resources
- View calendar of upcoming events

### For Administrators
- Manage users and permissions
- Configure system settings
- Generate reports
- Monitor resource utilization

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Project Creator:
- Vrushabh Brahmbhatt
- Sithij Shetty

GitHub: [Vrushabh Brahmbhatt](https://github.com/Vrushabh-Brahmbhatt)
