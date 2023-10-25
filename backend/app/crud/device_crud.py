from sqlalchemy.orm import Session
from db.models import Device
from schemas.device import DeviceCreate, DeviceBase
from fastapi import HTTPException
import uuid


# CRUD operations for Device
class DeviceCRUD:
    @staticmethod
    def create(db, device: DeviceCreate):
        db_device = Device(**device.dict(), pri_key=str(uuid.uuid4()))
        db.add(db_device)
        db.commit()
        db.refresh(db_device)
        return db_device

    @staticmethod
    def get_by_id(db: Session, device_id: str):
        device = db.query(Device).filter(Device.pri_key == device_id).first()
        return device

    @staticmethod
    def get_all(db: Session, skip: int = 0, limit: int = 10):
        devices = db.query(Device).all()
        return devices

    @staticmethod
    def update(db: Session, device_id: str, device_update: DeviceBase):
        db_device = db.query(Device).filter(Device.pri_key == device_id).first()
        if db_device is None:
            raise HTTPException(status_code=404, detail="Device not found")

        for key, value in device_update.dict().items():
            setattr(db_device, key, value)

        db.commit()
        db.refresh(db_device)
        return db_device

    @staticmethod
    def delete(db: Session, device_id: str):
        device = db.query(Device).filter(Device.pri_key == device_id).first()
        if device is None:
            raise HTTPException(status_code=404, detail="Device not found")

        db.delete(device)
        db.commit()
        return device


