define(['exports', 'kotlin', 'kotlinx-html-js'], function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var equals = Kotlin.equals;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwUPAE = Kotlin.throwUPAE;
  var Unit = Kotlin.kotlin.Unit;
  var option = $module$kotlinx_html_js.kotlinx.html.option_k09m0r$;
  var append = $module$kotlinx_html_js.kotlinx.html.dom.append_k9bwru$;
  var throwCCE = Kotlin.throwCCE;
  var td = $module$kotlinx_html_js.kotlinx.html.td_vlzo05$;
  var tr = $module$kotlinx_html_js.kotlinx.html.tr_gqplvg$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var button = $module$kotlinx_html_js.kotlinx.html.button_i4xb7r$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var get_classes = $module$kotlinx_html_js.kotlinx.html.get_classes_fxodxh$;
  var plus_0 = Kotlin.kotlin.collections.plus_xfiyik$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var table = $module$kotlinx_html_js.kotlinx.html.table_dmqmme$;
  var label = $module$kotlinx_html_js.kotlinx.html.label_yd75js$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_8pggrc$;
  var select = $module$kotlinx_html_js.kotlinx.html.select_9klr40$;
  var span = $module$kotlinx_html_js.kotlinx.html.span_6djfml$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var requireNoNulls = Kotlin.kotlin.collections.requireNoNulls_whsx6z$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var option_0 = $module$kotlinx_html_js.kotlinx.html.option_xfiiwk$;
  var input = $module$kotlinx_html_js.kotlinx.html.input_e1g74z$;
  var stringMapOf = Kotlin.kotlin.collections.stringMapOf_gkrhic$;
  var toMap_0 = Kotlin.kotlin.collections.toMap_abgq59$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var first_0 = Kotlin.kotlin.collections.first_7wnvza$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var removeSurrounding = Kotlin.kotlin.text.removeSurrounding_90ijwr$;
  var unboxChar = Kotlin.unboxChar;
  var removeSurrounding_0 = Kotlin.kotlin.text.removeSurrounding_gsj5wt$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function FactoCal() {
    this.db_0 = new FactorioDB(emptyList(), emptyList(), emptyList());
    this.recipesCache_0 = LinkedHashMap_init();
  }
  FactoCal.prototype.loadDB_61zpoe$ = function (json) {
    this.db_0 = factorioDBofJson(json);
  };
  FactoCal.prototype.saveDB = function () {
    return toJson_0(this.db_0);
  };
  FactoCal.prototype.addProduct_61zpoe$ = function (name) {
    var tmp$;
    if (name.length > 0 && this.getProduct_61zpoe$(name) == null) {
      tmp$ = this.db_0;
      tmp$.products = plus(tmp$.products, new Product(name));
      return true;
    }
     else
      return false;
  };
  FactoCal.prototype.addAssembler_9sobi5$ = function (name, speed) {
    var tmp$;
    if (name.length > 0 && this.getAssembler_61zpoe$(name) == null) {
      tmp$ = this.db_0;
      tmp$.assembler = plus(tmp$.assembler, new Assembler(name, speed));
      return true;
    }
     else
      return false;
  };
  FactoCal.prototype.addRecipe_cttdsi$ = function (name, input, output, assembler, time) {
    var tmp$;
    if (name.length > 0 && this.getRecipe_61zpoe$(name) == null) {
      tmp$ = this.db_0;
      tmp$.recipes = plus(tmp$.recipes, new Recipe(name, input, output, assembler, time));
      return true;
    }
     else
      return false;
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  FactoCal.prototype.getRecipesByProduct_5kjtv9$ = function (output) {
    var $receiver = this.recipesCache_0;
    var tmp$;
    var value = $receiver.get_11rb$(output);
    if (value == null) {
      var $receiver_0 = this.db_0.recipes;
      var destination = ArrayList_init();
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element.output.containsKey_11rb$(output))
          destination.add_11rb$(element);
      }
      var answer = destination;
      $receiver.put_xwzc9p$(output, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  FactoCal.prototype.getRecipesByProduct_61zpoe$ = function (output) {
    var $receiver = this.recipesCache_0;
    var key = ensureNotNull(this.getProduct_61zpoe$(output));
    var tmp$;
    var value = $receiver.get_11rb$(key);
    if (value == null) {
      var $receiver_0 = this.db_0.recipes;
      var destination = ArrayList_init();
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element.output.containsKey_11rb$(ensureNotNull(this.getProduct_61zpoe$(output))))
          destination.add_11rb$(element);
      }
      var answer = destination;
      $receiver.put_xwzc9p$(key, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  FactoCal.prototype.getProduct_61zpoe$ = function (string) {
    var tmp$;
    var $receiver = this.db_0.products;
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (equals(element.name, string))
        destination.add_11rb$(element);
    }
    return (tmp$ = destination.size === 1 ? destination : null) != null ? tmp$.get_za3lpa$(0) : null;
  };
  FactoCal.prototype.getAllProducts = function () {
    return this.db_0.products;
  };
  FactoCal.prototype.getAssembler_61zpoe$ = function (string) {
    var tmp$;
    var $receiver = this.db_0.assembler;
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (equals(element.name, string))
        destination.add_11rb$(element);
    }
    return (tmp$ = destination.size === 1 ? destination : null) != null ? tmp$.get_za3lpa$(0) : null;
  };
  FactoCal.prototype.getAllAssembler = function () {
    return this.db_0.assembler;
  };
  FactoCal.prototype.getRecipe_61zpoe$ = function (recipe) {
    var tmp$;
    var $receiver = this.db_0.recipes;
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (equals(element.name, recipe))
        destination.add_11rb$(element);
    }
    return (tmp$ = destination.size === 1 ? destination : null) != null ? tmp$.get_za3lpa$(0) : null;
  };
  FactoCal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FactoCal',
    interfaces: []
  };
  function FactorioDB(products, assembler, recipes) {
    this.products = products;
    this.assembler = assembler;
    this.recipes = recipes;
  }
  FactorioDB.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FactorioDB',
    interfaces: []
  };
  FactorioDB.prototype.component1 = function () {
    return this.products;
  };
  FactorioDB.prototype.component2 = function () {
    return this.assembler;
  };
  FactorioDB.prototype.component3 = function () {
    return this.recipes;
  };
  FactorioDB.prototype.copy_cw4b1w$ = function (products, assembler, recipes) {
    return new FactorioDB(products === void 0 ? this.products : products, assembler === void 0 ? this.assembler : assembler, recipes === void 0 ? this.recipes : recipes);
  };
  FactorioDB.prototype.toString = function () {
    return 'FactorioDB(products=' + Kotlin.toString(this.products) + (', assembler=' + Kotlin.toString(this.assembler)) + (', recipes=' + Kotlin.toString(this.recipes)) + ')';
  };
  FactorioDB.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.products) | 0;
    result = result * 31 + Kotlin.hashCode(this.assembler) | 0;
    result = result * 31 + Kotlin.hashCode(this.recipes) | 0;
    return result;
  };
  FactorioDB.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.products, other.products) && Kotlin.equals(this.assembler, other.assembler) && Kotlin.equals(this.recipes, other.recipes)))));
  };
  function Gui(factoCal) {
    this.factoCal_0 = factoCal;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    this.firstProductSelector_0 = Kotlin.isType(tmp$ = ensureNotNull(document.getElementById('firstProductSelector')), HTMLSelectElement) ? tmp$ : throwCCE();
    this.firstProductButton_0 = Kotlin.isType(tmp$_0 = ensureNotNull(document.getElementById('firstProductBtn')), HTMLButtonElement) ? tmp$_0 : throwCCE();
    this.firstProductRate_0 = Kotlin.isType(tmp$_1 = ensureNotNull(document.getElementById('firstProductRate')), HTMLInputElement) ? tmp$_1 : throwCCE();
    this.headStep_0 = Kotlin.isType(tmp$_2 = ensureNotNull(document.getElementById('headStep')), HTMLDivElement) ? tmp$_2 : throwCCE();
    this.configOutput_0 = Kotlin.isType(tmp$_3 = ensureNotNull(document.getElementById('configOutput')), HTMLTextAreaElement) ? tmp$_3 : throwCCE();
    this.configDownload_0 = Kotlin.isType(tmp$_4 = ensureNotNull(document.getElementById('configDownload')), HTMLAnchorElement) ? tmp$_4 : throwCCE();
    this.addRecipeAssemblerSelect_0 = Kotlin.isType(tmp$_5 = ensureNotNull(document.getElementById('addRecipeAssemblerSelect')), HTMLSelectElement) ? tmp$_5 : throwCCE();
    this.headProcessingStep_dh1y2g$_0 = this.headProcessingStep_dh1y2g$_0;
    this.stepMap_0 = stringMapOf([]);
    this.addRecipeInputIds_0 = ArrayList_init();
    this.addRecipeOutputIds_0 = ArrayList_init();
    this.addRecipeAssemblerIds_0 = LinkedHashMap_init();
  }
  Object.defineProperty(Gui.prototype, 'headProcessingStep_0', {
    get: function () {
      if (this.headProcessingStep_dh1y2g$_0 == null)
        return throwUPAE('headProcessingStep');
      return this.headProcessingStep_dh1y2g$_0;
    },
    set: function (headProcessingStep) {
      this.headProcessingStep_dh1y2g$_0 = headProcessingStep;
    }
  });
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  function Gui$initialize$lambda(this$Gui) {
    return function (it) {
      var firstProduct = ensureNotNull(this$Gui.factoCal_0.getProduct_61zpoe$(this$Gui.firstProductSelector_0.value));
      var rate = toDouble(this$Gui.firstProductRate_0.value);
      this$Gui.headProcessingStep_0 = new ProcessingStep(firstProduct, rate, this$Gui.factoCal_0);
      var $receiver = this$Gui.stepMap_0;
      var key = this$Gui.headProcessingStep_0.uuid;
      var value = this$Gui.headProcessingStep_0;
      $receiver.put_xwzc9p$(key, value);
      this$Gui.addProcessingStep_0(this$Gui.headProcessingStep_0, this$Gui.headStep_0);
      return Unit;
    };
  }
  Gui.prototype.initialize = function () {
    this.firstProductButton_0.addEventListener('click', Gui$initialize$lambda(this));
    this.update();
  };
  function Gui$update$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$it.name);
      $receiver.value = closure$it.name;
      return Unit;
    };
  }
  function Gui$update$lambda(this$Gui) {
    return function ($receiver) {
      var tmp$;
      tmp$ = this$Gui.factoCal_0.getAllProducts().iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        option($receiver, void 0, Gui$update$lambda$lambda$lambda(element));
      }
      return Unit;
    };
  }
  function Gui$update$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$it.name);
      $receiver.value = closure$it.name;
      return Unit;
    };
  }
  function Gui$update$lambda_0(this$Gui) {
    return function ($receiver) {
      var tmp$;
      tmp$ = this$Gui.factoCal_0.getAllAssembler().iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        option($receiver, void 0, Gui$update$lambda$lambda$lambda_0(element));
      }
      return Unit;
    };
  }
  Gui.prototype.update = function () {
    removeAllChildren(this.firstProductSelector_0);
    append(this.firstProductSelector_0, Gui$update$lambda(this));
    this.configOutput_0.value = this.factoCal_0.saveDB();
    fit(this.configOutput_0);
    this.configDownload_0.download = 'factocal.conf';
    var tmp$ = [this.factoCal_0.saveDB()];
    var type = 'text/plain';
    var o = {};
    o['type'] = type;
    var blob = new Blob(tmp$, o);
    this.configDownload_0.href = URL.createObjectURL(blob);
    removeAllChildren(this.addRecipeAssemblerSelect_0);
    append(this.addRecipeAssemblerSelect_0, Gui$update$lambda_0(this));
  };
  Gui.prototype.loadConfig = function (json) {
    this.factoCal_0.loadDB_61zpoe$(json);
    this.update();
  };
  function Gui$updateAssemblerDiv$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$it.name);
      $receiver.value = closure$it.name;
      return Unit;
    };
  }
  function Gui$updateAssemblerDiv$lambda(closure$processingStep) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$processingStep.recipes.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        option($receiver, void 0, Gui$updateAssemblerDiv$lambda$lambda$lambda(element));
      }
      return Unit;
    };
  }
  function Gui$updateAssemblerDiv$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$it.name);
      $receiver.value = closure$it.name;
      return Unit;
    };
  }
  function Gui$updateAssemblerDiv$lambda_0(closure$processingStep) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$processingStep.currentRecipe.assembler.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        option($receiver, void 0, Gui$updateAssemblerDiv$lambda$lambda$lambda_0(element));
      }
      return Unit;
    };
  }
  function Gui$updateAssemblerDiv$lambda$lambda$lambda$lambda(closure$product) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$product.name);
      return Unit;
    };
  }
  function Gui$updateAssemblerDiv$lambda$lambda$lambda$lambda_0(closure$amount) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$amount.toString());
      return Unit;
    };
  }
  function Gui$updateAssemblerDiv$lambda$lambda$lambda_1(closure$product, closure$amount) {
    return function ($receiver) {
      td($receiver, void 0, Gui$updateAssemblerDiv$lambda$lambda$lambda$lambda(closure$product));
      td($receiver, void 0, Gui$updateAssemblerDiv$lambda$lambda$lambda$lambda_0(closure$amount));
      return Unit;
    };
  }
  function Gui$updateAssemblerDiv$lambda_1(closure$processingStep) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$processingStep.outputProduced.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var product = element.key;
        var amount = element.value;
        tr($receiver, void 0, Gui$updateAssemblerDiv$lambda$lambda$lambda_1(product, amount));
      }
      return Unit;
    };
  }
  function Gui$updateAssemblerDiv$lambda$lambda$lambda$lambda_1(closure$product) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$product.name);
      return Unit;
    };
  }
  function Gui$updateAssemblerDiv$lambda$lambda$lambda$lambda_2(closure$pair) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$pair.first.toString());
      return Unit;
    };
  }
  function Gui$updateAssemblerDiv$lambda$lambda$lambda$lambda$lambda$lambda(closure$processingStep, closure$product, closure$childDiv, this$Gui) {
    return function (it) {
      this$Gui.addProcessingStep_0(ensureNotNull(closure$processingStep.createMissingInputStep_5kjtv9$(closure$product)), closure$childDiv);
      this$Gui.updateAssemblerDiv_0(closure$processingStep);
      return Unit;
    };
  }
  function Gui$updateAssemblerDiv$lambda$lambda$lambda$lambda$lambda(closure$processingStep, closure$product, closure$childDiv, this$Gui) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Add step');
      set_onClickFunction($receiver, Gui$updateAssemblerDiv$lambda$lambda$lambda$lambda$lambda$lambda(closure$processingStep, closure$product, closure$childDiv, this$Gui));
      return Unit;
    };
  }
  function Gui$updateAssemblerDiv$lambda$lambda$lambda$lambda_3(closure$pair, closure$processingStep, closure$product, closure$childDiv, this$Gui) {
    return function ($receiver) {
      if (closure$pair.second == null) {
        button($receiver, void 0, void 0, void 0, void 0, void 0, Gui$updateAssemblerDiv$lambda$lambda$lambda$lambda$lambda(closure$processingStep, closure$product, closure$childDiv, this$Gui));
      }
      return Unit;
    };
  }
  function Gui$updateAssemblerDiv$lambda$lambda$lambda_2(closure$product, closure$pair, closure$processingStep, closure$childDiv, this$Gui) {
    return function ($receiver) {
      td($receiver, void 0, Gui$updateAssemblerDiv$lambda$lambda$lambda$lambda_1(closure$product));
      td($receiver, void 0, Gui$updateAssemblerDiv$lambda$lambda$lambda$lambda_2(closure$pair));
      td($receiver, void 0, Gui$updateAssemblerDiv$lambda$lambda$lambda$lambda_3(closure$pair, closure$processingStep, closure$product, closure$childDiv, this$Gui));
      return Unit;
    };
  }
  function Gui$updateAssemblerDiv$lambda_2(closure$processingStep, closure$childDiv, this$Gui) {
    return function ($receiver) {
      var $receiver_0 = closure$processingStep.inputNeeded;
      var tmp$;
      tmp$ = $receiver_0.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var closure$processingStep_0 = closure$processingStep;
        var closure$childDiv_0 = closure$childDiv;
        var this$Gui_0 = this$Gui;
        var product = element.key;
        var pair = element.value;
        tr($receiver, void 0, Gui$updateAssemblerDiv$lambda$lambda$lambda_2(product, pair, closure$processingStep_0, closure$childDiv_0, this$Gui_0));
      }
      return Unit;
    };
  }
  Gui.prototype.updateAssemblerDiv_0 = function (processingStep) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var uuid = processingStep.uuid;
    var recipeSelect = Kotlin.isType(tmp$ = ensureNotNull(document.getElementById(uuid + '-recipe-select')), HTMLSelectElement) ? tmp$ : throwCCE();
    var assemblerSelect = Kotlin.isType(tmp$_0 = ensureNotNull(document.getElementById(uuid + '-assembler-select')), HTMLSelectElement) ? tmp$_0 : throwCCE();
    var outputTable = Kotlin.isType(tmp$_1 = ensureNotNull(document.getElementById(uuid + '-output-table')), HTMLTableElement) ? tmp$_1 : throwCCE();
    var inputTable = Kotlin.isType(tmp$_2 = ensureNotNull(document.getElementById(uuid + '-input-table')), HTMLTableElement) ? tmp$_2 : throwCCE();
    var assemblerCountP = Kotlin.isType(tmp$_3 = ensureNotNull(document.getElementById(uuid + '-assembler-count-p')), HTMLSpanElement) ? tmp$_3 : throwCCE();
    var childDiv = Kotlin.isType(tmp$_4 = ensureNotNull(document.getElementById(uuid + '-child-div')), HTMLDivElement) ? tmp$_4 : throwCCE();
    removeAllChildren(recipeSelect);
    append(recipeSelect, Gui$updateAssemblerDiv$lambda(processingStep));
    recipeSelect.value = processingStep.currentRecipe.name;
    removeAllChildren(assemblerSelect);
    append(assemblerSelect, Gui$updateAssemblerDiv$lambda_0(processingStep));
    assemblerSelect.value = processingStep.currentAssembler.name;
    removeAllChildren(outputTable);
    append(outputTable, Gui$updateAssemblerDiv$lambda_1(processingStep));
    removeAllChildren(inputTable);
    append(inputTable, Gui$updateAssemblerDiv$lambda_2(processingStep, childDiv, this));
    assemblerCountP.textContent = processingStep.numberOfAssemblerNeeded.toString();
  };
  function Gui$addProcessingStep$lambda$lambda$lambda$lambda$lambda(closure$uuid) {
    return function ($receiver) {
      set_id($receiver, closure$uuid + '-output-table');
      return Unit;
    };
  }
  function Gui$addProcessingStep$lambda$lambda$lambda$lambda(closure$uuid) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Output: ');
      table($receiver, void 0, Gui$addProcessingStep$lambda$lambda$lambda$lambda$lambda(closure$uuid));
      return Unit;
    };
  }
  function Gui$addProcessingStep$lambda$lambda$lambda(closure$uuid) {
    return function ($receiver) {
      label($receiver, void 0, Gui$addProcessingStep$lambda$lambda$lambda$lambda(closure$uuid));
      return Unit;
    };
  }
  function Gui$addProcessingStep$lambda$lambda$lambda$lambda$lambda_0(closure$uuid) {
    return function ($receiver) {
      set_id($receiver, closure$uuid + '-recipe-select');
      return Unit;
    };
  }
  function Gui$addProcessingStep$lambda$lambda$lambda$lambda_0(closure$uuid) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Recipe: ');
      select($receiver, void 0, Gui$addProcessingStep$lambda$lambda$lambda$lambda$lambda_0(closure$uuid));
      return Unit;
    };
  }
  function Gui$addProcessingStep$lambda$lambda$lambda_0(closure$uuid) {
    return function ($receiver) {
      label($receiver, void 0, Gui$addProcessingStep$lambda$lambda$lambda$lambda_0(closure$uuid));
      return Unit;
    };
  }
  function Gui$addProcessingStep$lambda$lambda$lambda$lambda$lambda_1(closure$uuid) {
    return function ($receiver) {
      set_id($receiver, closure$uuid + '-assembler-select');
      return Unit;
    };
  }
  function Gui$addProcessingStep$lambda$lambda$lambda$lambda$lambda_2(closure$uuid) {
    return function ($receiver) {
      set_id($receiver, closure$uuid + '-assembler-count-p');
      return Unit;
    };
  }
  function Gui$addProcessingStep$lambda$lambda$lambda$lambda_1(closure$uuid) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Assembler: ');
      select($receiver, void 0, Gui$addProcessingStep$lambda$lambda$lambda$lambda$lambda_1(closure$uuid));
      $receiver.unaryPlus_pdl1vz$(' x ');
      span($receiver, void 0, Gui$addProcessingStep$lambda$lambda$lambda$lambda$lambda_2(closure$uuid));
      return Unit;
    };
  }
  function Gui$addProcessingStep$lambda$lambda$lambda_1(closure$uuid) {
    return function ($receiver) {
      label($receiver, void 0, Gui$addProcessingStep$lambda$lambda$lambda$lambda_1(closure$uuid));
      return Unit;
    };
  }
  function Gui$addProcessingStep$lambda$lambda$lambda$lambda$lambda_3(closure$uuid) {
    return function ($receiver) {
      set_id($receiver, closure$uuid + '-input-table');
      return Unit;
    };
  }
  function Gui$addProcessingStep$lambda$lambda$lambda$lambda_2(closure$uuid) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Input:');
      table($receiver, void 0, Gui$addProcessingStep$lambda$lambda$lambda$lambda$lambda_3(closure$uuid));
      return Unit;
    };
  }
  function Gui$addProcessingStep$lambda$lambda$lambda_2(closure$uuid) {
    return function ($receiver) {
      label($receiver, void 0, Gui$addProcessingStep$lambda$lambda$lambda$lambda_2(closure$uuid));
      return Unit;
    };
  }
  function Gui$addProcessingStep$lambda$lambda$lambda_3(closure$uuid) {
    return function ($receiver) {
      set_id($receiver, closure$uuid + '-child-div');
      set_classes($receiver, plus_0(get_classes($receiver), 'child-container'));
      return Unit;
    };
  }
  function Gui$addProcessingStep$lambda$lambda(closure$uuid) {
    return function ($receiver) {
      set_id($receiver, closure$uuid + '-div');
      set_classes($receiver, plus_0(get_classes($receiver), 'step'));
      p($receiver, void 0, Gui$addProcessingStep$lambda$lambda$lambda(closure$uuid));
      p($receiver, void 0, Gui$addProcessingStep$lambda$lambda$lambda_0(closure$uuid));
      p($receiver, void 0, Gui$addProcessingStep$lambda$lambda$lambda_1(closure$uuid));
      p($receiver, void 0, Gui$addProcessingStep$lambda$lambda$lambda_2(closure$uuid));
      div($receiver, void 0, Gui$addProcessingStep$lambda$lambda$lambda_3(closure$uuid));
      return Unit;
    };
  }
  function Gui$addProcessingStep$lambda(closure$uuid) {
    return function ($receiver) {
      div_0($receiver, void 0, Gui$addProcessingStep$lambda$lambda(closure$uuid));
      return Unit;
    };
  }
  function Gui$addProcessingStep$lambda$lambda_0(this$Gui, this$, closure$step) {
    return function (it) {
      closure$step.currentRecipe = ensureNotNull(this$Gui.factoCal_0.getRecipe_61zpoe$(this$.value));
      this$Gui.updateAssemblerDiv_0(closure$step);
      return Unit;
    };
  }
  function Gui$addProcessingStep$lambda$lambda_1(this$Gui, this$, closure$step) {
    return function (it) {
      closure$step.currentAssembler = ensureNotNull(this$Gui.factoCal_0.getAssembler_61zpoe$(this$.value));
      this$Gui.updateAssemblerDiv_0(closure$step);
      return Unit;
    };
  }
  Gui.prototype.addProcessingStep_0 = function (step, parent) {
    var tmp$, tmp$_0;
    var uuid = step.uuid;
    this.stepMap_0.put_xwzc9p$(uuid, step);
    append(parent, Gui$addProcessingStep$lambda(uuid));
    var $receiver = Kotlin.isType(tmp$ = document.getElementById(uuid + '-recipe-select'), HTMLSelectElement) ? tmp$ : throwCCE();
    $receiver.addEventListener('change', Gui$addProcessingStep$lambda$lambda_0(this, $receiver, step));
    var $receiver_0 = Kotlin.isType(tmp$_0 = document.getElementById(uuid + '-assembler-select'), HTMLSelectElement) ? tmp$_0 : throwCCE();
    $receiver_0.addEventListener('change', Gui$addProcessingStep$lambda$lambda_1(this, $receiver_0, step));
    this.updateAssemblerDiv_0(step);
  };
  Gui.prototype.addProduct = function () {
    var tmp$, tmp$_0;
    var nameInput = Kotlin.isType(tmp$ = ensureNotNull(document.getElementById('addProductName')), HTMLInputElement) ? tmp$ : throwCCE();
    var errorP = Kotlin.isType(tmp$_0 = ensureNotNull(document.getElementById('addProductError')), HTMLParagraphElement) ? tmp$_0 : throwCCE();
    if (!this.factoCal_0.addProduct_61zpoe$(nameInput.value))
      errorP.textContent = 'Error: Name already exists';
    else
      errorP.textContent = '';
    this.update();
  };
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  Gui.prototype.addAssembler = function () {
    var tmp$, tmp$_0, tmp$_1;
    var nameInput = Kotlin.isType(tmp$ = ensureNotNull(document.getElementById('addAssemblerName')), HTMLInputElement) ? tmp$ : throwCCE();
    var speedInput = Kotlin.isType(tmp$_0 = ensureNotNull(document.getElementById('addAssemblerSpeed')), HTMLInputElement) ? tmp$_0 : throwCCE();
    var errorP = Kotlin.isType(tmp$_1 = ensureNotNull(document.getElementById('addAssemblerError')), HTMLParagraphElement) ? tmp$_1 : throwCCE();
    var speed = toDoubleOrNull(speedInput.value);
    if (speed == null) {
      errorP.textContent = 'Error: Speed not a number';
      return;
    }
    if (!this.factoCal_0.addAssembler_9sobi5$(nameInput.value, speed))
      errorP.textContent = 'Error: Name already exists';
    else
      errorP.textContent = '';
    this.update();
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  Gui.prototype.addRecipe = function () {
    var tmp$, tmp$_0, tmp$_1;
    var nameInput = Kotlin.isType(tmp$ = ensureNotNull(document.getElementById('addRecipeName')), HTMLInputElement) ? tmp$ : throwCCE();
    var timeInput = Kotlin.isType(tmp$_0 = ensureNotNull(document.getElementById('addRecipeTime')), HTMLInputElement) ? tmp$_0 : throwCCE();
    var errorP = Kotlin.isType(tmp$_1 = ensureNotNull(document.getElementById('addRecipeError')), HTMLParagraphElement) ? tmp$_1 : throwCCE();
    var time = toDoubleOrNull(timeInput.value);
    if (time == null) {
      errorP.textContent = 'Error: Time not a number';
      return;
    }
    var $receiver = this.addRecipeInputIds_0;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var item = tmp$_2.next();
      var tmp$_3 = destination.add_11rb$;
      var tmp$_4, tmp$_5;
      var productSelect = Kotlin.isType(tmp$_4 = ensureNotNull(document.getElementById(item + '-product')), HTMLSelectElement) ? tmp$_4 : throwCCE();
      var amountInput = Kotlin.isType(tmp$_5 = ensureNotNull(document.getElementById(item + '-amount')), HTMLInputElement) ? tmp$_5 : throwCCE();
      var amount = toIntOrNull(amountInput.value);
      if (amount == null) {
        errorP.textContent = 'Error: Input product ' + productSelect.value + ' amount is not a number';
        return;
      }
      tmp$_3.call(destination, to(ensureNotNull(this.factoCal_0.getProduct_61zpoe$(productSelect.value)), amount));
    }
    var inputs = toMap(requireNoNulls(destination));
    var $receiver_0 = this.addRecipeOutputIds_0;
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_6;
    tmp$_6 = $receiver_0.iterator();
    while (tmp$_6.hasNext()) {
      var item_0 = tmp$_6.next();
      var tmp$_7 = destination_0.add_11rb$;
      var tmp$_8, tmp$_9;
      var productSelect_0 = Kotlin.isType(tmp$_8 = ensureNotNull(document.getElementById(item_0 + '-product')), HTMLSelectElement) ? tmp$_8 : throwCCE();
      var amountInput_0 = Kotlin.isType(tmp$_9 = ensureNotNull(document.getElementById(item_0 + '-amount')), HTMLInputElement) ? tmp$_9 : throwCCE();
      var amount_0 = toIntOrNull(amountInput_0.value);
      if (amount_0 == null) {
        errorP.textContent = 'Error: Output product ' + productSelect_0.value + ' amount is not a number';
        return;
      }
      tmp$_7.call(destination_0, to(ensureNotNull(this.factoCal_0.getProduct_61zpoe$(productSelect_0.value)), amount_0));
    }
    var outputs = toMap(requireNoNulls(destination_0));
    if (!this.factoCal_0.addRecipe_cttdsi$(nameInput.value, inputs, outputs, toSet(this.addRecipeAssemblerIds_0.values), time))
      errorP.textContent = 'Error: Name already exists';
    else
      errorP.textContent = '';
    this.update();
  };
  function Gui$addRecipeElement$lambda$lambda$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$it.name);
      $receiver.value = closure$it.name;
      return Unit;
    };
  }
  function Gui$addRecipeElement$lambda$lambda$lambda$lambda(closure$uuid, this$Gui) {
    return function ($receiver) {
      set_id($receiver, closure$uuid + '-product');
      var tmp$;
      tmp$ = this$Gui.factoCal_0.getAllProducts().iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        option_0($receiver, void 0, Gui$addRecipeElement$lambda$lambda$lambda$lambda$lambda$lambda(element));
      }
      return Unit;
    };
  }
  function Gui$addRecipeElement$lambda$lambda$lambda$lambda_0(this$Gui, closure$uuid) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(this$Gui.addRecipeAssemblerSelect_0.value);
      set_id($receiver, closure$uuid + '-assembler');
      return Unit;
    };
  }
  function Gui$addRecipeElement$lambda$lambda$lambda(closure$type, closure$uuid, this$Gui) {
    return function ($receiver) {
      switch (closure$type) {
        case 'input':
        case 'output':
          select($receiver, void 0, Gui$addRecipeElement$lambda$lambda$lambda$lambda(closure$uuid, this$Gui));
          break;
        case 'assembler':
          p($receiver, void 0, Gui$addRecipeElement$lambda$lambda$lambda$lambda_0(this$Gui, closure$uuid));
          break;
      }
      return Unit;
    };
  }
  function Gui$addRecipeElement$lambda$lambda$lambda$lambda$lambda(closure$uuid) {
    return function ($receiver) {
      set_id($receiver, closure$uuid + '-amount');
      return Unit;
    };
  }
  function Gui$addRecipeElement$lambda$lambda$lambda$lambda_1(closure$uuid) {
    return function ($receiver) {
      input($receiver, void 0, void 0, void 0, void 0, void 0, Gui$addRecipeElement$lambda$lambda$lambda$lambda$lambda(closure$uuid));
      return Unit;
    };
  }
  function Gui$addRecipeElement$lambda$lambda$lambda_0(closure$uuid) {
    return function ($receiver) {
      label($receiver, void 0, Gui$addRecipeElement$lambda$lambda$lambda$lambda_1(closure$uuid));
      return Unit;
    };
  }
  function Gui$addRecipeElement$lambda$lambda$lambda$lambda$lambda_0(closure$type, this$Gui, closure$uuid) {
    return function (it) {
      switch (closure$type) {
        case 'input':
          var $receiver = this$Gui.addRecipeInputIds_0;
          var element = closure$uuid;
          $receiver.remove_11rb$(element);
          break;
        case 'output':
          var $receiver_0 = this$Gui.addRecipeOutputIds_0;
          var element_0 = closure$uuid;
          $receiver_0.remove_11rb$(element_0);
          break;
        case 'assembler':
          this$Gui.addRecipeAssemblerIds_0.remove_11rb$(closure$uuid);
          break;
      }
      ensureNotNull(document.getElementById(closure$uuid + '-row')).remove();
      return Unit;
    };
  }
  function Gui$addRecipeElement$lambda$lambda$lambda$lambda_2(closure$type, this$Gui, closure$uuid) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Remove');
      set_onClickFunction($receiver, Gui$addRecipeElement$lambda$lambda$lambda$lambda$lambda_0(closure$type, this$Gui, closure$uuid));
      return Unit;
    };
  }
  function Gui$addRecipeElement$lambda$lambda$lambda_1(closure$type, this$Gui, closure$uuid) {
    return function ($receiver) {
      button($receiver, void 0, void 0, void 0, void 0, void 0, Gui$addRecipeElement$lambda$lambda$lambda$lambda_2(closure$type, this$Gui, closure$uuid));
      return Unit;
    };
  }
  function Gui$addRecipeElement$lambda$lambda(closure$uuid, closure$type, this$Gui) {
    return function ($receiver) {
      set_id($receiver, closure$uuid + '-row');
      td($receiver, void 0, Gui$addRecipeElement$lambda$lambda$lambda(closure$type, closure$uuid, this$Gui));
      if (equals(closure$type, 'input') || equals(closure$type, 'output'))
        td($receiver, void 0, Gui$addRecipeElement$lambda$lambda$lambda_0(closure$uuid));
      td($receiver, void 0, Gui$addRecipeElement$lambda$lambda$lambda_1(closure$type, this$Gui, closure$uuid));
      return Unit;
    };
  }
  function Gui$addRecipeElement$lambda(closure$uuid, closure$type, this$Gui) {
    return function ($receiver) {
      tr($receiver, void 0, Gui$addRecipeElement$lambda$lambda(closure$uuid, closure$type, this$Gui));
      return Unit;
    };
  }
  Gui.prototype.addRecipeElement = function (type) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var uuid_0 = uuid();
    switch (type) {
      case 'input':
        this.addRecipeInputIds_0.add_11rb$(uuid_0);
        break;
      case 'output':
        this.addRecipeOutputIds_0.add_11rb$(uuid_0);
        break;
      case 'assembler':
        var $receiver = this.addRecipeAssemblerIds_0;
        var value = ensureNotNull(this.factoCal_0.getAssembler_61zpoe$(this.addRecipeAssemblerSelect_0.value));
        $receiver.put_xwzc9p$(uuid_0, value);
        break;
    }
    switch (type) {
      case 'input':
        tmp$_2 = Kotlin.isType(tmp$ = ensureNotNull(document.getElementById('addRecipeInput')), HTMLTableElement) ? tmp$ : throwCCE();
        break;
      case 'output':
        tmp$_2 = Kotlin.isType(tmp$_0 = ensureNotNull(document.getElementById('addRecipeOutput')), HTMLTableElement) ? tmp$_0 : throwCCE();
        break;
      case 'assembler':
        tmp$_2 = Kotlin.isType(tmp$_1 = ensureNotNull(document.getElementById('addRecipeAssembler')), HTMLTableElement) ? tmp$_1 : throwCCE();
        break;
      default:return;
    }
    var table = tmp$_2;
    append(table, Gui$addRecipeElement$lambda(uuid_0, type, this));
  };
  Gui.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Gui',
    interfaces: []
  };
  function ProcessingStep(output, rate, factoCal) {
    this.output = output;
    this.rate = rate;
    this.factoCal_0 = factoCal;
    this.recipes = this.factoCal_0.getRecipesByProduct_5kjtv9$(this.output);
    this.uuid = uuid();
    this.children = LinkedHashMap_init();
    this.currentRecipe = first(this.recipes);
    this.currentAssembler = first_0(this.currentRecipe.assembler);
  }
  Object.defineProperty(ProcessingStep.prototype, 'numberOfAssemblerNeeded', {
    get: function () {
      return this.rate / (ensureNotNull(this.currentRecipe.output.get_11rb$(this.output)) / this.currentRecipe.time * this.currentAssembler.speed);
    }
  });
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  Object.defineProperty(ProcessingStep.prototype, 'inputNeeded', {
    get: function () {
      var $receiver = this.currentRecipe.input;
      var destination = LinkedHashMap_init_0(mapCapacity($receiver.size));
      var tmp$;
      tmp$ = $receiver.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0 = destination.put_xwzc9p$;
        var tmp$_1 = element.key;
        var product = element.key;
        var amount = element.value;
        tmp$_0.call(destination, tmp$_1, to(amount * this.numberOfAssemblerNeeded * this.currentAssembler.speed, this.children.get_11rb$(product)));
      }
      return toMap_0(destination);
    }
  });
  Object.defineProperty(ProcessingStep.prototype, 'outputProduced', {
    get: function () {
      var $receiver = this.currentRecipe.output;
      var destination = LinkedHashMap_init_0(mapCapacity($receiver.size));
      var tmp$;
      tmp$ = $receiver.entries.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0 = destination.put_xwzc9p$;
        var tmp$_1 = element.key;
        var amount = element.value;
        tmp$_0.call(destination, tmp$_1, amount * this.numberOfAssemblerNeeded * this.currentAssembler.speed);
      }
      return destination;
    }
  });
  ProcessingStep.prototype.createMissingInputStep_5kjtv9$ = function (product) {
    var tmp$;
    var pair = this.inputNeeded.get_11rb$(product);
    if (pair != null && pair.second == null) {
      var $receiver = new ProcessingStep(product, pair.first, this.factoCal_0);
      var $receiver_0 = this.children;
      var pair_0 = to(product, this);
      $receiver_0.put_xwzc9p$(pair_0.first, pair_0.second);
      tmp$ = $receiver;
    }
     else
      tmp$ = null;
    return tmp$;
  };
  ProcessingStep.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ProcessingStep',
    interfaces: []
  };
  ProcessingStep.prototype.component1 = function () {
    return this.output;
  };
  ProcessingStep.prototype.component2 = function () {
    return this.rate;
  };
  ProcessingStep.prototype.component3_0 = function () {
    return this.factoCal_0;
  };
  ProcessingStep.prototype.copy_q2mghd$ = function (output, rate, factoCal) {
    return new ProcessingStep(output === void 0 ? this.output : output, rate === void 0 ? this.rate : rate, factoCal === void 0 ? this.factoCal_0 : factoCal);
  };
  ProcessingStep.prototype.toString = function () {
    return 'ProcessingStep(output=' + Kotlin.toString(this.output) + (', rate=' + Kotlin.toString(this.rate)) + (', factoCal=' + Kotlin.toString(this.factoCal_0)) + ')';
  };
  ProcessingStep.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.output) | 0;
    result = result * 31 + Kotlin.hashCode(this.rate) | 0;
    result = result * 31 + Kotlin.hashCode(this.factoCal_0) | 0;
    return result;
  };
  ProcessingStep.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.output, other.output) && Kotlin.equals(this.rate, other.rate) && Kotlin.equals(this.factoCal_0, other.factoCal_0)))));
  };
  function recipeOfJson(json, products, assemblerLib) {
    var jsonMap = mapOfJson(json);
    var name = ensureNotNull(jsonMap.get_11rb$('name'));
    var time = toDouble(ensureNotNull(jsonMap.get_11rb$('time')));
    var $receiver = mapOfJson(ensureNotNull(jsonMap.get_11rb$('inputs')));
    var destination = ArrayList_init_0($receiver.size);
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var name_0 = item.key;
      var amountStr = item.value;
      var destination_0 = ArrayList_init();
      var tmp$_1;
      tmp$_1 = products.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (equals(element.name, name_0))
          destination_0.add_11rb$(element);
      }
      var product = getOrNull(destination_0, 0);
      var amount = toIntOrNull(amountStr);
      tmp$_0.call(destination, product != null && amount != null ? to(product, amount) : null);
    }
    var inputs = toMap(requireNoNulls(destination));
    var $receiver_0 = mapOfJson(ensureNotNull(jsonMap.get_11rb$('outputs')));
    var destination_1 = ArrayList_init_0($receiver_0.size);
    var tmp$_2;
    tmp$_2 = $receiver_0.entries.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      var tmp$_3 = destination_1.add_11rb$;
      var name_1 = item_0.key;
      var amountStr_0 = item_0.value;
      var destination_2 = ArrayList_init();
      var tmp$_4;
      tmp$_4 = products.iterator();
      while (tmp$_4.hasNext()) {
        var element_0 = tmp$_4.next();
        if (equals(element_0.name, name_1))
          destination_2.add_11rb$(element_0);
      }
      var product_0 = getOrNull(destination_2, 0);
      var amount_0 = toIntOrNull(amountStr_0);
      tmp$_3.call(destination_1, product_0 != null && amount_0 != null ? to(product_0, amount_0) : null);
    }
    var outputs = toMap(requireNoNulls(destination_1));
    var $receiver_1 = listOfJson(ensureNotNull(jsonMap.get_11rb$('assembler')));
    var destination_3 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_5;
    tmp$_5 = $receiver_1.iterator();
    while (tmp$_5.hasNext()) {
      var item_1 = tmp$_5.next();
      var tmp$_6 = destination_3.add_11rb$;
      var destination_4 = ArrayList_init();
      var tmp$_7;
      tmp$_7 = assemblerLib.iterator();
      while (tmp$_7.hasNext()) {
        var element_1 = tmp$_7.next();
        if (equals(element_1.name, item_1))
          destination_4.add_11rb$(element_1);
      }
      tmp$_6.call(destination_3, getOrNull(destination_4, 0));
    }
    var assembler = toSet(requireNoNulls(destination_3));
    return new Recipe(name, inputs, outputs, assembler, time);
  }
  function factorioDBofJson(json) {
    var jsonMap = mapOfJson(json);
    var $receiver = listOfJson(ensureNotNull(jsonMap.get_11rb$('products')));
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(JSON.parse(item));
    }
    var products = requireNoNulls(destination);
    var $receiver_0 = listOfJson(ensureNotNull(jsonMap.get_11rb$('assembler')));
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      destination_0.add_11rb$(JSON.parse(item_0));
    }
    var assembler = requireNoNulls(destination_0);
    var $receiver_1 = listOfJson(ensureNotNull(jsonMap.get_11rb$('recipes')));
    var destination_1 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_1;
    tmp$_1 = $receiver_1.iterator();
    while (tmp$_1.hasNext()) {
      var item_1 = tmp$_1.next();
      destination_1.add_11rb$(recipeOfJson(item_1, products, assembler));
    }
    var recipes = requireNoNulls(destination_1);
    return new FactorioDB(products, assembler, recipes);
  }
  function toJson($receiver) {
    var tmp$ = to('name', $receiver.name);
    var tmp$_0 = to('time', $receiver.time.toString());
    var $receiver_0 = $receiver.input;
    var destination = ArrayList_init_0($receiver_0.size);
    var tmp$_1;
    tmp$_1 = $receiver_0.entries.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination.add_11rb$(to(item.key.name, item.value.toString()));
    }
    var tmp$_2 = to('inputs', toJson_2(destination));
    var $receiver_1 = $receiver.output;
    var destination_0 = ArrayList_init_0($receiver_1.size);
    var tmp$_3;
    tmp$_3 = $receiver_1.entries.iterator();
    while (tmp$_3.hasNext()) {
      var item_0 = tmp$_3.next();
      destination_0.add_11rb$(to(item_0.key.name, item_0.value.toString()));
    }
    var tmp$_4 = to('outputs', toJson_2(destination_0));
    var $receiver_2 = $receiver.assembler;
    var destination_1 = ArrayList_init_0(collectionSizeOrDefault($receiver_2, 10));
    var tmp$_5;
    tmp$_5 = $receiver_2.iterator();
    while (tmp$_5.hasNext()) {
      var item_1 = tmp$_5.next();
      destination_1.add_11rb$(item_1.name);
    }
    return toJson_1(mapOf([tmp$, tmp$_0, tmp$_2, tmp$_4, to('assembler', toJson_3(destination_1))]));
  }
  function toJson_0($receiver) {
    var $receiver_0 = $receiver.products;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(JSON.stringify(item));
    }
    var tmp$_0 = to('products', toJson_3(destination));
    var $receiver_1 = $receiver.assembler;
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_1;
    tmp$_1 = $receiver_1.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination_0.add_11rb$(JSON.stringify(item_0));
    }
    var tmp$_2 = to('assembler', toJson_3(destination_0));
    var $receiver_2 = $receiver.recipes;
    var destination_1 = ArrayList_init_0(collectionSizeOrDefault($receiver_2, 10));
    var tmp$_3;
    tmp$_3 = $receiver_2.iterator();
    while (tmp$_3.hasNext()) {
      var item_1 = tmp$_3.next();
      destination_1.add_11rb$(toJson(item_1));
    }
    return toJson_1(mapOf([tmp$_0, tmp$_2, to('recipes', toJson_3(destination_1))]));
  }
  function toJson_1($receiver) {
    var destination = ArrayList_init_0($receiver.size);
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.key + ':' + item.value);
    }
    return joinToString(destination, ',', '{', '}');
  }
  function toJson_2($receiver) {
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.first + ':' + item.second);
    }
    return joinToString(destination, ',', '{', '}');
  }
  function toJson_3($receiver) {
    return joinToString($receiver, ',', '[', ']');
  }
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var toBoxedChar = Kotlin.toBoxedChar;
  function mapOfJson(json) {
    var map = LinkedHashMap_init();
    var buffer = {v: StringBuilder_init()};
    var braceCounter = {v: 0};
    var qms = {v: false};
    var inKey = {v: true};
    var currentKey = {v: ''};
    var tmp$;
    var $receiver = removeSurrounding(trim(Kotlin.isCharSequence(tmp$ = json) ? tmp$ : throwCCE()).toString(), '{', '}');
    var tmp$_0;
    var tmp$_1;
    tmp$_1 = iterator(trim(Kotlin.isCharSequence(tmp$_0 = $receiver) ? tmp$_0 : throwCCE()).toString());
    while (tmp$_1.hasNext()) {
      var element = unboxChar(tmp$_1.next());
      var char = toBoxedChar(element);
      if (inKey.v) {
        if (unboxChar(char) === 34) {
          qms.v = !qms.v;
        }
         else if (qms.v || unboxChar(char) !== 58)
          buffer.v.append_s8itvh$(unboxChar(char));
        else {
          inKey.v = false;
          currentKey.v = buffer.v.toString();
          buffer.v = StringBuilder_init();
        }
      }
       else {
        if (unboxChar(char) === 34) {
          qms.v = !qms.v;
          buffer.v.append_s8itvh$(unboxChar(char));
        }
         else if (qms.v) {
          buffer.v.append_s8itvh$(unboxChar(char));
        }
         else if (unboxChar(char) === 123 || unboxChar(char) === 40 || unboxChar(char) === 91) {
          braceCounter.v = braceCounter.v + 1 | 0;
          buffer.v.append_s8itvh$(unboxChar(char));
        }
         else if (unboxChar(char) === 125 || unboxChar(char) === 41 || unboxChar(char) === 93) {
          braceCounter.v = braceCounter.v - 1 | 0;
          buffer.v.append_s8itvh$(unboxChar(char));
        }
         else if (braceCounter.v > 0 || unboxChar(char) !== 44)
          buffer.v.append_s8itvh$(unboxChar(char));
        else {
          inKey.v = true;
          var key = currentKey.v;
          var value = buffer.v.toString();
          map.put_xwzc9p$(key, value);
          buffer.v = StringBuilder_init();
        }
      }
    }
    var tmp$_2 = currentKey.v.length > 0;
    if (tmp$_2) {
      tmp$_2 = buffer.v.length > 0;
    }
    if (tmp$_2) {
      inKey.v = true;
      var key_0 = currentKey.v;
      var value_0 = buffer.v.toString();
      map.put_xwzc9p$(key_0, value_0);
      buffer.v = StringBuilder_init();
    }
    return map;
  }
  function listOfJson(json) {
    var list = ArrayList_init();
    var buffer = {v: StringBuilder_init()};
    var braceCounter = {v: 0};
    var qms = {v: false};
    var tmp$;
    var $receiver = removeSurrounding(trim(Kotlin.isCharSequence(tmp$ = json) ? tmp$ : throwCCE()).toString(), '[', ']');
    var tmp$_0;
    var tmp$_1;
    tmp$_1 = iterator(trim(Kotlin.isCharSequence(tmp$_0 = $receiver) ? tmp$_0 : throwCCE()).toString());
    while (tmp$_1.hasNext()) {
      var element = unboxChar(tmp$_1.next());
      var char = toBoxedChar(element);
      if (unboxChar(char) === 34) {
        qms.v = !qms.v;
        buffer.v.append_s8itvh$(unboxChar(char));
      }
       else if (qms.v) {
        buffer.v.append_s8itvh$(unboxChar(char));
      }
       else if (unboxChar(char) === 123 || unboxChar(char) === 40 || unboxChar(char) === 91) {
        braceCounter.v = braceCounter.v + 1 | 0;
        buffer.v.append_s8itvh$(unboxChar(char));
      }
       else if (unboxChar(char) === 125 || unboxChar(char) === 41 || unboxChar(char) === 93) {
        braceCounter.v = braceCounter.v - 1 | 0;
        buffer.v.append_s8itvh$(unboxChar(char));
      }
       else if (braceCounter.v > 0 || unboxChar(char) !== 44)
        buffer.v.append_s8itvh$(unboxChar(char));
      else {
        var element_0 = removeSurrounding_0(buffer.v.toString(), '"');
        list.add_11rb$(element_0);
        buffer.v = StringBuilder_init();
      }
    }
    if (buffer.v.length > 0) {
      var element_1 = buffer.v.toString();
      list.add_11rb$(element_1);
    }
    return list;
  }
  function Assembler(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  Assembler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Assembler',
    interfaces: []
  };
  Assembler.prototype.component1 = function () {
    return this.name;
  };
  Assembler.prototype.component2 = function () {
    return this.speed;
  };
  Assembler.prototype.copy_9sobi5$ = function (name, speed) {
    return new Assembler(name === void 0 ? this.name : name, speed === void 0 ? this.speed : speed);
  };
  Assembler.prototype.toString = function () {
    return 'Assembler(name=' + Kotlin.toString(this.name) + (', speed=' + Kotlin.toString(this.speed)) + ')';
  };
  Assembler.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.speed) | 0;
    return result;
  };
  Assembler.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.speed, other.speed)))));
  };
  function Product(name) {
    this.name = name;
  }
  Product.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Product',
    interfaces: []
  };
  Product.prototype.component1 = function () {
    return this.name;
  };
  Product.prototype.copy_61zpoe$ = function (name) {
    return new Product(name === void 0 ? this.name : name);
  };
  Product.prototype.toString = function () {
    return 'Product(name=' + Kotlin.toString(this.name) + ')';
  };
  Product.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  Product.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function Recipe(name, input, output, assembler, time) {
    this.name = name;
    this.input = input;
    this.output = output;
    this.assembler = assembler;
    this.time = time;
  }
  Recipe.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Recipe',
    interfaces: []
  };
  Recipe.prototype.component1 = function () {
    return this.name;
  };
  Recipe.prototype.component2 = function () {
    return this.input;
  };
  Recipe.prototype.component3 = function () {
    return this.output;
  };
  Recipe.prototype.component4 = function () {
    return this.assembler;
  };
  Recipe.prototype.component5 = function () {
    return this.time;
  };
  Recipe.prototype.copy_cttdsi$ = function (name, input, output, assembler, time) {
    return new Recipe(name === void 0 ? this.name : name, input === void 0 ? this.input : input, output === void 0 ? this.output : output, assembler === void 0 ? this.assembler : assembler, time === void 0 ? this.time : time);
  };
  Recipe.prototype.toString = function () {
    return 'Recipe(name=' + Kotlin.toString(this.name) + (', input=' + Kotlin.toString(this.input)) + (', output=' + Kotlin.toString(this.output)) + (', assembler=' + Kotlin.toString(this.assembler)) + (', time=' + Kotlin.toString(this.time)) + ')';
  };
  Recipe.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.input) | 0;
    result = result * 31 + Kotlin.hashCode(this.output) | 0;
    result = result * 31 + Kotlin.hashCode(this.assembler) | 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    return result;
  };
  Recipe.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.input, other.input) && Kotlin.equals(this.output, other.output) && Kotlin.equals(this.assembler, other.assembler) && Kotlin.equals(this.time, other.time)))));
  };
  function uuid() {
    var tmp$;
    return typeof (tmp$ = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 3 | 8;
      return v.toString(16);
    })) === 'string' ? tmp$ : throwCCE();
  }
  function removeAllChildren($receiver) {
    while ($receiver.hasChildNodes())
      $receiver.removeChild(ensureNotNull($receiver.lastChild));
  }
  function fit($receiver) {
    $receiver.style.height = $receiver.scrollHeight.toString() + 'px';
    $receiver.style.width = $receiver.scrollWidth.toString() + 'px';
  }
  _.FactoCal = FactoCal;
  _.FactorioDB = FactorioDB;
  _.Gui = Gui;
  _.ProcessingStep = ProcessingStep;
  var package$json = _.json || (_.json = {});
  package$json.factorioDBofJson_61zpoe$ = factorioDBofJson;
  package$json.toJson_sl8vaf$ = toJson;
  package$json.toJson_smu7p8$ = toJson_0;
  package$json.toJson_alv72w$ = toJson_1;
  package$json.toJson_ye33rp$ = toJson_2;
  package$json.toJson_d2950k$ = toJson_3;
  package$json.mapOfJson_61zpoe$ = mapOfJson;
  package$json.listOfJson_61zpoe$ = listOfJson;
  var package$objects = _.objects || (_.objects = {});
  package$objects.Assembler = Assembler;
  package$objects.Product = Product;
  package$objects.Recipe = Recipe;
  _.uuid = uuid;
  _.removeAllChildren_ejp6nk$ = removeAllChildren;
  _.fit_1724az$ = fit;
  Kotlin.defineModule('factocal', _);
  return _;
});
