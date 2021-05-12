
// MongoDBEjercicio 2 –ChatVamos a crear un chat con mongo desde la Shell


//.1.Crear una colección 
//para usuarios con la siguiente estructura: username, email, password, birthdate, lastLogin, 
//status(1 objeto con dos campos: onliney available) y contacts.

db.users.insertMany([
    {
        username: 'Pepe',
        email: 'pepe@gmail.com',
        password: '1234',
        birthdate: new Date(1995, 4, 12),
        lastLogin: new Date(2020, 05, 10, 12, 00, 00),
        status: {
            online: true,
            available: false
        },
        contacts: []
    },{
        username: 'cristina',
        email: 'cristina@gmail.com',
        password: '1234',
        birthdate: new Date(1986, 9, 1),
        lastLogin: new Date(2021, 04, 10, 12, 00, 00),
        status: {
            online: false,
            available: false
        },
        contacts: []
    },{
        username: 'Loli',
        email: 'loli@gmail.com',
        password: '1234',
        birthdate: new Date(1983, 2, 14),
        lastLogin: new Date(2021, 05, 10, 12, 00, 00),
        status: {
            online: true,
            available: true
        },
        contacts: []
    },{
        username: 'Karel',
        email: 'loli@gmail.com',
        password: '1234',
        birthdate: new Date(1979, 7, 4),
        lastLogin: new Date(2021, 02, 10, 12, 00, 00),
        status: {
            online: false,
            available: true
        },
        contacts: []
    },
])

//Guardamos los usuarios en una constante

const users = db.users.find().toArray();

//Actualizamos los contacts de cada users a través del id

db.users.update(
    {_id: users[0]._id}, 
    {$set: {contacts: [users[1]._id, users[2]._id, users[3]._id]}}
);
db.users.update(
    {_id: users[1]._id}, 
    {$set: {contacts: [users[0]._id, users[2]._id]}}
);
db.users.update(
    {_id: users[2]._id}, 
    {$set: {contacts: [users[0]._id, users[1]._id]}}
);
db.users.update(
    {_id: users[3]._id}, 
    {$set: {contacts: [users[0]._id]}}
);

//2.Crear una colección chats con los siguientes campos: members(array de IDs) y messages
//(objetos con los campos from, bodyy createAt)

db.chats.insertMany([
    {
        members: [users[0]._id, users[1]._id, users[2]._id],
        messages: [
            {from: users[0]._id, body: "Hola, ¿qué hacemos esta tarde?", createAt: new Date(2021, 05, 09, 10, 05, 00)},
            {from: users[1]._id, body: "Un poquito de terraceo estaría bien", createAt: new Date(2021, 05, 09, 10, 10, 00)},
            {from: users[2]._id, body: "Perfe!!", createAt: new Date(2021, 05, 09, 10, 05, 00)},
        ]
    }, {
        members: [users[0]._id, users[3]._id],
        messages: [
            {from: users[0]._id, body: "Hola, hiciste el ejercicio 7 de React??", createAt: new Date(2021, 05, 09, 10, 05, 00)},
            {from: users[3]._id, body: "What???? Si voy por el 3... :(", createAt: new Date(2021, 05, 09, 10, 05, 00)},
        ]
    }])

//4.Consultar todos los usuarios conectados y disponibles.

db.users.find({"status.online": true, "status.available": false}).pretty();
db.users.find({"status.online": true, "status.available": true}).pretty();
db.users.find({"status.online": false, "status.available": false}).pretty();
db.users.find({"status.online": false, "status.available": true}).pretty();


//5.Cambiar todos los usuarios a conectados y actualizar la fecha del lastLogin.

db.users.update(
    {}, 
    {$set: {"status.online": true, "lastLogin": new Date()}}, 
    {multi: true}
)


//6.Consultar los mensajes del chat en el que están los 3 usuarios.

db.chats.find(
    {members: {$size: 3}},
    {"messages.body": true}
).pretty()

//Verificar si hay algo dentro del array
db.users.find({contacts: users[0]._id}).pretty()



