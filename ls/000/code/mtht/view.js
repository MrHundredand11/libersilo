function gen_ECI(type, className, id) {
    const element = document.createElement(type);
    element.className = className;
    element.setAttribute('id', id);
    return element;
};

function make_brick_rdt(obj) {
    // var overall_page = document.getElementById('the_page')
    
    var obj_brick_cntn = gen_ECI('div', `rdt_cntn`, `id_${obj.id}_cntn`);
    var obj_brick_head = gen_ECI('div', `rdt_${obj.class}_head`, `id_${obj.id}_head`);
    var obj_brick_body = gen_ECI('div', `rdt_${obj.class}_body`, `id_${obj.id}_body`);
    var obj_brick_tail = gen_ECI('div', `rdt_${obj.class}_tail`, `id_${obj.id}_tail`);

    var obj_brick_head_a = gen_ECI('div', `rdt_head_a`, `id_${obj.id}_head_a`);
    var obj_brick_head_b = gen_ECI('div', `rdt_head_b`, `id_${obj.id}_head_b`);
    obj_brick_head_a.innerHTML = `u/${sbrd_display_name}`

    obj_brick_head.innerHTML = obj.title;

    for (i in obj.items) {
        var item = gen_ECI('div', obj.items[i].class, `id_${obj.items[i].id}`);
        item.innerHTML = obj.items[i].title;
        obj_brick_body.appendChild(item);
    };
    console.log(obj_brick_head)
    obj_brick_cntn.append(obj_brick_head, obj_brick_body, obj_brick_tail);
    // overall_page.appendChild(obj_brick_cntn);
};

const { MongoClient } = require('mongodb');
async function main(key) {
    const uri = `mongodb+srv://mrhundredand11:${key}@cluster0.twdgl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
    try {
        await client.connect();
        const database = client.db('Cluster0');
        const collection = database.collection('sbrd');
        const document = await collection.findOne({});
        console.log(document);
    } finally {
        await client.close();
    }
}

export { main };

