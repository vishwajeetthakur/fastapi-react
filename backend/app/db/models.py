from sqlalchemy import Column, Integer, String, DateTime, func
from config import Base
import uuid

class Device(Base):
    __tablename__ = "device_table"
    pri_key = Column(String(36), primary_key=True, index=True, comment="String representation of UUID", default=str(uuid.uuid4()))
    equip_inst_id = Column(Integer, index=True)
    status = Column(String(50))
    category = Column(String(50))
    vendor = Column(String(50))
    model = Column(String(50))
    sanitize_model_id = Column(Integer)
    description = Column(String(250))
    shelf = Column(String(50))
    hostname = Column(String(50))
    ip_address_v4 = Column(String(15))
    netmask_v4 = Column(String(15))
    ip_address_v6 = Column(String(45))
    netmask_v6 = Column(String(45))
    created_timestamp = Column(DateTime(timezone=True), server_default=func.now())
    last_updated_timestamp = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

