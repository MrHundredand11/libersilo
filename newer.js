
let pnt_plus = "<div class='styl_pointers'>+> </div>" + " ";
let pnt_minus = "<div class='styl_pointers' id='pntmns' onclick='rotatePointer()'>-> </div>" + " ";
let pnt_branch = "<div class='styl_pointers'>]}=> </div>" + " ";
let pnt_lixp = "<div class='styl_pointers'>+=>&nbsp</div>";
let bmp_brnch_top = "<div class='bumpers'>---<br>--- ---<br>--- --- ---</div>"
let bmp_stem_top = "<div class='bumpers'>--- ---<br>--- --- ---</div>";
let bmp_stem_bttm = "<div class='bump_butt'>---- ---- ----<br>---- ----</div>";
let bmp_stem_liste = "<div class='bumpers'>--- --- --- --- --- --- ---</div>";
let bmp_stem_cycl = "<div class='styl_stem_cycl bumpers'><br>------- ------- -------<br>------- -------<br>-------</div>";
let bmp_stem_exli = "<div class='bumper'>---<br>--- ---<br></div>";
let bmp_stem_exli_bttm = "<div class='styl_stem_tail'><br>---- ----<br>----<br></div>";
let bmp_brnch_tail = "<div class='styl_stem_tail'>---- ---- ---- ----<br>---- ---- ---- ----<br>---- ---- ---- ----<br>---- ---- ---- ----</div>";
let bmp_sld_01 = "\\_";
let bmp_def = "&nbsp=&nbsp";
let bmp_stm_02 = "-- --<br>-- -- --<br>";

function fillErUp(x) {
    fetchy(x);
};

// function createElementWithClass(type, className) {
//     const element = document.createElement(type);
//     element.className = className;
//     return element;
// }

// function gen_ECI(type, className, id) {
//     const element = document.createElement(type);
//     element.className = className;
//     element.setAttribute('id', id);
//     return element;
// }

function shovelDigging(scion_id) {
    var shvl = document.getElementById("id_b_p_" + scion_id).className;    
    switch(shvl) {
        case 'styl_shvl_s0':
            document.getElementById('id_b_bmp_top_' + scion_id).style.display = "block";
            document.getElementById('id_b_bmp_btm_' + scion_id).style.display = "block";
            document.getElementById('id_b_trstlbrd_' + scion_id).style.display = "block";
            document.getElementById('id_b_p_' + scion_id).classList.remove('styl_shvl_s0');
            document.getElementById('id_b_p_' + scion_id).classList.add('styl_shvl_s1');
            document.getElementById('id_b_cntnr_' + scion_id).classList.add('styl_brnch_hide');
            document.getElementById('id_b_cntnr_' + scion_id).classList.remove('styl_stm_show');
            break;

        case 'styl_shvl_s1':
            document.getElementById('id_b_p_' + scion_id).setAttribute('class', 'styl_shvl_s2');
            break;

        case 'styl_shvl_s2':
            document.getElementById('id_b_bmp_top_' + scion_id).style.display = "none";
            document.getElementById('id_b_bmp_btm_' + scion_id).style.display = "none";
            document.getElementById('id_b_trstlbrd_' + scion_id).style.display = "none";
            document.getElementById('id_b_p_' + scion_id).setAttribute('class', 'styl_shvl_s0');
            break;
    }
    

}

function showHideStem(scion_id) {
    var stm_clss = document.getElementById("id_stm_cntnr_" + scion_id).className;
    if (stm_clss.includes('stt_show')) {
        document.getElementById('id_stm_bmp_top_' + scion_id).style.display = "none";
        document.getElementById('id_stm_bmp_btm_' + scion_id).style.display = "none";
        document.getElementById('id_stm_trstlbrd_' + scion_id).style.display = "none";
        document.getElementById('id_stm_cntnr_' + scion_id).classList.add('stt_hide');
        document.getElementById('id_stm_cntnr_' + scion_id).classList.remove('stt_show');
    } else if (stm_clss.includes('stt_hide')) {
        document.getElementById('id_stm_bmp_top_' + scion_id).style.display = "block";
        document.getElementById('id_stm_bmp_btm_' + scion_id).style.display = "block";
        document.getElementById('id_stm_trstlbrd_' + scion_id).style.display = "block";
        document.getElementById('id_stm_cntnr_' + scion_id).classList.add('stt_show');
        document.getElementById('id_stm_cntnr_' + scion_id).classList.remove('stt_hide');
    }
    

}

function showHideTwig(scion_id) {
    var twg_clss = document.getElementById("id_twg_cntnr_" + scion_id).className;
    if (twg_clss.includes('stt_show')) {
        document.getElementById('id_twg_bmp_top_' + scion_id).style.display = "none";
        document.getElementById('id_twg_bmp_btm_' + scion_id).style.display = "none";
        document.getElementById('id_twg_trstlbrd_' + scion_id).style.display = "none";
        document.getElementById('id_twg_cntnr_' + scion_id).classList.add('stt_hide');
        document.getElementById('id_twg_cntnr_' + scion_id).classList.remove('stt_show');
    } else if (twg_clss.includes('stt_hide')) {
        document.getElementById('id_twg_bmp_top_' + scion_id).style.display = "block";
        document.getElementById('id_twg_bmp_btm_' + scion_id).style.display = "block";
        document.getElementById('id_twg_trstlbrd_' + scion_id).style.display = "block";
        document.getElementById('id_twg_cntnr_' + scion_id).classList.add('stt_show');
        document.getElementById('id_twg_cntnr_' + scion_id).classList.remove('stt_hide');
    }
}

function showHideStmExp(lf_id) {
    var twg_clss = document.getElementById(`${lf_id}_lf_stm_olst_exp`).className;
   // `${lf_id}_stm_olst_exp`
   console.log(twg_clss);
    if (twg_clss.includes('stt_show')) {
        document.getElementById(`${lf_id}_lf_stm_olst_exp_bmp_top`).style.display = "none";
        console.log("1");
        document.getElementById(`${lf_id}_lf_stm_olst_exp_bmp_btm`).style.display = "none";
        console.log("2");
        document.getElementById(`${lf_id}_lf_stm_olst_exp_cntn`).style.display = "none";
        console.log("3");
        document.getElementById(`${lf_id}_lf_stm_olst_exp`).classList.add('stt_hide');
        document.getElementById(`${lf_id}_lf_stm_olst_exp`).classList.remove('stt_show');
    } else if (twg_clss.includes('stt_hide')) {
        document.getElementById(`${lf_id}_lf_stm_olst_exp_bmp_top`).style.display = "block";
        document.getElementById(`${lf_id}_lf_stm_olst_exp_bmp_btm`).style.display = "block";
        document.getElementById(`${lf_id}_lf_stm_olst_exp_cntn`).style.display = "block";
        document.getElementById(`${lf_id}_lf_stm_olst_exp`).classList.add('stt_show');
        document.getElementById(`${lf_id}_lf_stm_olst_exp`).classList.remove('stt_hide');
    }
}

// function createBranch(name, scion_id) {
//     var mainContainer = document.getElementById("trestleboard");
//     mainContainer.innerHTML = "";
    
//     var brnch_cntnr = createElementWithClass('div', 'styl_brnch_cntnr');
//     var brnch_bmp_top = createElementWithClass('div', 'styl_brnch_bmp_top');
//     var brnch_nametag = createElementWithClass('div', 'styl_brnch_nametag');
//     var brnch_trstlbrd = createElementWithClass('div', 'styl_brnch_trstlbrd');
//     var brnch_bmp_btm = createElementWithClass('div', 'styl_brnch_bmp_btm');

//     brnch_cntnr.setAttribute('id', ('b_id_cntnr_' + scion_id));
//     brnch_bmp_top.setAttribute('id', ('b_id_bmp_top_' + scion_id));
//     brnch_nametag.setAttribute('id', ('b_id_nametag_' + scion_id));
//     brnch_trstlbrd.setAttribute('id', ('b_id_trstlbrd_' + scion_id));
//     brnch_bmp_btm.setAttribute('id', ('b_id_bmp_btm_' + scion_id));

//     brnch_bmp_top.innerHTML = "---<br>--- ---<br>--- --- ---";
//     brnch_bmp_btm.innerHTML = "---- ---- ---- ----<br>---- ---- ---- ----<br>---- ---- ---- ----<br>---- ---- ---- ----";
//     brnch_nametag.innerHTML = `<span class='styl_shvl_s0' id='b_id_p_${scion_id}' onclick='shovelDigging(\"${scion_id}\")'>-></span> <span class='styl_brnch_nametag_name'>Directory to ${name}</span>:`;

