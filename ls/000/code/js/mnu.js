function whatsOnTheMenu() {
    fetch('/ls/000/am2.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            var m_btm = document.getElementById('id_mnu_btm');
            var menu_tablet = createElementWithClass('div', 'styl_menu_tablet');
            m_btm.appendChild(menu_tablet);
            let drct_tree = data.scions;

            for (mn in drct_tree) {
                gen_men(drct_tree[mn]);
            }
            
            function gen_men(mnu) {
                console.log(mnu);
                console.log(mnu.ls_type);
                switch (mnu.ls_type) {
                    case '->':
                        var accrd_cntnr = gen_ECI('div', 'styl_mnu_accrd_cntnr', `mnu_accrd_cntnr_${mnu.scion_id}`);
                        var accrd_ttl = gen_ECI('div', 'styl_mnu_accrd_ttl', `mnu_accrd_ttl_${mnu.scion_id}`);                    
                        var accrd_cntn = gen_ECI('div', 'styl_mnu_accrd_cntn', `mnu_accrd_cntn_${mnu.scion_id}`);
                        accrd_ttl.innerHTML = `${mnu.ls_ttl}`;
                        accrd_ttl.setAttribute("onclick", `mnu_showHide_top('${mnu.scion_id}')`);
                        accrd_cntnr.append(accrd_ttl, accrd_cntn);          
                        menu_tablet.appendChild(accrd_cntnr);
            
                        for (mnut in mnu.scions) {
                            //console.log(gen_men(data.scions[mn].scions[mnu]));
                            accrd_cntn.appendChild(gen_men(mnu.scions[mnut]));
                        }
                    
                    case '=>':
                        var mnu_fldr = gen_ECI('div', 'styl_mnu_accrd_fldr', `mnu_accrd_fldr_${mnu.scion_id}`);
                        var mnu_fldr_ttl = gen_ECI('div', 'styl_mnu_accrd_fldr_ttl', `mnu_accrd_fldr_ttl_${mnu.scion_id}`);
                        var mnu_fldr_cntn = gen_ECI('div', 'styl_mnu_accrd_fldr_cntn', `mnu_accrd_fldr_cntn_${mnu.scion_id}`);
                        mnu_fldr_ttl.innerHTML = `${mnu.ls_type}&nbsp${mnu.ls_ttl}`;
                        mnu_fldr_ttl.setAttribute('onclick', `mnu_showHide_fldr('${mnu.scion_id}')`);
                        mnu_fldr.append(mnu_fldr_ttl, mnu_fldr_cntn);

                        for (mnu_i in mnu.scions) {
                            // console.log(mnu.scions[mnu_i].ls_id);
                            // console.log(mnu.scions[mnu_i].ls_ttl);
                            // console.log(mnu.scions[mnu_i].ls_type);
                            // console.log(gen_men(mnu.scions[mnu_i]));
                            mnu_fldr_cntn.appendChild(gen_men(mnu.scions[mnu_i]));
                        }
                        return mnu_fldr;

                    case '+>':   
                        var menu_entry = createElementWithClass('div', 'styl_mnu_accrd_entry');
                        menu_entry.setAttribute('id', `mnu_accrd_entry_${mnu.scion_id}`);
                        menu_entry.setAttribute('onclick', `fillErUp('${mnu.ls_url}'); mnu_active_entry('${mnu.scion_id}');`);
                        menu_entry.innerHTML = `${mnu.ls_type}&nbsp${mnu.ls_ttl}`;
                        //ccrd_list.appendChild(menu_entry);
                        return menu_entry;
                }
            }


            // function genMen(data) {
                

            //     for (mn in drct_tree) {
            //         // var accrd_cntnr = gen_ECI('div', 'styl_mnu_accrd_cntnr', `mnu_accrd_cntnr_${drct_tree[mn].scion_id}`);
            //         // var accrd_ttl = gen_ECI('div', 'styl_mnu_accrd_ttl', `mnu_accrd_ttl_${drct_tree[mn].scion_id}`);                    
            //         // var accrd_cntn = gen_ECI('div', 'styl_mnu_accrd_cntn', `mnu_accrd_cntn_${drct_tree[mn].scion_id}`);
            //         // accrd_ttl.innerHTML = `${drct_tree[mn].ls_ttl}`;
            //         // accrd_ttl.setAttribute("onclick", `mnu_showHide_top('${drct_tree[mn].scion_id}')`);
            //         // accrd_cntnr.append(accrd_ttl, accrd_cntn);          
            //         // menu_tablet.appendChild(accrd_cntnr);
                    
            //         // for (mnu in drct_tree[mn].scions) {
            //         //     //console.log(gen_men(data.scions[mn].scions[mnu]));
            //         //     accrd_cntn.appendChild(gen_men(drct_tree[mn].scions[mnu]));
            //         }

                    

                    

            //         // for (ent in data.scions[mn]) {
            //         //     console.log(data.scions[mn].scions[ent].ls_ttl);
            //         //     //console.log(gen_men(data.scions[mn].scions[ent]));
            //         // }

            //         // for (i in data.scions) {
            //         //     var drct_i = createElementWithClass('div', 'styl_drct_item');
            //         //     var drct_i_pnt = generatePointer(data.scions[i].scion_id, i);
            //         //     var drct_i_ttl = createElementWithClass('a', 'styl_drct_item_ttl');
            //         //     drct_i_ttl.setAttribute('href', `#id_b_cntnr_${data.scions[i].scion_id}`);
            //         //     drct_i_ttl.innerHTML = `${data.scions[i].drct_id} = ${data.scions[i].drct_ttl}`;
            //         //     drct_i.appendChild(drct_i_pnt);
            //         //     drct_i.appendChild(drct_i_ttl);
            //         //     directory_cntn.appendChild(drct_i);
            //         // }
                    

            //         // for (entry in data.scions[mn].scions) {
                        
            //         //     if (data.scions[mn].scions[entry].ls_type === "=>") {
            //         //         var mnu_fldr = createElementWithClass('div', 'styl_mnu_accrd_fldr');
            //         //         var mnu_fldr_ttl = createElementWithClass('div', 'styl_mnu_accrd_fldr_ttl');
            //         //         var mnu_fldr_cntn = createElementWithClass('div', 'styl_mnu_accrd_fldr_cntn');
            //         //         mnu_fldr.setAttribute('id', `mnu_accrd_fldr_${data.scions[mn].scions[entry].scion_id}`);
            //         //         mnu_fldr_ttl.setAttribute('id', `mnu_accrd_fldr_ttl_${data.scions[mn].scions[entry].scion_id}`);
            //         //         mnu_fldr_cntn.setAttribute('id', `mnu_accrd_fldr_cntn_${data.scions[mn].scions[entry].scion_id}`)
            //         //         mnu_fldr_ttl.setAttribute('onclick', `mnu_showHide_fldr('${data.scions[mn].scions[entry].scion_id}')`);
            //         //         mnu_fldr_ttl.innerHTML = `${data.scions[mn].scions[entry].ls_type}&nbsp${data.scions[mn].scions[entry].ls_ttl}`;
                            
            //         //         mnu_fldr.appendChild(mnu_fldr_ttl);
            //         //         mnu_fldr.appendChild(mnu_fldr_cntn);
            //         //         accrd_list.appendChild(mnu_fldr);
            //         //         for (entry2 in data.scions[mn].scions[entry].scions) {
            //         //             var menu_entry2 = createElementWithClass('div', 'styl_mnu_accrd_entry');
            //         //             menu_entry2.setAttribute('id', `mnu_accrd_entry_${data.scions[mn].scions[entry].scions[entry2].scion_id}`);
            //         //             menu_entry2.setAttribute('onclick', `fillErUp('${data.scions[mn].scions[entry].scions[entry2].ls_url}'); mnu_active_entry('${data.scions[mn].scions[entry].scions[entry2].scion_id}');`);
            //         //             menu_entry2.innerHTML = data.scions[mn].scions[entry].scions[entry2].ls_ttl;
            //         //             mnu_fldr_cntn.appendChild(menu_entry2);
            //         //         }

            //         //         // if (data.record.scions[mn].scions[entry].ls_type === "=>") {
            //         //         //     var mnu_fldr = createElementWithClass('div', 'styl_mnu_accrd_fldr');
            //         //         //     var mnu_fldr_ttl = createElementWithClass('div', 'styl_mnu_accrd_fldr_ttl');
            //         //         //     var mnu_fldr_cntn = createElementWithClass('div', 'styl_mnu_accrd_fldr_cntn');
            //         //         //     mnu_fldr.setAttribute('id', `mnu_accrd_fldr_${data.record.scions[mn].scions[entry].scion_id}`);
            //         //         //     mnu_fldr_ttl.setAttribute('id', `mnu_accrd_fldr_ttl_${data.record.scions[mn].scions[entry].scion_id}`);
            //         //         //     mnu_fldr_cntn.setAttribute('id', `mnu_accrd_fldr_cntn_${data.record.scions[mn].scions[entry].scion_id}`)
            //         //         //     mnu_fldr_ttl.setAttribute('onclick', `mnu_showHide_fldr('${data.record.scions[mn].scions[entry].scion_id}')`);
            //         //         //     mnu_fldr_ttl.innerHTML = `${data.record.scions[mn].scions[entry].ls_type}&nbsp${data.record.scions[mn].scions[entry].ls_ttl}`;
                                
            //         //         //     mnu_fldr.appendChild(mnu_fldr_ttl);
            //         //         //     mnu_fldr.appendChild(mnu_fldr_cntn);
            //         //         //     accrd_list.appendChild(mnu_fldr);

            //         //             // for (entry3 in data.record.scions[mn].scions[entry].scions[entry2].scions) {
            //         //             //     var menu_entry3 = createElementWithClass('div', 'styl_mnu_accrd_entry');
            //         //             //     menu_entry3.setAttribute('id', `mnu_accrd_entry_${data.record.scions[mn].scions[entry].scions[entry2].scions[entry3].scion_id}`);
            //         //             //     menu_entry3.setAttribute('onclick', `fillErUp('${data.record.scions[mn].scions[entry].scions[entry2].ls_url}')`);
            //         //             //     menu_entry3.innerHTML = data.record.scions[mn].scions[entry].scions[entry3].ls_ttl;
            //         //             //     mnu_fldr_cntn.appendChild(menu_entry3);

            //         //             //     // if (data.record.scions[mn].scions[entry].scions[entry2].ls_type === "=>") {
            //         //             //     //     var mnu_fldr = createElementWithClass('div', 'styl_mnu_accrd_fldr');
            //         //             //     //     var mnu_fldr_ttl = createElementWithClass('div', 'styl_mnu_accrd_fldr_ttl');
            //         //             //     //     var mnu_fldr_cntn = createElementWithClass('div', 'styl_mnu_accrd_fldr_cntn');
            //         //             //     //     mnu_fldr.setAttribute('id', `mnu_accrd_fldr_${data.record.scions[mn].scions[entry].scions[entry2].scion_id}`);
            //         //             //     //     mnu_fldr_ttl.setAttribute('id', `mnu_accrd_fldr_ttl_${data.record.scions[mn].scions[entry].scions[entry2].scion_id}`);
            //         //             //     //     mnu_fldr_cntn.setAttribute('id', `mnu_accrd_fldr_cntn_${data.record.scions[mn].scions[entry].scions[entry2].scion_id}`)
            //         //             //     //     mnu_fldr_ttl.setAttribute('onclick', `mnu_showHide_fldr('${data.record.scions[mn].scions[entry].scions[entry2].scion_id}')`);
            //         //             //     //     mnu_fldr_ttl.innerHTML = `${data.record.scions[mn].scions[entry].scions[entry2].ls_type}&nbsp${data.record.scions[mn].scions[entry].scions[entry2].ls_ttl}`;
                                        
            //         //             //     //     mnu_fldr.appendChild(mnu_fldr_ttl);
            //         //             //     //     mnu_fldr.appendChild(mnu_fldr_cntn);
            //         //             //     //     menu_entry3.appendChild(mnu_fldr);
            //         //             //     //     for (entry2 in data.record.scions[mn].scions[entry].scions) {
            //         //             //     //         var menu_entry2 = createElementWithClass('div', 'styl_mnu_accrd_entry');
            //         //             //     //         menu_entry2.setAttribute('id', `mnu_accrd_entry_${data.record.scions[mn].scions[entry].scions[entry2].scions[entry2].scion_id}`);
            //         //             //     //         menu_entry2.setAttribute('onclick', `fillErUp('${data.record.scions[mn].scions[entry].scions[entry2].scions[entry2].ls_url}')`);
            //         //             //     //         menu_entry2.innerHTML = data.record.scions[mn].scions[entry].scions[entry2].scions[entry2].ls_ttl;
            //         //             //     //         mnu_fldr_cntn.appendChild(menu_entry2);
            //         //             //     //     }
                                        
            //         //             //     // } else if (data.record.scions[mn].scions[entry].scions[entry2].ls_type === "+>") {
            //         //             //     //     var menu_entry = createElementWithClass('div', 'styl_mnu_accrd_entry');
            //         //             //     //     menu_entry.setAttribute('id', `mnu_accrd_entry_${data.record.scions[mn].scions[entry].scions[entry2].scion_id}`);
            //         //             //     //     menu_entry.setAttribute('onclick', `fillErUp('${data.record.scions[mn].scions[entry].scions[entry2].ls_url}')`);
            //         //             //     //     menu_entry.innerHTML = `${data.record.scions[mn].scions[entry].scions[entry2].ls_type}&nbsp${data.record.scions[mn].scions[entry].scions[entry2].ls_ttl}`;
            //         //             //     //     accrd_list.appendChild(menu_entry);
            //         //             //     // }
            //         //             // }
                            
            //         //     // } else if (data.record.scions[mn].scions[entry].ls_type === "+>") {
            //         //     //     var menu_entry = createElementWithClass('div', 'styl_mnu_accrd_entry');
            //         //     //     menu_entry.setAttribute('id', `mnu_accrd_entry_${data.record.scions[mn].scions[entry].scion_id}`);
            //         //     //     menu_entry.setAttribute('onclick', `fillErUp('${data.record.scions[mn].scions[entry].ls_url}')`);
            //         //     //     menu_entry.innerHTML = `${data.record.scions[mn].scions[entry].ls_type}&nbsp${data.record.scions[mn].scions[entry].ls_ttl}`;
            //         //     //     accrd_list.appendChild(menu_entry);
            //         //     // }

            //         //     } else if (data.scions[mn].scions[entry].ls_type === "+>") {
            //         //         var menu_entry = createElementWithClass('div', 'styl_mnu_accrd_entry');
            //         //         menu_entry.setAttribute('id', `mnu_accrd_entry_${data.scions[mn].scions[entry].scion_id}`);
            //         //         menu_entry.setAttribute('onclick', `fillErUp('${data.scions[mn].scions[entry].ls_url}'); mnu_active_entry('${data.scions[mn].scions[entry].scion_id}');`);
            //         //         menu_entry.innerHTML = `${data.scions[mn].scions[entry].ls_type}&nbsp${data.scions[mn].scions[entry].ls_ttl}`;
            //         //         accrd_list.appendChild(menu_entry);
            //         //     }
                        
                    
            // }
            //gen_men(drct_tree);
        })
        .catch(err => {
            console.log(err);
        })
};
whatsOnTheMenu();
