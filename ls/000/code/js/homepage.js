function gen_dir(rcr) {
    switch (rcr.ls_type) {
        case '->':
            var d_i = gen_ECI('div', 'd_000_trnk', `d_000_t_${rcr.scion_id}`);
            var d_c = createElementWithClass('div', 'd_000_t_ttl');
            var d_t = createElementWithClass('div', 'd_000_tab');
            var d_n = createElementWithClass('div', 'd_000_t_name');
            d_i.appendChild(d_c);
            d_c.append(gen_PntrDrct(rcr.scion_id, rcr.ls_type), d_t, d_n);
            //d_c.setAttribute('onclick', `fillErUp(${rcr.ls_url})`);
            d_t.innerHTML = `<em>[${rcr.ls_id}]</em> =&nbsp;`;
            d_n.innerHTML = rcr.ls_ttl;
            //var drct_cntnr = document.getElementById('id_drct_cntn');
            document.getElementById('id_drct_00_brnc').appendChild(d_i);
            var d_f = createElementWithClass('div', 'd_000_fold');
            d_i.appendChild(d_f);
            for (x in rcr.scions) {
                var fff = gen_dir(rcr.scions[x]);
                d_f.appendChild(fff);
            }
            return d_i;
                            
        case '=>':
            var d_i = gen_ECI('div', 'd_000_fldr', `d_000_f_${rcr.scion_id}`);
            var d_c = createElementWithClass('div', 'd_000_f_ttl');
            var d_t = createElementWithClass('div', 'd_000_tab');
            var d_n = createElementWithClass('div', 'd_000_name');
            d_i.appendChild(d_c);
            d_c.append(gen_PntrDrct(rcr.scion_id, rcr.ls_type), d_t, d_n);
            d_t.innerHTML = `<em>[${rcr.ls_id}]</em> =&nbsp;`;
            d_n.innerHTML = rcr.ls_ttl;
            var d_f = createElementWithClass('div', 'd_000_fold');
            d_i.appendChild(d_f);
            for (x in rcr.scions) {
                var fff = gen_dir(rcr.scions[x]);
                d_f.appendChild(fff);
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

function rotatePointer(pnt_id) {
    var pnt_stt = document.getElementById(pnt_id);
    
    if (pnt_stt.className.includes('styl_pnt_0deg')) {
        pnt_stt.classList.add('styl_pnt_30deg');
        pnt_stt.classList.remove('styl_pnt_0deg');
    } else if (pnt_stt.className.includes('styl_pnt_30deg')) {
        pnt_stt.classList.add('styl_pnt_0deg');
        pnt_stt.classList.remove('styl_pnt_30deg');
    }
    
};

function homeFetch() {
    var mainContainer = document.getElementById('trestleboard');
    mainContainer.innerHTML = "";
    var headBoard = createElementWithClass('div', 'branch_container');
    var ls_ttl = createElementWithClass('div', 'hd_name');
    var chst_plt = gen_ECI('div', 'branch_container', 'id_chst_plt');
    ls_ttl.innerHTML = `<img src='Seal.jpg' width='333' height='333'></img><br><span class='hd_ttl_arrw'>->&nbsp;</span>&nbsp;<span class='hd_ttl'>Welcome to Liber Silo</span>&nbsp;<span class='hd_ttl_arrw'>&nbsp;<-</span>`;
    headBoard.appendChild(ls_ttl);
    mainContainer.append(headBoard, chst_plt);

    var chst_flx = gen_ECI('div', 'chst_flx', 'id_chst_plt_flx');
    var chst_intr = gen_ECI('div', 'chst_intr', 'id_chst_plt_intr');
    var chst_drtr = gen_ECI('div', 'chst_drtr', 'id_chst_plt_drtr');
    chst_intr.innerHTML = "Click here for an INTRO",
    chst_drtr.innerHTML = "Click here for a DIRECTORY",
    chst_flx.append(chst_intr, chst_drtr);

}
