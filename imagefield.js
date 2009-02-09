// $Id$

/**
 *  Auto Attach standard client side file input validation
 */
Drupal.imagefieldValidateAutoAttach = function() {
  $("input[@type='file'].imagefield").change( function() {
    $('.imagefield-js-error').remove();
    /**
     *  add client side validation for the input[@file] accept attribute
     */
    var accept = this.accept.replace(/,\s*/g, '|');
    if (accept.length > 1) {
      var v = new RegExp('\\.(' + accept + ')$', 'gi');
      if (!v.test(this.value)) {
        var error = 'The file ' + this.value + " is not supported.\n";
        error += "Only the following file types are supported: \n" + accept.replace(/\|/g, ', ');
        alert(error);
        // what do I prepend this to? 
        //$(this).prepend($('<div class="imagefield-js-error>"' + error + '</div>'));
        this.value = ''; 
        return false;
      }   
    }   
    /**
     * Add filesize validation where possible
     */

  }); 
}

// Global killswitch
if (Drupal.jsEnabled) {
  $(document).ready(Drupal.imagefieldValidateAutoAttach);
}

