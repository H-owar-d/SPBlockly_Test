//hub8735bit 積木類型
//有下拉式
Blockly.Blocks['hub8735bit_blockly'] = {
  init: function() {
    this.appendDummyInput()
	    .appendField(Blockly.Msg["HUB_BLOCKLY_TEST"])
	    
			this.setInputsInline(true);
			this.setOutput(true);	
	    this.setColour(300);	
	  }
};

Blockly.Blocks['delay_custom'] = {
  init: function() {
  		this.appendValueInput("DELAY_TIME")
    		.setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.HUB_BLOCKLY_DELAYMS);
	    
			this.setInputsInline(false);
			this.setOutput(false);
			this.setPreviousStatement(true, null);
    	this.setNextStatement(true, null);   
	    this.setColour(90);	
	  }
};

Blockly.Blocks['delayMicroseconds_custom'] = {
  init: function() {
	    this.appendValueInput("DELAY_TIME")
    		.setCheck("Number")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField(Blockly.Msg.HUB_BLOCKLY_DELAYUS);
			this.setInputsInline(false);
			this.setOutput(false);	
			this.setPreviousStatement(true, null);
    	this.setNextStatement(true, null);   
	    this.setColour(90);	
	  }
};

Blockly.Blocks.hub8735bit_buzzer={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB_BUZZER_PIN);
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB_BUZZER_FREQUENCY)
			.appendField(new Blockly.FieldDropdown([
				["    [0]","0"],
				["B 0 [31]","31"],
				["C 1 [33]","33"],
				["C# 1 [35]","35"],
				["D 1 [37]","37"],
				["D# 1 [39]","39"],
				["E 1 [41]","41"],
				["F 1 [44]","44"],
				["F# 1 [46]","46"],
				["G 1 [49]","49"],
				["G# 1 [52]","52"],
				["A 1 [55]","55"],
				["A# 1 [58]","58"],
				["B 1 [62]","62"],
				["C 2 [65]","65"],
				["C# 2 [69]","69"],
				["D 2 [73]","73"],
				["D# 2 [78]","78"],
				["E 2 [82]","82"],
				["F 2 [87]","87"],
				["F# 2 [93]","93"],
				["G 2 [98]","98"],
				["G# 2 [104]","104"],
				["A 2 [110]","110"],
				["A# 2 [117]","117"],				
				["B 2 [123]","123"],
				["C 3 [131]","131"],
				["C# 3 [139]","139"],
				["D 3 [147]","147"],
				["D# 3 [156]","156"],
				["E 3 [165]","165"],
				["F 3 [175]","175"],
				["F# 3 [185]","185"],
				["G 3 [196]","196"],
				["G# 3 [208]","208"],
				["A 3 [220]","220"],
				["A# 3 [233]","233"],
				["B 3 [247]","247"],
				["C 4 [262]","262"],
				["C# 4 [277]","277"],
				["D 4 [294]","294"],
				["D# 4 [311]","311"],
				["E 4 [330]","330"],
				["F 4 [349]","349"],
				["F# 4 [370]","370"],
				["G 4 [392]","392"],
				["G# 4 [415]","415"],
				["A 4 [440]","440"],
				["A# 4 [466]","466"],
				["B 4 [494]","494"],
				["C 5 [523]","523"],
				["C# 5 [554]","554"],
				["D 5 [587]","587"],
				["D# 5 [622]","622"],
				["E 5 [659]","659"],
				["F 5 [698]","698"],
				["F# 5 [740]","740"],
				["G 5 [784]","784"],
				["G# 5 [831]","831"],
				["A 5 [880]","880"],
				["A# 5 [932]","932"],
				["B 5 [988]","988"],			
				["C 6 [1047]","1047"],
				["C# 6 [1109]","1109"],
				["D 6 [1175]","1175"],
				["D# 6 [1245]","1245"],
				["E 6 [1319]","1319"],
				["F 6 [1397]","1397"],
				["F# 6 [1480]","1480"],
				["G 6 [1568]","1568"],
				["G# 6 [1661]","1661"],
				["A 6 [1760]","1760"],
				["A# 6 [1864]","1864"],
				["B 6 [1975]","1975"],
				["C 7 [2093]","2093"],
				["C# 7 [2218]","2218"],
				["D 7 [2349]","2349"],
				["D# 7 [2489]","2489"],
				["E 7 [2637]","2637"],
				["F 7 [2794]","2794"],
				["F# 7 [2960]","2960"],
				["G 7 [3136]","3136"],
				["G# 7 [3322]","3322"],
				["A 7 [3520]","3520"],
				["A# 7 [3729]","3729"],
				["B 7 [3951]","3951"],
				["C 8 [4186]","4186"],
				["C# 8 [4435]","4435"],
				["D 8 [4699]","4699"],
				["D# 8 [4978]","4978"],
				["E 8 [5274]","5274"],
				["F 8 [5588]","5588"],
				["F# 8 [5920]","5920"],
				["G 8 [6272]","6272"],
				["G# 8 [6645]","6645"],
				["A 8 [7040]","7040"],
				["A# 8 [7459]","7459"],
				["B 8 [7902]","7902"]				
			]),"frequency");
		this.appendValueInput("delaytime")
			.setCheck(null)
			.appendField(Blockly.Msg.HUB_BUZZER_DELAYTIME);
				
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setColour(120);			
	}
};

