db = db.getSiblingDB("admin");

db.createUser({
    user: "globalAdminUser",
    pwd: "5xd49$4%0bef#6c&b*d",
    roles: [
        { role: "userAdminAnyDatabase", db: "admin" }
    ]
});

db.createUser({
    user: "clusterAdminAny",
    pwd: "123456",
    roles: [
        {role: "clusterAdmin", db: "admin"}
    ]
});

db.createUser({
    user: "user150",
    pwd: "user150",
    roles: [
        { role: "readWrite", db: "admin" }
    ]
});