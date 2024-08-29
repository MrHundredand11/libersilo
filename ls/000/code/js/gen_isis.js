function gen_Pntr(lf_i, scion_id, pnt_type) {
    var pntr = gen_ECI('div', 'styl_pointers styl_pnt_0deg', `id_pnt_${scion_id}_${lf_i}`);
    pntr.setAttribute('onclick', `rotatePointer('id_pnt_${scion_id}_${lf_i}'); pb_scns('id_insc_scns_extr_${scion_id}');`);
    if (pnt_type !== undefined) {
        pntr.innerHTML = `${pnt_type}&nbsp`;
    } else {
        pntr.innerHTML = "+>&nbsp;";
    }
    return pntr;
};

function generateLeafIdNum(scion_id, lf_i) {
    
    if (scion_id == undefined) {
        var randy = (Math.floor(Math.random() * (111 - 1) + 1)) * (Math.floor(Math.random() * (111 - 1) + 1)) * ((Math.floor(Math.random() * 111) + 1));
        var rando = randy * randy * randy;
        const lf_idx = "lf_" + rando + "_" + lf_i;
        var lf_id = `id_lf_${lf_idx}_${lf_i}`;
    } else {
        var lf_id = `id_lf_${scion_id}_${lf_i}`;
    }
    return lf_id;
};
function generateBladeIdNum(scion_id, lf_i) {
    //var randy = (Math.floor(Math.random() * (111 - 1) + 1)) * (Math.floor(Math.random() * (111 - 1) + 1)) * ((Math.floor(Math.random() * 111) + 1));
    //var rando = randy * randy * randy;
    //const lf_id = "lf_" + rando + "_" + xx;
    var bld_id = `id_lf_bld_${scion_id}_${lf_i}`;
    return bld_id;
};

function generateLeafletIdNum(xx) {
    var randy = (Math.floor(Math.random() * (111 - 1) + 1)) * (Math.floor(Math.random() * (111 - 1) + 1)) * ((Math.floor(Math.random() * 111) + 1));
    var rando = randy * randy * randy;
    const leaflet_id = "leaflet_" + rando + "_" + xx;
    return leaflet_id;
}

function generateTag(in_id, stpl) {
    var stpl_full = gen_ECI('div', 'styl_tag', `id_stpl_${in_id}`);
    stpl_full.setAttribute('onclick', `showHide('${in_id}')`);
    stpl_full.innerHTML = `[${stpl}]::&nbsp`;
    return stpl_full;
}

function generateBranchID(pnt) {
    const brnch_id = "brnch_id_" + pnt;
}

function gen_term(lf_id, lf_term) {
    if (lf_term == undefined) {
        return undefined;
    } else {
        var trm = gen_ECI('div', 'trm_rg', `trm_${lf_id}`);
        trm.innerHTML = lf_term;
        return trm;
    }
}

function gen_link(lf_id, lf_term) {
    if (lf_term == undefined) {
        return undefined;
    } else {
        var lnk = gen_ECI('div', 'trm_rg', `lnk_${lf_id}`);
        lnk.innerHTML = `<a href='${lf_term}' target='_blank'>${lf_term}</a>`;
        return lnk;
    }
}

function gen_Info(insc_i, insc_id, info) {
    var info_bit = gen_ECI('div', 'styl_info_bit', `id_info_bit_${insc_id}_${insc_i}`);
    info_bit.innerHTML = info.info_ttl;
    return info_bit;
}

function gen_rsrc_vid(insc_id, insc_path, insc_rsrc) {
    var rsrc_bit = gen_ECI('div', 'styl_rsrc_vid_bit', 'id_testestestestest');
    var test_path = '/libersilo/ls/000/rsrc/vd/dgtl/testestestest.json';
    var rs_1;
    // var rsrc_path = `${insc_path}`;
    var rsrc_obj = grabby(test_path);
    console.log(rsrc_obj);
    var rsrc_obj2 = grabby2(test_path);
    console.log(rsrc_obj2);
    var rsrc_obj3 = grabby3(test_path);
    console.log(rsrc_obj3);
    var rsrc_obj4 = grabby4(test_path);
    console.log(rsrc_obj4);

    const grabby5_a = fetch(test_path)
        .then((response) => response.json())
        .then((data) => {
            return data;
        });

    const grabby5_b = async () => {
        const a = await grabby5_a;
        console.log(a);
        return a;
    };

    grabby5_b(test_path);
    var t = grabby5_b(test_path);
    console.log(t);

    const grabby6_a = fetch(test_path)
        .then((response) => response.json())
        .then((data) => {
            return data;
        });

    const grabby6_b = async () => {
        const a = await grabby6_a;
        console.log(a);
        rs_1 = a;
        return rs_1;
    };

    console.log(rs_1);

    grabby6_b(test_path);
    var t2 = grabby6_b(test_path);
    console.log(t2);
    
    // fetch(test_path)
    //     .then(res => res.json())
    //     .then(data => {
    //         rsrc_obj = data;
    //     })
    //     .then(() => {
    //         console.log(rsrc_obj);
    //     })
//    console.log(rsrc_obj)
    //console.log(rsrc_obj["vid_title"])

    // fetch(test_path)
    //     .then((res) => {
    //         if (!res.ok) {
    //             throw new Error
    //                 (`HTTP error! Status: ${res.status}`);
    //         }
    //         return res.json();
    //     })
    //     .then(data => {
    //         rsrc_obj = data;
    //         return rsrc_obj;
    //     })
    //     .then(() =>
    //         console.log(rsrc_obj))
    //     .catch((error) =>
    //         console.error("Unable to fetch data:", error));
    
    //rsrc_bit.innerHTML = rsrc_obj["vid_title"];
    return rsrc_bit;
}

/*function getVers(obj, sc_id) {
    console.log(obj);
    const option = obj.value;
    console.log(option);
    console.log(sc_id);
    switch (option) {
        case 'vw_vrs_live':

            break;
        
        case 'vw_vrs_live':

            break;

    }
    return;
}*/

async function grabby(path) {
    let obj;
    const res = await fetch(path)
    obj = await res.json();
    console.log(obj)
    return obj;
};

async function grabby2(path) {
    let obj;
    let res = await fetch(path)
    obj = await res.json();
    console.log(obj)
    return obj;
};

async function grabby4(path) {
    return fetch(path)
        .then((response) => {
            return response.json().finally((data) => {
                return data;
            }).catch((err) => {
                console.log(err)
            })
        });
};

const grabby3 = async (path, callback) => {
    let fileData = await fetch(path)
    let fileJson = await fileData.json();
    return fileJson;
};

const grabby5_a = fetch(path)
    .then((response) => response.json())
    .then((data) => {
        return data;
    });

const grabby5_b = async () => {
    const a = await grabby5_a;
    console.log(a);
    return a;
};

// const getFile = async () => {
//     let jsonData = await 
// }