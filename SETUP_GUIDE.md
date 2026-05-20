# Django + React Setup Guide

## Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Backend: http://localhost:8000
Admin: http://localhost:8000/admin

## Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend: http://localhost:3000

## API Endpoints

- `GET /api/products/` - List products
- `POST /api/products/` - Create product
- `GET /api/orders/` - List orders
- `POST /api/orders/` - Create order