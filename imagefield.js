
/**
 *  Auto Attach standard client side file input validation
 */
Drupal.imagefieldValidateAutoAttach = function() {
  $("input.imagefield[@type='file']").change(function() {
    // Remove any previous errors.
    $('.imagefield-js-error').remove();

    /**
     * Add client side validation for the input[@file] accept attribute
     */
    var accept = this.accept.replace(/,\s*/g, '|');
    if (accept.length > 1) {
      var v = new RegExp('\\.(' + accept + ')$', 'gi');
      if (!v.test(this.value)) {
        var error = 'The selected file ' + this.value + ' cannot not be uploaded. Only files with the following extensions are allowed: ' + accept.replace(/\|/g, ', ');

        $(this).before('<div class="messages error file-upload-js-error">' + error + '</div>');
        this.value = '';

        return false;
      }
    }
  }); 
}

// Global killswitch
if (Drupal.jsEnabled) {
  $(document).ready(Drupal.imagefieldValidateAutoAttach);
}

