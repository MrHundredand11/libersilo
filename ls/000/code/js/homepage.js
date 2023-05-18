function gen_dir(rcr) {
    switch (rcr.ls_type) {
        case '->':
            var d_i = gen_ECI('div', 'd_000_trnk', `d_000_t_${rcr.scion_id}`);
            var d_c = createElementWithClass('div', 'd_000_trnk_ttl');
            var d_t = createElementWithClass('div', 'd_000_trnk_tab');
            var d_n = createElementWithClass('div', 'd_000_trnk_name');
            d_i.appendChild(d_c);
            d_c.append(gen_PntrDrct(rcr.scion_id, rcr.ls_type), d_t, d_n);
            //d_c.setAttribute('onclick', `fillErUp(${rcr.ls_url})`);
            d_t.innerHTML = `<em>[${rcr.ls_id}]</em> =&nbsp'`;
            d_n.innerHTML = `<span class='styl_drct_rcrd_head'>${rcr.ls_ttl}</span>`;
            
            //var drct_cntnr = document.getElementById('id_drct_cntn');
            document.getElementById('id_drct_cntn').appendChild(d_i);
            var fl_cntnr = createElementWithClass('div', 'styl_drct_fl_cntnr');
            d_i.appendChild(fl_cntnr);
            for (x in rcr.scions) {
                var fff = gen_dir(rcr.scions[x]);
                fl_cntnr.appendChild(fff);
            }
            return d_i;
                            
        case '=>':
            var d_i = gen_ECI('div', 'd_000_fldr', `d_000_f_${rcr.scion_id}`);
            var d_c = createElementWithClass('div', 'd_000_ttl');
            var d_t = createElementWithClass('div', 'd_000_tab');
            var d_n = createElementWithClass('div', 'd_000_name');
            d_i.appendChild(d_c);
            d_c.append(gen_PntrDrct(rcr.scion_id, rcr.ls_type), d_t, d_n);
            d_t.innerHTML = `<em>[${rcr.ls_id}]</em> =&nbsp;`;
            d_n.innerHTML = rcr.ls_ttl;
            var fl_cntnr2 = createElementWithClass('div', 'styl_drct_fl_cntnr');
            d_i.appendChild(fl_cntnr2);
            for (x in rcr.scions) {
                var fff = gen_dir(rcr.scions[x]);
                fl_cntnr2.appendChild(fff);
            }
            return d_i;

        case '+>':    
            var d_c = gen_ECI('div', 'd_000_item', `d_000_i_${rcr.scion_id}`);
            var d_t = createElementWithClass('div', 'd_000_tab');
            var d_n = createElementWithClass('div', 'd_000_name');
            d_c.setAttribute('onclick', `fillErUp('${rcr.ls_url}')`);
            d_c.append(gen_PntrDrct(rcr.scion_id, rcr.ls_type), d_t, d_n);
            d_t.innerHTML = `<em>[${rcr.ls_id}]</em> =&nbsp;`;
            d_n.innerHTML = rcr.ls_ttl;
            return d_c;
    }
                // d_i2.setAttribute('id', drct_rcrd[d].scions[d2].scion_id);
                // d_i2c.setAttribute('onclick', `fillErUp(${drct_rcrd[d].scions[d2].ls_url})`);
};

function gen_PntrDrct(scion_id, p_type) {
    var pntr = gen_ECI('div', 'styl_pointers styl_pnt_0deg', `id_pnt_${scion_id}`);
    pntr.setAttribute('onclick', `rotatePointer('id_pnt_${scion_id}')`);
    switch (p_type) {
        case '->':
            pntr.innerHTML = "->&nbsp";
            break;

        case '=>':
            pntr.innerHTML = "=>&nbsp";
            break;

        case '+>':
            pntr.innerHTML = "+>&nbsp";
            break;
    }
    return pntr;
};

function homeFetch() {
    var drct_full = '/ls/000/am2.json';
    fetch(drct_full)
        .then(response => {
            return response.json();
        })
        .then(data => {
            var mainContainer = document.getElementById('trestleboard');
            mainContainer.innerHTML = "";
            var trstle_etchngs = gen_ECI('div', 'trstle_etchngs', `id_trstle_etchngs`);
            mainContainer.appendChild(trstle_etchngs);
            function populatePage(data) {
                var headBoard = createElementWithClass('div', 'branch_container');
                var ls_ttl = createElementWithClass('div', 'styl_head_ttle');
                ls_ttl.innerHTML = "<img src='Seal.jpg' width='333' height='333'></img><br>" + "<span class='styl_pointers'>->&nbsp</span>" + data.ls_ttl + "<span class='styl_pointers'>&nbsp<-</span>";
                headBoard.appendChild(ls_ttl);
                trstle_etchngs.appendChild(headBoard);
            }
            populatePage(data)

            function popDir(data) {
                let drct_rcrd = data.scions
                var drct_main = createElementWithClass('div', 'branch_container');
                var drct_head = createElementWithClass('div', 'styl_drct_head');
                var drct_cntn = gen_ECI('div', 'styl_drct_cntn', 'id_drct_cntn');
                drct_head.innerHTML = "<span class='styl_pointers'>-></span> <strong><u>Full Directory to Liber Silo</u></strong>:";
                drct_main.append(drct_head, drct_cntn);
                trstle_etchngs.appendChild(drct_main);
                for (x in drct_rcrd) {
                    gen_dir(drct_rcrd[x]);
                }
            }
            popDir(data);
        })

        .catch(err => {
            console.log(err);
        })
}
