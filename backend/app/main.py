from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from config import DATABASE_URL
from crud.device_crud import DeviceCRUD
from schemas.device import DeviceBase, DeviceCreate, DeviceInDB
from typing import List
from config import SessionLocal


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8088",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/devices/", response_model=DeviceInDB)
def create_device(device: DeviceCreate, db: Session = Depends(get_db)):
    return DeviceCRUD.create(db, device)

@app.get("/devices/", response_model=List[DeviceInDB])
def get_all_devices(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    devices = DeviceCRUD.get_all(db, skip, limit)
    return devices

@app.get("/devices/{device_id}", response_model=DeviceInDB)
def get_device(device_id: str, db: Session = Depends(get_db)):
    device = DeviceCRUD.get_by_id(db, device_id)
    if device is None:
        raise HTTPException(status_code=404, detail="Device not found")
    return device

@app.put("/devices/{device_id}", response_model=DeviceInDB)
def update_device(device_id: str, device_update: DeviceBase, db: Session = Depends(get_db)):
    updated_device = DeviceCRUD.update(db, device_id, device_update)
    if updated_device is None:
        raise HTTPException(status_code=404, detail="Device not found")
    return updated_device

@app.delete("/devices/{device_id}", response_model=DeviceInDB)
def delete_device(device_id: str, db: Session = Depends(get_db)):
    deleted_device = DeviceCRUD.delete(db, device_id)
    if deleted_device is None:
        raise HTTPException(status_code=404, detail="Device not found")
    return deleted_device
