/* Allgemeine Styles */
body {
    background-color: #f8f9fa;
    font-family: Arial, sans-serif;
}

/* Navigation */
.navbar {
    background-color: #0d6efd;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.nav-link {
    color: white !important;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background-color 0.3s;
    text-decoration: none;
}

.nav-link:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.2);
}

/* Karten */
.card {
    border: none;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    margin-bottom: 1rem;
    background-color: white;
}

.card-header {
    background-color: white;
    border-bottom: 1px solid #eee;
    padding: 1rem;
    font-weight: bold;
}

.card-body {
    padding: 1.5rem;
}

/* Buttons */
.btn {
    border-radius: 5px;
    padding: 0.5rem 1rem;
    transition: all 0.3s;
}

.btn-primary {
    background-color: #0d6efd;
    border-color: #0d6efd;
}

.btn-primary:hover {
    background-color: #0b5ed7;
    border-color: #0a58ca;
}

.btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
}

.btn-danger:hover {
    background-color: #bb2d3b;
    border-color: #b02a37;
}

.btn-warning {
    background-color: #ffc107;
    border-color: #ffc107;
}

.btn-warning:hover {
    background-color: #ffca2c;
    border-color: #ffc720;
}

/* Tabellen */
.table {
    margin-bottom: 0;
}

.table th {
    border-top: none;
    background-color: #f8f9fa;
    font-weight: 600;
}

.table td {
    vertical-align: middle;
}

/* Badges */
.badge {
    padding: 0.5em 0.75em;
    font-weight: 500;
}

/* Formulare */
.form-control, .form-select {
    border-radius: 5px;
    border: 1px solid #ced4da;
    padding: 0.5rem 0.75rem;
}

.form-control:focus, .form-select:focus {
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

/* Bildauswahl */
.bild-auswahl {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
}

.bild-auswahl button {
    flex: 1;
}

/* Modals */
.modal-content {
    border-radius: 10px;
    border: none;
}

.modal-header {
    border-bottom: 1px solid #eee;
    padding: 1rem;
}

.modal-footer {
    border-top: 1px solid #eee;
    padding: 1rem;
}

/* Responsive Anpassungen */
@media (max-width: 768px) {
    .nav-links {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .nav-link {
        width: 100%;
        text-align: center;
    }
    
    .card-body {
        padding: 1rem;
    }
    
    .table-responsive {
        margin: 0 -1rem;
    }
}
