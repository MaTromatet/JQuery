$(document).ready(function () {
  //Liste Fruit ------------------------------------------------------------------------------

  $("#liste_fruits").change(function () {
    if (!$("#liste_fruits option:selected").length) {
      $("#ajouter").css({ color: "grey", disabled: "false" });
    } else {
      $("#ajouter").css({ color: "black", disabled: "true" });
    }
  });

  //Liste panier ------------------------------------------------------------------------------

  $("#panier").change(function () {
    if (!$("#panier option:selected").length) {
      $("#supprimer").css({ color: "grey", disabled: "false" });
    } else {
      $("#supprimer").css({ color: "black", disabled: "true" });
    }
  });

  //Bouton Ajouter ------------------------------------------------------------------------------
  $("#ajouter").click(function () {
    //Ajoute une nouvelle option dans le select

    $("#liste_fruits option:selected").remove().appendTo("#panier");

    //Option 1
    // $("#panier").append(new Option(selectedFruit.text(), selectedFruit.val()));

    //Option 2
    /*     $("#panier").append(
      $("<option>", {
        value: selectedFruit.val(),
        text: selectedFruit.text(),
      })
    ); */

    //Enlever une option dans le select
    //$("#liste_fruits option[value='" + selectedFruit.val() + "']").remove();
  });

  //Bouton Supprimer ------------------------------------------------------------------------------
  $("#supprimer").click(function () {
    $("#panier option:selected").remove().appendTo("#liste_fruits");
  });
});