//     brnch_cntnr.appendChild(brnch_bmp_top);
//     brnch_cntnr.appendChild(brnch_nametag);
//     brnch_cntnr.appendChild(brnch_trstlbrd);
//     brnch_cntnr.appendChild(brnch_bmp_btm);
//     mainContainer.appendChild(brnch_cntnr);
//     return;
// };

function mnu_showHide_top(scion_id) {
    var cnt = document.getElementById(`mnu_accrd_cntnr_${scion_id}`);
    cnt.classList.toggle("active");
    var panel = document.getElementById(`mnu_accrd_cntn_${scion_id}`);
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}
function mnu_showHide_fldr(scion_id) {
    var cnt = document.getElementById(`mnu_accrd_fldr_${scion_id}`);
    cnt.classList.toggle("styl_mnu_accrd_fldr_active");
    var panel = document.getElementById(`mnu_accrd_fldr_cntn_${scion_id}`);
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}

function mnu_active_entry(scion_id) {
    var cnt = document.getElementById(`mnu_accrd_entry_${scion_id}`);
    cnt.classList.toggle("active");

    if (cnt.style['background-color'] === '#F0F0F0') {
        cnt.style['background-color'] = '#B0B0B0';
    } else {
        cnt.style['background-color'] = '#F0F0F0';
    }
}


