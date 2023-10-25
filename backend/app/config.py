import os
from dotenv import load_dotenv
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine

# Configuration
ENV_FILE = ".env"  
load_dotenv(ENV_FILE)

# Database Configuration
DATABASE_USERNAME = os.getenv("DATABASE_USERNAME")
DATABASE_PASSWORD = os.getenv("DATABASE_PASSWORD")
MARIADB_HOST = os.getenv("MARIADB_HOST", "mariadb")
MARIADB_PORT_NUMBER = os.getenv("MARIADB_PORT_NUMBER")  
MARIADB_DATABASE = os.getenv("MARIADB_DATABASE")

DATABASE_URL = f"mysql+mysqldb://{DATABASE_USERNAME}:{DATABASE_PASSWORD}@{MARIADB_HOST}:{MARIADB_PORT_NUMBER}/{MARIADB_DATABASE}"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
