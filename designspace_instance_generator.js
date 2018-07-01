
// Prints out some XML for generating design space instances

const xInstances = 40;
const yInstances = 40;

const familyName = "MutatorMathTest"
const fileName = "instances/MutatorMathTest-Style_4.ufo"

for (var x = 0; x <= xInstances; x++) { 
	for (var y = 0; y <= yInstances; y++) { 

		var template = `<instance familyname=familyName filename=fileName stylename="` + `_` + (weightVal * x) + `_` + (widthVal * y) + `">
		    <location>
		        <dimension name="width" xvalue="` + weightVal * x + `" />
		        <dimension name="weight" xvalue="` + widthVal * y + `" />
		    </location>
		    <kerning />
		    <info />
		</instance>`;
	
		console.log(template);
	}
}