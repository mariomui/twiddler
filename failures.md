document.getElementsByClassName('input.form-toggle-closer')[0].addEventListener('click', () => {
    // if ($(e.target).css('display') !== 'none') {
    //   $(e.target).css('display','none');
    //   document.getElementsByClassName('form-toggle-closer')[0].style.display = "flex";
      //i should make a toggling function. this is good dom practice though.
      toggleDisplay('');
      // event.target.style.display = 'none';
      // toggleDisplay('second');
      
  });

  input .form-toggle-closer {
    display: none;
    cursor: pointer;
    z-index:200;
    padding-right: 50px;
    color: black;
}

<div>
<label id=#first class="form-toggle-closer">
    <input type="button" value="x" class="form-toggle-closer">
    <!-- <span class="fa fa-window-close"></span> -->
  </label>
</div>


 // document.getElementsByClassName('form-toggle-closer')[0].addEventListener('click', (e) => {
        // if (document.getElementsByClassName('form-toggle-label')[0].style.display === 'none') {
        //   document.getElementsByClassName('form-toggle-label')[0].style.display = 'flex';
        // }
        // document.getElementsByClassName('form-toggle-closer').style.display = 'none';
        // fStore._.toggleDisplay('fa-window-close-o');
      // });