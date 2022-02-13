const API = "http://192.168.0.28:3000";

export const getIndex = async()=>{
    const res = await fetch(API, {
        method: "GET",
    });
    return await res.json();
}
export const relayOn = async()=>{
    const res = await fetch(`${API}/ON`, {
        method:"POST",
    })
    return await res.json();
}
export const relayOff = async()=>{
    const res = await fetch(`${API}/OFF`, {
        method:"POST",
    })
    // console.log(res.json());
    return await res.json();
}