Blockly.Blocks.hub8735bit_buzzer1={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB_BUZZER_PIN);
		this.appendValueInput("frequency")
			.setCheck(null)
			.appendField(Blockly.Msg.HUB_BUZZER_FREQUENCY);
		this.appendValueInput("delaytime")
			.setCheck(null)
			.appendField(Blockly.Msg.HUB_BUZZER_DELAYTIME);				
		this.setInputsInline(true);
		this.setPreviousStatement(true,null);
		this.setNextStatement(true,null);
		this.setHelpUrl("https://zh.wikipedia.org/wiki/%E9%9F%B3%E9%AB%98");
		this.setColour(120);			
	}
};

Blockly.Blocks.hub8735bit_buzzer_tone1={
	init:function(){
		this.appendDummyInput()
			.appendField(Blockly.Msg.HUB_BUZZER_FREQUENCY)
			.appendField(new Blockly.FieldDropdown([
				["    [0]","0"],
				["B 0 [31]","31"],
				["C 1 [33]","33"],
				["C# 1 [35]","35"],
				["D 1 [37]","37"],
				["D# 1 [39]","39"],
				["E 1 [41]","41"],
				["F 1 [44]","44"],
				["F# 1 [46]","46"],
				["G 1 [49]","49"],
				["G# 1 [52]","52"],
				["A 1 [55]","55"],
				["A# 1 [58]","58"],
				["B 1 [62]","62"],
				["C 2 [65]","65"],
				["C# 2 [69]","69"],
				["D 2 [73]","73"],
				["D# 2 [78]","78"],
				["E 2 [82]","82"],
				["F 2 [87]","87"],
				["F# 2 [93]","93"],
				["G 2 [98]","98"],
				["G# 2 [104]","104"],
				["A 2 [110]","110"],
				["A# 2 [117]","117"],				
				["B 2 [123]","123"],
				["C 3 [131]","131"],
				["C# 3 [139]","139"],
				["D 3 [147]","147"],
				["D# 3 [156]","156"],
				["E 3 [165]","165"],
				["F 3 [175]","175"],
				["F# 3 [185]","185"],
				["G 3 [196]","196"],
				["G# 3 [208]","208"],
				["A 3 [220]","220"],
				["A# 3 [233]","233"],
				["B 3 [247]","247"],
				["C 4 [262]","262"],
				["C# 4 [277]","277"],
				["D 4 [294]","294"],
				["D# 4 [311]","311"],
				["E 4 [330]","330"],
				["F 4 [349]","349"],
				["F# 4 [370]","370"],
				["G 4 [392]","392"],
				["G# 4 [415]","415"],
				["A 4 [440]","440"],
				["A# 4 [466]","466"],
				["B 4 [494]","494"],
				["C 5 [523]","523"],
				["C# 5 [554]","554"],
				["D 5 [587]","587"],
				["D# 5 [622]","622"],
				["E 5 [659]","659"],
				["F 5 [698]","698"],
				["F# 5 [740]","740"],
				["G 5 [784]","784"],
				["G# 5 [831]","831"],
				["A 5 [880]","880"],
				["A# 5 [932]","932"],
				["B 5 [988]","988"],			
				["C 6 [1047]","1047"],
				["C# 6 [1109]","1109"],
				["D 6 [1175]","1175"],
				["D# 6 [1245]","1245"],
				["E 6 [1319]","1319"],
				["F 6 [1397]","1397"],
				["F# 6 [1480]","1480"],
				["G 6 [1568]","1568"],
				["G# 6 [1661]","1661"],
				["A 6 [1760]","1760"],
				["A# 6 [1864]","1864"],
				["B 6 [1975]","1975"],
				["C 7 [2093]","2093"],
				["C# 7 [2218]","2218"],
				["D 7 [2349]","2349"],
				["D# 7 [2489]","2489"],
				["E 7 [2637]","2637"],
				["F 7 [2794]","2794"],
				["F# 7 [2960]","2960"],
				["G 7 [3136]","3136"],
				["G# 7 [3322]","3322"],
				["A 7 [3520]","3520"],
				["A# 7 [3729]","3729"],
				["B 7 [3951]","3951"],
				["C 8 [4186]","4186"],
				["C# 8 [4435]","4435"],
				["D 8 [4699]","4699"],
				["D# 8 [4978]","4978"],
				["E 8 [5274]","5274"],
				["F 8 [5588]","5588"],
				["F# 8 [5920]","5920"],
				["G 8 [6272]","6272"],
				["G# 8 [6645]","6645"],
				["A 8 [7040]","7040"],
				["A# 8 [7459]","7459"],
				["B 8 [7902]","7902"]				
			]),"frequency");
		this.setInputsInline(true);
		this.setOutput(true);
		this.setColour(120);			
	}
};