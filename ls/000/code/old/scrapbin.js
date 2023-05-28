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
