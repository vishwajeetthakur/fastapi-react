import React from 'react';

function DeviceCard({ loading, error, deviceData }) {
    return (
        <div className={`device-card${error ? ' error' : ''}`}>
            <h2>Device Details</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {error ? (
                        <p className="error-text">{error}</p>
                    ) : (
                        
                        <>
                        <p>Equipment Instance ID: {deviceData?.equip_inst_id}</p>
                        
                        <p>Category: {deviceData.category}</p>
                        <p>Vendor: {deviceData.vendor}</p>
                        <p>Model: {deviceData.model}</p>
                        <p>Description: {deviceData.description}</p>
                        <p>Shelf: {deviceData.shelf}</p>
                        <p>Hostname: {deviceData.hostname}</p>
                        <p>IPv4 Address: {deviceData.ip_address_v4}</p>
                        <p>IPv4 Netmask: {deviceData.netmask_v4}</p>
                        <p>IPv6 Address: {deviceData.ip_address_v6}</p>
                        <p>IPv6 Netmask: {deviceData.netmask_v6}</p>
                        <p>Primary Key: {deviceData.pri_key}</p>
                        <p>Created Timestamp: {deviceData.created_timestamp}</p>
                        <p>Last Updated Timestamp: {deviceData.last_updated_timestamp}</p>
                   
                        </>
                        
                    )}
                </>
            )}
        </div>
    );
}

export default DeviceCard;
