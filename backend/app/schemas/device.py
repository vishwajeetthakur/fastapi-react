from pydantic import BaseModel
import datetime
from typing import Optional
from uuid import UUID

# Pydantic Schemas for Device
class DeviceBase(BaseModel):
    equip_inst_id: int
    status: str
    category: str
    vendor: str
    model: str
    sanitize_model_id: int
    description: str
    shelf: str
    hostname: str
    ip_address_v4: str
    netmask_v4: str
    ip_address_v6: str
    netmask_v6: str

class DeviceCreate(DeviceBase):
    pass

class DeviceInDB(DeviceBase):
    pri_key: UUID
    created_timestamp: datetime.datetime
    last_updated_timestamp: Optional[datetime.datetime]

    class Config:
        from_attributes = True
