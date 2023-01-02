function whatsOnTheMenu() {
    fetch('/ls/000/am2.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            var m_btm = document.getElementById('id_mnu_btm');
            var menu_tablet = createElementWithClass('div', 'styl_mnu_tablet');
            m_btm.appendChild(menu_tablet);
            let drct_tree = data.scions;
            for (mn in drct_tree) {
                gen_men(drct_tree[mn]);
            }
            
            function gen_men(mnu) {
                switch (mnu.ls_type) {
                    case '->':
                        var accrd_cntnr = gen_ECI('div', 'styl_mnu_accrd_cntnr', `mnu_accrd_cntnr_${mnu.scion_id}`);
                        var accrd_ttl = gen_ECI('div', 'styl_mnu_accrd_ttl', `mnu_accrd_ttl_${mnu.scion_id}`);                    
                        var accrd_cntn = gen_ECI('div', 'styl_mnu_accrd_cntn', `mnu_accrd_cntn_${mnu.scion_id}`);
                        accrd_ttl.innerHTML = `${mnu.ls_ttl}`;
                        accrd_ttl.setAttribute("onclick", `mnu_showHide_top('${mnu.scion_id}')`);
                        accrd_cntnr.append(accrd_ttl, accrd_cntn);          
                        menu_tablet.appendChild(accrd_cntnr);
                        for (mnu_i in mnu.scions) {
                            accrd_cntn.appendChild(gen_men(mnu.scions[mnu_i]));
                        }
                        return accrd_cntnr;
                    
                    case '=>':
                        var mnu_fldr = gen_ECI('div', 'styl_mnu_accrd_fldr', `mnu_accrd_fldr_${mnu.scion_id}`);
                        var mnu_fldr_ttl = gen_ECI('div', 'styl_mnu_accrd_fldr_ttl', `mnu_accrd_fldr_ttl_${mnu.scion_id}`);
                        var mnu_fldr_cntn = gen_ECI('div', 'styl_mnu_accrd_fldr_cntn', `mnu_accrd_fldr_cntn_${mnu.scion_id}`);
                        mnu_fldr_ttl.innerHTML = `${mnu.ls_type}&nbsp${mnu.ls_ttl}`;
                        mnu_fldr_ttl.setAttribute('onclick', `mnu_showHide_fldr('${mnu.scion_id}')`);
                        mnu_fldr.append(mnu_fldr_ttl, mnu_fldr_cntn);
                        for (mnu_i in mnu.scions) {
                            mnu_fldr_cntn.appendChild(gen_men(mnu.scions[mnu_i]));
                        }
                        return mnu_fldr;

                    case '+>':   
                        var menu_entry = createElementWithClass('div', 'styl_mnu_accrd_entry');
                        menu_entry.setAttribute('id', `mnu_accrd_entry_${mnu.scion_id}`);
                        menu_entry.setAttribute('onclick', `fillErUp('${mnu.ls_url}'); mnu_active_entry('${mnu.scion_id}');`);
                        menu_entry.innerHTML = `${mnu.ls_type}&nbsp${mnu.ls_ttl}`;
                        return menu_entry;
                }
            }
        })
        .catch(err => {
            console.log(err);
        })
};
whatsOnTheMenu();