// function whatsOnTheMenu() {
//     fetch(m_a4)
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             function genMen(data) {
//                 var m_top = document.getElementById('id_mnu_top');
//                 var m_btm = document.getElementById('id_mnu_btm');
//                 var menu_tablet = createElementWithClass('div', 'styl_menu_tablet');
//                 var side_seal = createElementWithClass('div', 'styl_side_seal');
//                 side_seal.setAttribute('onclick', 'homeFetch()');
//                 side_seal.innerHTML = "<img src='Seal.jpg' width='111' height='111'></img><br>-> Menu <-<br>";
//                 m_top.appendChild(side_seal);
//                 m_btm.appendChild(menu_tablet);

//                 let drct_tree = data.scions;

//                 // for (x1 in data.scions) {
//                 //     console.log(gen_menu(data.scions[x1]));
//                 // }

//                 for (mn in drct_tree) {
//                     var accrd_cntnr = gen_ECI('div', 'styl_mnu_accrd_cntnr', `mnu_accrd_cntnr_${drct_tree[mn].scion_id}`);
//                     var accrd_ttl = gen_ECI('div', 'styl_mnu_accrd_ttl', `mnu_accrd_ttl_${drct_tree[mn].scion_id}`);                    
//                     var accrd_cntn = gen_ECI('div', 'styl_mnu_accrd_cntn', `mnu_accrd_cntn_${drct_tree[mn].scion_id}`);
//                     accrd_ttl.innerHTML = `${drct_tree[mn].ls_ttl}`;
//                     accrd_ttl.setAttribute("onclick", `mnu_showHide_top('${drct_tree[mn].scion_id}')`);
//                     accrd_cntnr.append(accrd_ttl, accrd_cntn);          
//                     menu_tablet.appendChild(accrd_cntnr);
                    
//                     for (mnu in drct_tree[mn].scions) {
//                         //console.log(gen_men(data.scions[mn].scions[mnu]));
//                         accrd_cntn.appendChild(gen_men(drct_tree[mn].scions[mnu]));
//                     }

//                     function gen_men(mnu) {
//                         console.log(mnu);
//                         console.log(mnu.ls_type);
//                         switch (mnu.ls_type) {
//                             case '=>':
//                                 var mnu_fldr = gen_ECI('div', 'styl_mnu_accrd_fldr', `mnu_accrd_fldr_${mnu.scion_id}`);
//                                 var mnu_fldr_ttl = gen_ECI('div', 'styl_mnu_accrd_fldr_ttl', `mnu_accrd_fldr_ttl_${mnu.scion_id}`);
//                                 var mnu_fldr_cntn = gen_ECI('div', 'styl_mnu_accrd_fldr_cntn', `mnu_accrd_fldr_cntn_${mnu.scion_id}`);
//                                 mnu_fldr_ttl.innerHTML = `${mnu.ls_type}&nbsp${mnu.ls_ttl}`;
//                                 mnu_fldr_ttl.setAttribute('onclick', `mnu_showHide_fldr('${mnu.scion_id}')`);
//                                 mnu_fldr.append(mnu_fldr_ttl, mnu_fldr_cntn);

//                                 for (mnu_i in mnu.scions) {
//                                     // console.log(mnu.scions[mnu_i].ls_id);
//                                     // console.log(mnu.scions[mnu_i].ls_ttl);
//                                     // console.log(mnu.scions[mnu_i].ls_type);
//                                     console.log(gen_men(mnu.scions[mnu_i]));
//                                     mnu_fldr_cntn.appendChild(gen_men(mnu.scions[mnu_i]));
//                                 }
//                                 return mnu_fldr;

//                             case '+>':   
//                                 var menu_entry = createElementWithClass('div', 'styl_mnu_accrd_entry');
//                                 menu_entry.setAttribute('id', `mnu_accrd_entry_${mnu.scion_id}`);
//                                 menu_entry.setAttribute('onclick', `fillErUp('${mnu.ls_url}'); mnu_active_entry('${mnu.scion_id}');`);
//                                 menu_entry.innerHTML = `${mnu.ls_type}&nbsp${mnu.ls_ttl}`;
//                                 //ccrd_list.appendChild(menu_entry);
//                                 return menu_entry;
//                         }
//                     }

                    

//                     // for (ent in data.scions[mn]) {
//                     //     console.log(data.scions[mn].scions[ent].ls_ttl);
//                     //     //console.log(gen_men(data.scions[mn].scions[ent]));
//                     // }

//                     // for (i in data.scions) {
//                     //     var drct_i = createElementWithClass('div', 'styl_drct_item');
//                     //     var drct_i_pnt = generatePointer(data.scions[i].scion_id, i);
//                     //     var drct_i_ttl = createElementWithClass('a', 'styl_drct_item_ttl');
//                     //     drct_i_ttl.setAttribute('href', `#id_b_cntnr_${data.scions[i].scion_id}`);
//                     //     drct_i_ttl.innerHTML = `${data.scions[i].drct_id} = ${data.scions[i].drct_ttl}`;
//                     //     drct_i.appendChild(drct_i_pnt);
//                     //     drct_i.appendChild(drct_i_ttl);
//                     //     directory_cntn.appendChild(drct_i);
//                     // }
                    

//                     // for (entry in data.scions[mn].scions) {
                        
//                     //     if (data.scions[mn].scions[entry].ls_type === "=>") {
//                     //         var mnu_fldr = createElementWithClass('div', 'styl_mnu_accrd_fldr');
//                     //         var mnu_fldr_ttl = createElementWithClass('div', 'styl_mnu_accrd_fldr_ttl');
//                     //         var mnu_fldr_cntn = createElementWithClass('div', 'styl_mnu_accrd_fldr_cntn');
//                     //         mnu_fldr.setAttribute('id', `mnu_accrd_fldr_${data.scions[mn].scions[entry].scion_id}`);
//                     //         mnu_fldr_ttl.setAttribute('id', `mnu_accrd_fldr_ttl_${data.scions[mn].scions[entry].scion_id}`);
//                     //         mnu_fldr_cntn.setAttribute('id', `mnu_accrd_fldr_cntn_${data.scions[mn].scions[entry].scion_id}`)
//                     //         mnu_fldr_ttl.setAttribute('onclick', `mnu_showHide_fldr('${data.scions[mn].scions[entry].scion_id}')`);
//                     //         mnu_fldr_ttl.innerHTML = `${data.scions[mn].scions[entry].ls_type}&nbsp${data.scions[mn].scions[entry].ls_ttl}`;
                            
//                     //         mnu_fldr.appendChild(mnu_fldr_ttl);
//                     //         mnu_fldr.appendChild(mnu_fldr_cntn);
//                     //         accrd_list.appendChild(mnu_fldr);
//                     //         for (entry2 in data.scions[mn].scions[entry].scions) {
//                     //             var menu_entry2 = createElementWithClass('div', 'styl_mnu_accrd_entry');
//                     //             menu_entry2.setAttribute('id', `mnu_accrd_entry_${data.scions[mn].scions[entry].scions[entry2].scion_id}`);
//                     //             menu_entry2.setAttribute('onclick', `fillErUp('${data.scions[mn].scions[entry].scions[entry2].ls_url}'); mnu_active_entry('${data.scions[mn].scions[entry].scions[entry2].scion_id}');`);
//                     //             menu_entry2.innerHTML = data.scions[mn].scions[entry].scions[entry2].ls_ttl;
//                     //             mnu_fldr_cntn.appendChild(menu_entry2);
//                     //         }

//                     //         // if (data.record.scions[mn].scions[entry].ls_type === "=>") {
//                     //         //     var mnu_fldr = createElementWithClass('div', 'styl_mnu_accrd_fldr');
//                     //         //     var mnu_fldr_ttl = createElementWithClass('div', 'styl_mnu_accrd_fldr_ttl');
//                     //         //     var mnu_fldr_cntn = createElementWithClass('div', 'styl_mnu_accrd_fldr_cntn');
//                     //         //     mnu_fldr.setAttribute('id', `mnu_accrd_fldr_${data.record.scions[mn].scions[entry].scion_id}`);
//                     //         //     mnu_fldr_ttl.setAttribute('id', `mnu_accrd_fldr_ttl_${data.record.scions[mn].scions[entry].scion_id}`);
//                     //         //     mnu_fldr_cntn.setAttribute('id', `mnu_accrd_fldr_cntn_${data.record.scions[mn].scions[entry].scion_id}`)
//                     //         //     mnu_fldr_ttl.setAttribute('onclick', `mnu_showHide_fldr('${data.record.scions[mn].scions[entry].scion_id}')`);
//                     //         //     mnu_fldr_ttl.innerHTML = `${data.record.scions[mn].scions[entry].ls_type}&nbsp${data.record.scions[mn].scions[entry].ls_ttl}`;
                                
//                     //         //     mnu_fldr.appendChild(mnu_fldr_ttl);
//                     //         //     mnu_fldr.appendChild(mnu_fldr_cntn);
//                     //         //     accrd_list.appendChild(mnu_fldr);

//                     //             // for (entry3 in data.record.scions[mn].scions[entry].scions[entry2].scions) {
//                     //             //     var menu_entry3 = createElementWithClass('div', 'styl_mnu_accrd_entry');
//                     //             //     menu_entry3.setAttribute('id', `mnu_accrd_entry_${data.record.scions[mn].scions[entry].scions[entry2].scions[entry3].scion_id}`);
//                     //             //     menu_entry3.setAttribute('onclick', `fillErUp('${data.record.scions[mn].scions[entry].scions[entry2].ls_url}')`);
//                     //             //     menu_entry3.innerHTML = data.record.scions[mn].scions[entry].scions[entry3].ls_ttl;
//                     //             //     mnu_fldr_cntn.appendChild(menu_entry3);

//                     //             //     // if (data.record.scions[mn].scions[entry].scions[entry2].ls_type === "=>") {
//                     //             //     //     var mnu_fldr = createElementWithClass('div', 'styl_mnu_accrd_fldr');
//                     //             //     //     var mnu_fldr_ttl = createElementWithClass('div', 'styl_mnu_accrd_fldr_ttl');
//                     //             //     //     var mnu_fldr_cntn = createElementWithClass('div', 'styl_mnu_accrd_fldr_cntn');
//                     //             //     //     mnu_fldr.setAttribute('id', `mnu_accrd_fldr_${data.record.scions[mn].scions[entry].scions[entry2].scion_id}`);
//                     //             //     //     mnu_fldr_ttl.setAttribute('id', `mnu_accrd_fldr_ttl_${data.record.scions[mn].scions[entry].scions[entry2].scion_id}`);
//                     //             //     //     mnu_fldr_cntn.setAttribute('id', `mnu_accrd_fldr_cntn_${data.record.scions[mn].scions[entry].scions[entry2].scion_id}`)
//                     //             //     //     mnu_fldr_ttl.setAttribute('onclick', `mnu_showHide_fldr('${data.record.scions[mn].scions[entry].scions[entry2].scion_id}')`);
//                     //             //     //     mnu_fldr_ttl.innerHTML = `${data.record.scions[mn].scions[entry].scions[entry2].ls_type}&nbsp${data.record.scions[mn].scions[entry].scions[entry2].ls_ttl}`;
                                        
//                     //             //     //     mnu_fldr.appendChild(mnu_fldr_ttl);
//                     //             //     //     mnu_fldr.appendChild(mnu_fldr_cntn);
//                     //             //     //     menu_entry3.appendChild(mnu_fldr);
//                     //             //     //     for (entry2 in data.record.scions[mn].scions[entry].scions) {
//                     //             //     //         var menu_entry2 = createElementWithClass('div', 'styl_mnu_accrd_entry');
//                     //             //     //         menu_entry2.setAttribute('id', `mnu_accrd_entry_${data.record.scions[mn].scions[entry].scions[entry2].scions[entry2].scion_id}`);
//                     //             //     //         menu_entry2.setAttribute('onclick', `fillErUp('${data.record.scions[mn].scions[entry].scions[entry2].scions[entry2].ls_url}')`);
//                     //             //     //         menu_entry2.innerHTML = data.record.scions[mn].scions[entry].scions[entry2].scions[entry2].ls_ttl;
//                     //             //     //         mnu_fldr_cntn.appendChild(menu_entry2);
//                     //             //     //     }
                                        
//                     //             //     // } else if (data.record.scions[mn].scions[entry].scions[entry2].ls_type === "+>") {
//                     //             //     //     var menu_entry = createElementWithClass('div', 'styl_mnu_accrd_entry');
//                     //             //     //     menu_entry.setAttribute('id', `mnu_accrd_entry_${data.record.scions[mn].scions[entry].scions[entry2].scion_id}`);
//                     //             //     //     menu_entry.setAttribute('onclick', `fillErUp('${data.record.scions[mn].scions[entry].scions[entry2].ls_url}')`);
//                     //             //     //     menu_entry.innerHTML = `${data.record.scions[mn].scions[entry].scions[entry2].ls_type}&nbsp${data.record.scions[mn].scions[entry].scions[entry2].ls_ttl}`;
//                     //             //     //     accrd_list.appendChild(menu_entry);
//                     //             //     // }
//                     //             // }
                            
//                     //     // } else if (data.record.scions[mn].scions[entry].ls_type === "+>") {
//                     //     //     var menu_entry = createElementWithClass('div', 'styl_mnu_accrd_entry');
//                     //     //     menu_entry.setAttribute('id', `mnu_accrd_entry_${data.record.scions[mn].scions[entry].scion_id}`);
//                     //     //     menu_entry.setAttribute('onclick', `fillErUp('${data.record.scions[mn].scions[entry].ls_url}')`);
//                     //     //     menu_entry.innerHTML = `${data.record.scions[mn].scions[entry].ls_type}&nbsp${data.record.scions[mn].scions[entry].ls_ttl}`;
//                     //     //     accrd_list.appendChild(menu_entry);
//                     //     // }

//                     //     } else if (data.scions[mn].scions[entry].ls_type === "+>") {
//                     //         var menu_entry = createElementWithClass('div', 'styl_mnu_accrd_entry');
//                     //         menu_entry.setAttribute('id', `mnu_accrd_entry_${data.scions[mn].scions[entry].scion_id}`);
//                     //         menu_entry.setAttribute('onclick', `fillErUp('${data.scions[mn].scions[entry].ls_url}'); mnu_active_entry('${data.scions[mn].scions[entry].scion_id}');`);
//                     //         menu_entry.innerHTML = `${data.scions[mn].scions[entry].ls_type}&nbsp${data.scions[mn].scions[entry].ls_ttl}`;
//                     //         accrd_list.appendChild(menu_entry);
//                     //     }
                        
//                     }
                
//             }
//             genMen(data);
//         })
//         .catch(err => {
//             console.log(err);
//         })
// };
// whatsOnTheMenu();

function rotatePointer(pnt_id) {
    var pnt_stt = document.getElementById(pnt_id);
    
    if (pnt_stt.className.includes('styl_pnt_0deg')) {
        pnt_stt.classList.add('styl_pnt_30deg');
        pnt_stt.classList.remove('styl_pnt_0deg');
        //style.rotate = "30deg";
        console.log(pnt_stt.classList);
    } else if (pnt_stt.className.includes('styl_pnt_30deg')) {
        pnt_stt.classList.add('styl_pnt_0deg');
        pnt_stt.classList.remove('styl_pnt_30deg');
        console.log(pnt_stt.classList);
    }
    
};
            
function generatePointer(idx, lf_i) {
    const idx2 = `id_pnt_${idx}_${lf_i}`;
    var pnter = createElementWithClass('div', 'styl_pointers');
    pnter.classList.add('styl_pnt_0deg');
    pnter.setAttribute('id', idx2);
    pnter.setAttribute('onclick', `rotatePointer('${idx2}')`);
    pnter.innerHTML = "+>&nbsp";
    //let pnt_plus_p = "<div class='styl_pointers' style='display: inline-block' onclick='rotatePointer(" + idx2 + ")' id='" + idx2 + "'>+> </div>";
    return pnter;
};

function generateLeafIdNum(scion_id, lf_i) {
    
    if (scion_id == undefined) {
        var randy = (Math.floor(Math.random() * (111 - 1) + 1)) * (Math.floor(Math.random() * (111 - 1) + 1)) * ((Math.floor(Math.random() * 111) + 1));
        var rando = randy * randy * randy;
        const lf_idx = "lf_" + rando + "_" + lf_i;
        var lf_id = `id_lf_${lf_idx}_${lf_i}`;
        console.log(lf_id);
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

function generateTag(lf_id, twig_tag) {
    var lf_tag_id = `${lf_id}_tag`;
    var lf_tag_full = createElementWithClass('div', 'styl_tag');
    lf_tag_full.setAttribute('id', lf_tag_id);
    lf_tag_full.setAttribute('onclick', `showHide('${lf_id}')`);
    lf_tag_full.innerHTML = `[${twig_tag}] ::&nbsp`;
    return lf_tag_full;
}

function showHide(idx) {
    var bld_cntn = document.getElementById(`${idx}_cntn`);
    if (document.getElementById(`${idx}_cntn`).className.includes('stt_show')) {
        document.getElementById(`${idx}_tag`).style.fontStyle = "normal";
        bld_cntn.style.display = "none";
        bld_cntn.classList.add('stt_hide');
        bld_cntn.classList.remove('stt_show');
    } else if (document.getElementById(`${idx}_cntn`).className.includes('stt_hide')) {
        document.getElementById(`${idx}_tag`).style.fontStyle = "italic";
        bld_cntn.style.display = "inline-block";
        bld_cntn.classList.add('stt_show');
        bld_cntn.classList.remove('stt_hide');
    }
}

function generateBranchID(pnt) {
    const brnch_id = "brnch_id_" + pnt;
}

function gen_term(lf_id, lf_term) {
    if (lf_term == undefined) {
        return undefined;
    } else {
        const term_id = "term_" + lf_id;
        var term = createElementWithClass('div', 'styl_main_term');
        term.setAttribute('id', term_id);
        term.innerHTML = lf_term;
        var term_pkg = `<span class='styl_main_term' id='${term_id}'>${lf_term}</span>`;
        return term;
    }
}           


            // function gen_leaflet(lf, leaf_cntn) {
            //     var entries = createElementWithClass('li', 'styl_list_entry_ext');
            //     var leaflet_id = generateLeafletIdNum(lf);
            //     var pnter = generatePointer(leaflet_id);
            //     var cntn_full = generateCntn(leaflet_id, leaf_cntn);  
            //     var leaflet_full = pnter + " " + cntn_full;                  
            //     entries.innerHTML = leaflet_full;
            //     return entries;
            // }


function gen_lf(lf_i, lf) {
    switch (lf.insc_type) {
        case 'li_entr':
            var lf_id = generateLeafIdNum(lf.scion_id, lf_i);
            var lf_sld = createElementWithClass('span', 'styl_pointers');
            var lf_pnt = generatePointer(lf.scion_id, lf_i);
            var lf_trm = gen_term(lf_id, lf.insc_term);
            var lf_cntnr = createElementWithClass('div', 'styl_lf_lst_entr');
            var lf_protrusion = createElementWithClass('div', 'styl_lf_protrusion');
            var lf_leaflets = createElementWithClass('div', 'styl_lf_leaflets');
            
            lf_sld.innerHTML = bmp_sld_01;
            lf_protrusion.appendChild(lf_sld);
            lf_protrusion.appendChild(lf_pnt);
            lf_protrusion.appendChild(lf_trm);

            lf_cntnr.appendChild(lf_protrusion);
            lf_cntnr.appendChild(lf_leaflets);
            return lf_cntnr;

        case 'in_txt':
            var lf_id = generateLeafIdNum(lf.scion_id, lf_i);
            var lf_sld = createElementWithClass('span', 'styl_pointers');
            var lf_pnt = generatePointer(lf.scion_id, lf_i);
            //var lf_trm = gen_term(lf_id, lf.insc_term);
            var lf_cntnr = createElementWithClass('div', 'styl_lf_lst_entr');
            var lf_protrusion = createElementWithClass('div', 'styl_lf_protrusion');
            //var lf_leaflets = createElementWithClass('div', 'styl_lf_leaflets');
            var lf_cntn = createElementWithClass('div', 'styl_in_txt');
            lf_cntn.innerHTML = lf.insc_cntn;

            lf_sld.innerHTML = bmp_sld_01;
            lf_protrusion.appendChild(lf_sld);
            lf_protrusion.appendChild(lf_pnt);
            lf_protrusion.appendChild(lf_cntn);

            lf_cntnr.appendChild(lf_protrusion);
            //lf_cntnr.appendChild(lf_leaflets);
            return lf_cntnr;

        // case 'li_cite':
        //     var lf_id = generateLeafIdNum(scion_id, lf_i);
        //     var lf_sld = createElementWithClass('span', 'styl_pointers');
        //     var lf_pnt = generatePointer(scion_id, lf_i);
        //     var lf_trm = gen_term(lf_id, lf_term);
        //     var lf_cntnr = createElementWithClass('div', 'styl_lf_lst_entr');
        //     var lf_protrusion = createElementWithClass('div', 'styl_lf_protrusion');
        //     var lf_leaflets = createElementWithClass('div', 'styl_lf_leaflets');
                
        //     lf_sld.innerHTML = bmp_sld_01;
        //     lf_protrusion.appendChild(lf_sld);
        //     lf_protrusion.appendChild(lf_pnt);
        //     lf_protrusion.appendChild(lf_trm);
    
        //     lf_cntnr.appendChild(lf_protrusion);
        //     lf_cntnr.appendChild(lf_leaflets);
        //     return lf_cntnr;
                    
        case 'blade':
            var lf_id = generateLeafIdNum(lf.scion_id, lf_i);
            var bld_id = generateBladeIdNum(lf.scion_id, lf_i);
            var pnter = generatePointer(lf.scion_id, lf_i);
            var bld_tag = generateTag(bld_id, lf.insc_tag);
            var bld_term = gen_term(lf_id, lf.insc_term);
            var lf_cntnr = createElementWithClass('div', 'styl_lf_cntnr');
                        
            lf_cntnr.setAttribute('id', lf_id);
            var lf_bld = createElementWithClass('div', 'styl_lf_bld');
            lf_bld.setAttribute('id', `${bld_id}_cntn`);
            lf_bld.classList.add('stt_show');
            lf_bld.innerHTML = lf.insc_cntn;

            var lf_sld = createElementWithClass('span', 'styl_pointers');
            lf_sld.innerHTML = bmp_sld_01;
            lf_cntnr.appendChild(lf_sld);
            lf_cntnr.appendChild(pnter);
            lf_cntnr.appendChild(bld_tag);

            if (bld_term !== undefined) {
                lf_cntnr.appendChild(bld_term);
                var lf_eqls = createElementWithClass('div', 'styl_pointers');
                lf_eqls.innerHTML = bmp_def;
                lf_cntnr.appendChild(lf_eqls);
                lf_cntnr.appendChild(lf_bld);
                            
            } else {
                lf_cntnr.appendChild(lf_bld);
            }

            return lf_cntnr;

        //             case 'bld_smp_itr':
        //                 var lf_id = generateLeafIdNum(scion_id, lf_i);
        //                 var pnter = generatePointer(scion_id, lf_i);
        //                 var bld_term = gen_term(lf_id, lf_term);
        //                 var bld_cntn = createElementWithClass('div', 'styl_bld_smp_itr');
        //                 var itr = createElementWithClass('span', 'styl_lf_itr_num');
        //                 itr.innerHTML = `${bld_itr}&nbsp`;
        //                 bld_cntn.appendChild(itr);
        //                 bld_cntn.appendChild(pnter);
        //                 bld_cntn.appendChild(bld_term);
        //                 //bld_cntn.innerHTML = `${bld_itr}<span class='styl_entr_intro'>${pnter}</span>&nbsp${bld_term}<br>`;
        //                 return bld_cntn;

        //             case 'li_ext':
        //                 var lf_id = generateLeafIdNum(scion_id, lf_i);
        //                 var pnter = generatePointer(scion_id, lf_i);
        //                 var bld_id = generateBladeIdNum(scion_id, lf_i);
        //                 var lf_bld = createElementWithClass('div', 'styl_lf_li_ext_bld');
        //                 lf_bld.setAttribute('id', `${bld_id}_cntn`);
        //                 lf_bld.classList.add('stt_show');
                        

        //                 //var lf_cntn_full = generateCntn(lf_id, lf_cntn);
        //                 var lf_full = createElementWithClass('div', 'styl_lf_li_ext');
        //                 lf_full.appendChild(pnter);
        //                 lf_full.appendChild(lf_bld);
        //                 //var blade_full = pnter + " " + cntn_full;
        //                 return lf_full;
        //                 break;

        case 'entry':
            console.log(lf.insc_type);
            break;

        case 'stm_olst_exp':
            var lf_id = generateLeafIdNum(lf.scion_id, lf_i);
            var pnter = generatePointer(lf.scion_id, lf_i);
            var bld_id = generateBladeIdNum(lf.scion_id, lf_i);

            var lf_cntnr = gen_ECI('div', 'styl_lf_stm_olst_exp stt_show', `${lf_id}_lf_stm_olst_exp`);
            var lf_bmp_top = gen_ECI('div', 'styl_lf_stm_olst_exp_bmp_top', `${lf_id}_lf_stm_olst_exp_bmp_top`);
            var lf_ttl = gen_ECI('div', 'styl_lf_stm_olst_exp_ttl', `${lf_id}_lf_stm_olst_exp_ttl`);
            var lf_cntn = gen_ECI('div', 'styl_lf_stm_olst_exp_cntn', `${lf_id}_lf_stm_olst_exp_cntn`);
            var lf_ls_shrt = gen_ECI('div', 'styl_lf_stm_olst_exp_ls_shrt', `${lf_id}_lf_stm_olst_exp_ls_short`);
            var lf_bmp_cycl = gen_ECI('div', 'styl_lf_stm_olst_exp_bmp_cycl', `${lf_id}_lf_stm_olst_exp_bmp_cycl`);
            var lf_expnd = gen_ECI('div', 'styl_lf_stm_olst_exp_expnd', `${lf_id}_lf_stm_olst_exp_expnd`);
            var lf_bmp_btm = gen_ECI('div', 'styl_lf_stm_olst_exp_bmp_btm', `${lf_id}_lf_stm_olst_exp_bmp_btm`);

            lf_bmp_top.innerHTML = "--- --- --- --- --- --- --- ||| --- --- --- --- --- --- ---";
            lf_bmp_btm.innerHTML = "--- --- --- --- --- --- --- ||| --- --- --- --- --- --- ---";
            lf_bmp_cycl.innerHTML = "------- ------- -------<br>------- -------<br>-------";
            lf_ttl.innerHTML = `${pnt_branch}&nbsp${lf.insc_ttl}&nbsp`;

            lf_bmp_btm.setAttribute('onclick', `showHideStmExp('${lf_id}');`);
            lf_bmp_top.setAttribute('onclick', `showHideStmExp('${lf_id}');`);
            lf_ttl.setAttribute('onclick', `showHideStmExp('${lf_id}');`);

            lf_cntn.append(lf_ls_shrt, lf_bmp_cycl, lf_expnd);

            lf_cntnr.append(lf_bmp_top, lf_ttl, lf_cntn, lf_bmp_btm);

            for (lfl in lf.scions) {
                var lfl_shrt = createElementWithClass('div', 'styl_lfl_shrt');
                var lfl_shrt_pnter = generatePointer(lf.scion_id[lfl].scion_id, lf_i);
                var lfl_shrt_term = createElementWithClass('a', 'styl_lfl_shrt_term');
                lfl_shrt_term.setAttribute('href', `#id_twg_cntn_${lf.scion_id}_${lfl}`);
                lfl_shrt_term.innerHTML = lf.scions[lfl].insc_term;
                
                lfl_shrt.append(lfl_shrt_pnter, lfl_shrt_term);
                lf_ls_shrt.appendChild(lfl_shrt);
                var lfl_cntnr = createElementWithClass('div', 'styl_lfl_cntnr');
                var lfl_bmp_top = createElementWithClass('div', 'styl_lfl_bmp_top');
                var lfl_ttl = createElementWithClass('div', 'styl_lfl_ttl');
                var lfl_cntn = createElementWithClass('div', 'styl_lfl_cntn');
                var lfl_bmp_btm = createElementWithClass('div', 'styl_lfl_bmp_btm');

                lfl_ttl.setAttribute('id', `id_twg_cntn_${lf.scion_id}_${lfl}`);
                lfl_bmp_top.innerHTML = "---<br>--- ---";
                lfl_bmp_btm.innerHTML = "---- ----<br>----";
                lfl_ttl.innerHTML = `<span class='styl_pointers'>+=></span>&nbsp<span class='styl_lfl_ttl_term'>${lf.scions[lfl].insc_term}</span>&nbsp<span class='styl_pointers'>::</span>`;

                lfl_cntnr.appendChild(lfl_bmp_top);
                lfl_cntnr.appendChild(lfl_ttl);
                lfl_cntnr.appendChild(lfl_cntn);
                lfl_cntnr.appendChild(lfl_bmp_btm);
                lf_expnd.appendChild(lfl_cntnr);
                
                for (i2 in lf.scions[lfl].scions) {
                    console.log(lf.scions[lfl].scions[i2]);
                    var entr_full = gen_lf(i2, lf.scions[lfl].scions[i2]);
                    console.log(entr_full);
                    lfl_cntn.appendChild(entr_full);
                        }
            }

                        

                        return lf_cntnr;

        case 'stm_olst_exp_i':
            var in_id = generateLeafIdNum(lf.scion_id, lf_i);
            var in_cntnr = gen_ECI('div', 'styl_in_cntnr', `id_in_${in_id}`);
            var in_pnter = generatePointer(lf.scion_id, lf_i);
            var in_ttl = createElementWithClass('div', 'styl_lf_lst_entr');
            in_ttl.innerHTML = lf.insc_ttl;
            in_cntnr.append(in_pnter, in_ttl);
            return in_cntnr;
        
        case 'stm_list':
            var stm_id = `id_stm_${lf.scion_id}`;    
            var stm_name = lf.insc_ttl;    
            var stm_cntnr = gen_ECI('div', 'styl_stm_cntnr stt_show', `id_stm_cntnr_${lf.scion_id}`);
            var stm_bmp_top = gen_ECI('div', 'styl_stm_bmp_top', `id_stm_bmp_top_${lf.scion_id}`);
            var stm_nametag = gen_ECI('div', 'styl_stm_nametag', `id_stm_nametag_${lf.scion_id}`);
            var stm_trstlbrd = gen_ECI('div', 'styl_stm_trstlbrd', `id_stm_trstlbrd_${lf.scion_id}`);
            var stm_bmp_btm = gen_ECI('div', 'styl_stm_bmp_btm', `id_stm_bmp_btm_${lf.scion_id}`);

            stm_nametag.setAttribute('onclick', `showHideStem('${lf.scion_id}');`);
            stm_bmp_top.setAttribute('onclick', `showHideStem('${lf.scion_id}');`);
            stm_bmp_btm.setAttribute('onclick', `showHideStem('${lf.scion_id}');`);
            
            stm_bmp_top.innerHTML = bmp_stem_top;
            stm_nametag.innerHTML = `${pnt_branch} <span id='${stm_id}'>${stm_name}</span> ::`;
            stm_bmp_btm.innerHTML = bmp_stem_bttm;
            
            stm_cntnr.append(stm_bmp_top, stm_nametag, stm_trstlbrd, stm_bmp_btm);
            
            for (i2 in lf.scions) {
                var entr_full = gen_lf(i2, lf.scions[i2]);
                stm_trstlbrd.appendChild(entr_full);
            }        
            return stm_cntnr;

                    // case 'term_def':
                    //     var leaf_id = generateLeafIdNum(leaf_i);
                    //     var pnter = generatePointer(leaf_id);
                    //     var tag_full = generateTag(leaf_id, leaf_tag);
                    //     var term_full = generateTerm(leaf_id, leaf_term);
                    //     var cntn_full = generateCntn(leaf_id, leaf_cntn);
                    //     var blade_full = createElementWithClass('li', 'styl_blade');
                    //     blade_full.setAttribute('id', blade_id);
                    //     var blade_text = "\\_" + pnter + " " + tag_full + term_full + " = " + cntn_full + "<br>";
                    //     blade_full.innerHTML = blade_text;

                    //     return blade_full;
                    //     break;

                    // case 'li_entr':
                    //     var lf_id = generateLeafIdNum(lf_i);
                    //     var pnter = generatePointer(lf_id);
                    //     var lf_term = gen_term(lf_id, lf_term);
                    //     var blade_full = createElementWithClass('li', 'styl_blade');
                    //     var blade_text = "<span class='styl_entr_intro'>\\_" + pnter + "</span> " + lf_term + "<br>";
                    //     blade_full.innerHTML = blade_text;
                    //     return blade_text;


                }
            }



async function fetchy(zz) {
    var mainContainer = document.getElementById("trestleboard");
    mainContainer.innerHTML = "";
    fetch(zz)
        .then(response => {
            return response.json();
        })
        .then(data => {
            function gen_head(data) {                      
                var mainContainer = document.getElementById('trestleboard');
                var headBoard = createElementWithClass('div', 'branch_container');
                
                var ls_ttl = createElementWithClass('div', 'styl_head_ttle');
                var lsid = createElementWithClass('div', 'styl_head_lsid');
                var directory_div = createElementWithClass('div', 'styl_head_drct');
                var directory_name = createElementWithClass('div', 'styl_drct_name');
                var directory_cntn = createElementWithClass('div', 'styl_drct_cntn');
                var headboard_tail = createElementWithClass('div', 'styl_head_tail');
                lsid.innerHTML = `<br><span class='styl_pointers'>-></span> <strong><u>LS-ID</u></strong>:&nbsp${data.ls_id}<br><br>`;
               
                ls_ttl.innerHTML = "<img src='Seal.jpg' width='333' height='333'></img><br>" + "-> " + data.ls_ttl + " <-";
                
                headBoard.appendChild(ls_ttl);
                headBoard.appendChild(lsid);
                headboard_tail.innerHTML = "<br><br>" + bmp_brnch_tail;
                directory_name.innerHTML = `<span class='styl_pointers'>-></span> <strong><u>Directory to ${data.ls_id}</strong></u>:`;
                mainContainer.appendChild(headBoard);
                headBoard.appendChild(directory_div);
                directory_div.appendChild(directory_name);
                directory_div.appendChild(directory_cntn);
                headBoard.appendChild(headboard_tail);
                for (i in data.scions) {
                    var drct_i = createElementWithClass('div', 'styl_drct_item');
                    var drct_i_pnt = generatePointer(data.scions[i].scion_id, i);
                    var drct_i_ttl = createElementWithClass('a', 'styl_drct_item_ttl');
                    drct_i_ttl.setAttribute('href', `#id_b_cntnr_${data.scions[i].scion_id}`);
                    drct_i_ttl.innerHTML = `${data.scions[i].drct_id} = ${data.scions[i].drct_ttl}`;
                    drct_i.appendChild(drct_i_pnt);
                    drct_i.appendChild(drct_i_ttl);
                    directory_cntn.appendChild(drct_i);
                }
            };
            gen_head(data);

            function pop_main(data) {
                var trst_cntnr = document.getElementById("trestleboard");
                var trst_brnchs = data.scions;
                for (i in trst_brnchs) {
                    var brnch_id = trst_brnchs[i].scion_id;
                    var brnch_name = trst_brnchs[i].drct_id + " = " + trst_brnchs[i].drct_ttl;
                    var brnch_cntnr = gen_ECI('div', 'styl_brnch_cntnr', `id_b_cntnr_${brnch_id}`);
                    var brnch_bmp_top = gen_ECI('div', 'styl_brnch_bmp_top', `id_b_bmp_top_${brnch_id}`);
                    var brnch_nametag = gen_ECI('div', 'styl_brnch_nametag', `id_b_nametag_${brnch_id}`);
                    var brnch_trstlbrd = gen_ECI('div', 'styl_brnch_trstlbrd', `id_b_trstlbrd_${brnch_id}`);
                    var brnch_bmp_btm = gen_ECI('div', 'styl_brnch_bmp_btm', `id_b_bmp_btm_${brnch_id}`);
                    
                    brnch_bmp_top.innerHTML = "---<br>--- ---<br>--- --- ---";
                    brnch_bmp_btm.innerHTML = "---- ---- ---- ----<br>---- ---- ---- ----<br>---- ---- ---- ----<br>---- ---- ---- ----";
                    brnch_nametag.innerHTML = `<span class='styl_shvl_s0' id='id_b_p_${brnch_id}' onclick='shovelDigging(\"${brnch_id}\")'>-></span> <span class='styl_brnch_nametag_name'>${brnch_name}</span>:`;
                
                    brnch_cntnr.append(brnch_bmp_top, brnch_nametag, brnch_trstlbrd, brnch_bmp_btm);
                    trst_cntnr.appendChild(brnch_cntnr);

                    var stems = trst_brnchs[i].scions;
                    for (i2 in stems) {
                        brnch_trstlbrd.appendChild(gen_lf(i2, stems[i2]));
                    }
                }
            }
        pop_main(data);

            function populateTrestleboard(data) {
                var trst_cntnr = document.getElementById("trestleboard");
                var trst_brnchs = data.record.scions;
                for (i in trst_brnchs) {
                    var brnch_id = trst_brnchs[i].scion_id;
                    var brnch_name = trst_brnchs[i].drct_id + " = " + trst_brnchs[i].drct_ttl;
                    var brnch_cntnr = createElementWithClass('div', 'styl_brnch_cntnr');
                    var brnch_bmp_top = createElementWithClass('div', 'styl_brnch_bmp_top');
                    var brnch_nametag = createElementWithClass('div', 'styl_brnch_nametag');
                    var brnch_trstlbrd = createElementWithClass('div', 'styl_brnch_trstlbrd');
                    var brnch_bmp_btm = createElementWithClass('div', 'styl_brnch_bmp_btm');
                
                    brnch_cntnr.setAttribute('id', ('id_b_cntnr_' + brnch_id));
                    brnch_bmp_top.setAttribute('id', ('id_b_bmp_top_' + brnch_id));
                    brnch_nametag.setAttribute('id', ('id_b_nametag_' + brnch_id));
                    brnch_trstlbrd.setAttribute('id', ('id_b_trstlbrd_' + brnch_id));
                    brnch_bmp_btm.setAttribute('id', ('id_b_bmp_btm_' + brnch_id));

                    
                    brnch_bmp_top.innerHTML = "---<br>--- ---<br>--- --- ---";
                    brnch_bmp_btm.innerHTML = "---- ---- ---- ----<br>---- ---- ---- ----<br>---- ---- ---- ----<br>---- ---- ---- ----";
                    brnch_nametag.innerHTML = `<span class='styl_shvl_s0' id='id_b_p_${brnch_id}' onclick='shovelDigging(\"${brnch_id}\")'>-></span> <span class='styl_brnch_nametag_name'>${brnch_name}</span>:`;
                
                    brnch_cntnr.appendChild(brnch_bmp_top);
                    brnch_cntnr.appendChild(brnch_nametag);
                    brnch_cntnr.appendChild(brnch_trstlbrd);
                    brnch_cntnr.appendChild(brnch_bmp_btm);
                    trst_cntnr.appendChild(brnch_cntnr);

                   
                    var stems = trst_brnchs[i].scions;
                    if (stems !== null) {
                        for (i2 in stems) {
                            
                            switch (stems[i2].insc_type){
                                case 'stm_list':
                                    var stm_id = "stm_id_" + stems[i2].scion_id;    
                                    var stm_name = stems[i2].insc_name;    
                                    var stm_cntnr = createElementWithClass('div', 'styl_stm_cntnr');
                                    var stm_bmp_top = createElementWithClass('div', 'styl_stm_bmp_top');
                                    var stm_nametag = createElementWithClass('div', 'styl_stm_nametag');
                                    var stm_trstlbrd = createElementWithClass('div', 'styl_stm_trstlbrd');
                                    var stm_bmp_btm = createElementWithClass('div', 'styl_stm_bmp_btm');
                                    
                                    stm_cntnr.setAttribute('id', `id_stm_cntnr_${stems[i2].scion_id}`);
                                    stm_bmp_top.setAttribute('id', `id_stm_bmp_top_${stems[i2].scion_id}`);
                                    stm_bmp_btm.setAttribute('id', `id_stm_bmp_btm_${stems[i2].scion_id}`);
                                    stm_nametag.setAttribute('id', `id_stm_nametag_${stems[i2].scion_id}`);
                                    stm_trstlbrd.setAttribute('id', `id_stm_trstlbrd_${stems[i2].scion_id}`);
                                    stm_cntnr.classList.add('stt_show');
                                    stm_nametag.setAttribute('onclick', `showHideStem('${stems[i2].scion_id}');`);
                                    stm_bmp_top.innerHTML = bmp_stem_top;
                                    stm_nametag.innerHTML = `${pnt_branch} <span id='${stm_id}'>${stm_name}</span> ::`;
                                    stm_bmp_btm.innerHTML = bmp_stem_bttm;
                                    stm_cntnr.appendChild(stm_bmp_top);
                                    stm_cntnr.appendChild(stm_nametag);
                                    stm_cntnr.appendChild(stm_trstlbrd);
                                    stm_cntnr.appendChild(stm_bmp_btm);
                                    brnch_trstlbrd.appendChild(stm_cntnr);
                                    
                                    for (i3 in stems[i2].scions) {
                                        var entr_full = gen_lf(i3, stems[i2].scion_id, stems[i2].scions[i3].insc_type, stems[i2].scions[i3].insc_term, stems[i2].scions[i3].insc_tag, stems[i2].scions[i3].insc_cntn, stems[i2].scions[i3].scions);
                                        stm_trstlbrd.appendChild(entr_full);
                                    }
                                    
                                    break;

                                case 'stm_olst_exp':
                                    var entr_full = gen_lf(i2, stems[i2].scion_id, stems[i2].scions[i3].insc_type, stems[i2].scions[i3].insc_term, stems[i2].scions[i3].insc_tag, stems[i2].scions[i3].insc_cntn, stems[i2].scions[i3].scions);
                                    stm_trstlbrd.appendChild(entr_full);
                                    break;

                                case 'brnch_explst':
                                    var b_explst_id = `b_explst_id${stems[i2].scion_id}`;
                                    var b_explst_name = stems[i2].insc_name;   
                                    var b_explst_cntnr = createElementWithClass('div', 'styl_b_explst_cntnr');
                                    var b_explst_bmp_top = createElementWithClass('div', 'styl_b_explst_bmp_top');
                                    var b_explst_lst_shrt = createElementWithClass('div', 'styl_b_explst_lst_shrt');
                                    var b_explst_lst_shm = createElementWithClass('div', 'styl_b_explst_lst_shm');
                                    var b_explst_lst_itms = createElementWithClass('div', 'styl_b_explst_lst_items');
                                    var b_explst_bmp_cycl = createElementWithClass('div', 'styl_b_explst_bmp_cycl');
                                    var b_explst_lst_expn = createElementWithClass('div', 'styl_b_explst_lst_expn');

                                    b_explst_cntnr.setAttribute('id', `id_b_explst_cntnr_${stems[i2].scion_id}`);
                                    b_explst_bmp_top.setAttribute('id', `id_b_explst_bmp_top_${stems[i2].scion_id}`);
                                    b_explst_lst_shrt.setAttribute('id', `id_b_explst_lst_shrt_${stems[i2].scion_id}`);
                                    b_explst_lst_shm.setAttribute('id', `id_b_explst_lst_shm_${stems[i2].scion_id}`);
                                    b_explst_lst_itms.setAttribute('id', `id_b_explst_lst_itms_${stems[i2].scion_id}`);
                                    b_explst_bmp_cycl.setAttribute('id', `id_b_explst_bmp_cycl_${stems[i2].scion_id}`);
                                    b_explst_lst_expn.setAttribute('id', `id_b_explst_lst_expn_${stems[i2].scion_id}`);

                                    b_explst_bmp_top.innerHTML = "--- --- --- --- --- --- --- ||| --- --- --- --- --- --- ---";
                                    b_explst_lst_shm.innerHTML = `${pnt_branch}<span id='${b_explst_id}'>${b_explst_name}</span> ::`;
                                    b_explst_bmp_cycl.innerHTML = "------- ------- -------<br>------- -------<br>-------<br>";

                                    b_explst_lst_shrt.appendChild(b_explst_lst_shm);
                                    b_explst_lst_shrt.appendChild(b_explst_lst_itms);
                                    b_explst_cntnr.appendChild(b_explst_bmp_top);
                                    b_explst_cntnr.appendChild(b_explst_lst_shrt);
                                    b_explst_cntnr.appendChild(b_explst_bmp_cycl);
                                    b_explst_cntnr.appendChild(b_explst_lst_expn);
                                    brnch_trstlbrd.appendChild(b_explst_cntnr);
                                          
                                    for (l in stems[i2].scions) {
                                        
                                        //class: styl_twig_li_shrt
                                        var entr_shrt = createElementWithClass('div', 'styl_b_explst_entr_shrt');
                                        entr_shrt.setAttribute('id', `#id_b_explst_entr_shrt_${stems[i2].scions[l].scion_id}_${l}`);
                                        var entr_term_sck = createElementWithClass('span', 'styl_b_explst_entr_term');
                                        //clsdd: list_elements + styl_li_top + style5
                                        
                                        var priv_pnt = generatePointer(stems[i2].scions[l].scion_id, l);
                                        var entr_click = createElementWithClass('a', 'styl_b_explst_entr_term');
                                        entr_click.setAttribute('href', `#id_twg_cntnr_${stems[i2].scions[l].scion_id}`);
                                        entr_click.setAttribute('id', `#id_b_explst_entr_shrt_ttl_${stems[i2].scions[l].scion_id}_${l}`);
                                        entr_click.innerHTML = stems[i2].scions[l].insc_term;
                                        entr_shrt.appendChild(priv_pnt);
                                        entr_shrt.appendChild(entr_click);
                                        b_explst_lst_itms.appendChild(entr_shrt);

                                        var twg_cntnr = createElementWithClass('div', 'styl_twg_cntnr');
                                        var twg_bmp_top = createElementWithClass('div', 'styl_twg_bmp_top');
                                        var twg_nametag = createElementWithClass('div', 'styl_twg_nametag');
                                        var twg_trstlbrd = createElementWithClass('ul', 'styl_twg_trstlbrd');
                                        var twg_bmp_btm = createElementWithClass('div', 'styl_twg_bmp_btm');
                                        
                                        twg_cntnr.setAttribute('id', `id_twg_cntnr_${stems[i2].scions[l].scion_id}`);
                                        twg_bmp_top.setAttribute('id', `id_twg_bmp_top_${stems[i2].scions[l].scion_id}`);
                                        twg_nametag.setAttribute('id', `id_twg_nametag_${stems[i2].scions[l].scion_id}`);
                                        twg_trstlbrd.setAttribute('id', `id_twg_trstlbrd_${stems[i2].scions[l].scion_id}`);
                                        twg_bmp_btm.setAttribute('id', `id_twg_bmp_btm_${stems[i2].scions[l].scion_id}`);

                                        twg_bmp_btm.innerHTML = bmp_stem_exli_bttm;
                                        twg_cntnr.classList.add('stt_show');
                                        twg_nametag.setAttribute('onclick', `showHideTwig('${stems[i2].scions[l].scion_id}');`);
                                        twg_bmp_top.innerHTML = bmp_stem_exli;
                                        //var twg_ttl = createElementWithClass('span', 'styl_twg_ttl');
                                        //twg_ttl.innerHTML = entr_term;
                                        //twg_nametag.innerHTML = `${pnt_lixp}&nbsp${twg_ttl}&nbsp::`
                                        twg_nametag.innerHTML = `${pnt_lixp}<span class='styl_twg_ttl'>${stems[i2].scions[l].insc_term}</span>&nbsp::`;
                                        
                                        twg_cntnr.appendChild(twg_bmp_top);
                                        twg_cntnr.appendChild(twg_nametag);
                                        twg_cntnr.appendChild(twg_trstlbrd);
                                        twg_cntnr.appendChild(twg_bmp_btm);
                                        b_explst_lst_expn.appendChild(twg_cntnr);
                                        
                                                                                                        
                                        for (lf in stems[i2].scions[l].scions) {
                                            twg_trstlbrd.appendChild(gen_lf(lf, stems[i2].scions[l].scion_id, stems[i2].scions[l].scions[lf].insc_type, stems[i2].scions[l].scions[lf].insc_term, stems[i2].scions[l].scions[lf].insc_tag, stems[i2].scions[l].scions[lf].insc_cntn, stems[i2].scions[l].scions[lf].insc_itr, stems[i2].scions[l].scions[lf].scions));
                                        }
                                    }
                                    
                                    break;

                            };
                            //brnch_trstlbrd.appendChild();
                        }
                    }
                }
            }

           // populateTrestleboard(data);

            function appendBranch(data) {
                var secondContainer = document.getElementById("trestleboard");
                var branches = data.record.scions;                 
                for (i in branches) {
                    var branch_container = createElementWithClass('div', 'branch_container');
                    var branch_name = createElementWithClass('div', 'branch_head');
                    branch_container.setAttribute('id', branches[i].scion_id);
                    branch_name.innerHTML = bmp_brnch_top + pnt_minus + " <span class='branch_title'>" + branches[i].drct_id + " = " + branches[i].drct_ttl + "</span>:";
                    branch_container.appendChild(branch_name);
                    secondContainer.appendChild(branch_container);
                    
                    var stems = branches[i].scions;
                    if (stems !== null) {
                        for (i2 in stems) {  
                            var div_stem = createElementWithClass('div', 'styl_div_stem');
                            var stem_head = createElementWithClass('div', 'styl_stem_head');
                            var stem_body = createElementWithClass('div', 'styl_stem_body');
                            var stem_tail = createElementWithClass('div', 'styl_stem_tail');
                            var stem_title = "stm_id_" + stems[i2].scion_id;
                            var twigs = stems[i2].scions;
                            let stem_cycl = document.createRange().createContextualFragment(bmp_stem_cycl);

                            div_stem.setAttribute('id', stem_title);
                            div_stem.appendChild(stem_head);
                            div_stem.appendChild(stem_body);
                            branch_container.appendChild(div_stem);

                            switch (stems[i2].type) {      
                                case 'list_extn':
                                    stem_head.innerHTML = bmp_stem_top + pnt_branch + " <span id='" + stem_title + "'>" + stems[i2].name + "</span> ::";
                                    stem_tail.innerHTML = bmp_stem_bttm;
                                    for (i4 in stems[i2].scions) {
                                        var entries = createElementWithClass('div', 'styl_list_entry_ext');
                                        var i_leaf_tag = stems[i2].scions[i4].tag_id;
                                        var i_leaf_type = stems[i2].scions[i4].type;
                                        var i_leaf_cntn = stems[i2].scions[i4].leaf_cntn;
                                        var entry_full = generateLeaf(i4, i_leaf_type, i_leaf_tag, i_leaf_cntn);
                                                    
                                        entries.innerHTML = entry_full;
                                        stem_body.appendChild(entries);
                                    }
                                    div_stem.appendChild(stem_tail);
                                    break;

                                

                                    case 'list_expn_brnch':
                                    stem_head.innerHTML = bmp_stem_top + pnt_branch + " <span id='" + stem_title + "'>" + stems[i2].name + "</span> ::";
                                    
                                    var stem_liex_shnm = createElementWithClass('div', 'styl_liex_shnm');
                                    var stem_body_list = createElementWithClass('div', 'styl_brnch_list');
                                    var stem_liex_cntn = createElementWithClass('div', 'styl_liex_cntn');
                                    div_stem.appendChild(stem_liex_cntn);
                                    stem_liex_shnm.innerHTML = bmp_stem_liste + pnt_branch + " <span id='" + stem_title + "' class='styl_stem_head'>" + stems[i2].short_list_title + "</span> ::";
                                    stem_liex_cntn.appendChild(stem_liex_shnm);
                                    stem_liex_cntn.appendChild(stem_body_list);
                                    stem_liex_cntn.appendChild(stem_cycl);
                                    var stem_list_short = createElementWithClass('div', 'style_stem_list_short');
                                    stem_body_list.appendChild(stem_list_short);
                                    var stem_list_expanded = createElementWithClass('div', 'styl_stem_list_expanded');
                                    stem_liex_cntn.appendChild(stem_list_expanded);
                                    stem_body = stem_liex_cntn;
                                                
                                    for (l in stems[i2].scions) {
                                        var li_long = createElementWithClass('div', 'styl_twig_li_long');
                                        var li_cont = createElementWithClass('ul', 'styl_twig_li_cont');
                                        var twig_tail = createElementWithClass('div', 'styl_twig_tail');
                                        var twig_name = createElementWithClass('div', 'list_elements');
                                        var twig_li = createElementWithClass('li', 'style5');
                                        var priv_pnt = generatePointer(l);
                                        twig_name = twigs[l].content;
                                        twig_li.innerHTML = priv_pnt + " <span class='styl_li_top'>" + twig_name + "</span>";
                                                    
                                        stem_list_short.appendChild(twig_li);
                                                    
                                        twig_tail.innerHTML = bmp_stem_exli_bttm;
                                        li_long.innerHTML = bmp_stem_exli + "<div class='styl_twig_li_title_total'>" + pnt_lixp + "<span class='styl_li_title'>" + twigs[l].content + "</span>&nbsp::</div>";
                                        li_long.appendChild(li_cont);
                                        li_long.appendChild(twig_tail);
                                        stem_list_expanded.appendChild(li_long);

                                                                                                        
                                        for (leaf in twigs[l].leaves) {
                                            li_cont.appendChild(generateLeaf(leaf, twigs[l].leaves[leaf].type, twigs[l].leaves[leaf].tag_id, twigs[l].leaves[leaf].leaf_cntn, twigs[l].leaves[leaf].main_term, twigs[l].leaves[leaf].leaflets));
                                            var ind_item = createElementWithClass('li', 'styl_twig_item');
                                            //stem_body.appendChild(ind_item);
                                        }
                                    }
                                    
                                    break;

                               

                                case 'leaf_text':                                                         
                                    var leaf_whole = createElementWithClass('div', 'styl_leaf_whole');
                                    leaf_whole.innerHTML = pnt_plus + stems[i2].leaf_cntn;
                                    stem_body.appendChild(leaf_whole);
                                
                                    for (l in twigs) {
                                        var li_long = createElementWithClass('div', 'styl_twig_li_long');
                                        var li_cont = createElementWithClass('ul', 'styl_twig_li_cont');
                                        var twig_tail = createElementWithClass('div', 'styl_twig_tail');
                                        var twig_name = createElementWithClass('div', 'list_elements');
                                        var twig_li = createElementWithClass('li', 'style5');
                                        var priv_pnt = generatePointer(l);
                                        twig_name = twigs[l].leaf_cntn;

                                        if (twigs[l].alt_name !== undefined) {
                                            twig_li.innerHTML = priv_pnt + " <span class='styl_li_top'>" + twig_name + "</span>&nbsp" + "(<em>" + twigs[l].alt_name + "</em>)";
                                        } else {
                                            twig_li.innerHTML = priv_pnt + " <span class='styl_li_top'>" + twig_name + "</span>";
                                        }        
                                        stem_body.appendChild(twig_li);
                                        twig_tail.innerHTML = bmp_stem_exli_bttm;
                                                        
                                        for (leaf in twigs[l].leaves) {
                                            li_cont.appendChild(generateLeaf(leaf, twigs[l].leaves[leaf].type, twigs[l].leaves[leaf].tag_id, twigs[l].leaves[leaf].leaf_cntn, twigs[l].leaves[leaf].main_term, twigs[l].leaves[leaf].leaflets));  
                                        }
                                    }
                                    break;
                            }
                           
                            branch_container.appendChild(div_stem);                                                                     
                        }
                        var branch_tail = createElementWithClass('div', 'styl_head_tail');
                        branch_tail.innerHTML = "<br><br>" + bmp_brnch_tail;
                        branch_container.appendChild(branch_tail);
                    }
                }
                                                                   
            };
        
        })
        .catch(err => {
            console.log(err);
        })
    //return "";
}
