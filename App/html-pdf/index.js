const fs = require('fs')
const pdf = require('html-pdf')
const html = `<h1 style="text-align:center; color:red">kosomk</h1>`
//const html = fs.readFileSync('./src/Lease Template.html', 'utf8')
const options = { format: 'A4' , orientation: "portrait"}
 
function pdfcreator(){
pdf.create(html, options).toFile('./test.pdf', function(err, res) {
  if (err) return console.log("error is : ",err)
  console.log("done : ",res);
});
}
document.querySelector("#pdf-upload").addEventListener("change", function(e){
	var canvasElement = document.querySelector("canvas")
	var file = e.target.files[0]
	if(file.type != "application/pdf"){
		console.error(file.name, "is not a pdf file.")
		return
	}
	
	var fileReader = new FileReader();  

	fileReader.onload = function() {
		var typedarray = new Uint8Array(this.result);

		PDFJS.getDocument(typedarray).then(function(pdf) {
			// you can now use *pdf* here
			console.log("the pdf has ",pdf.numPages, "page(s).")
			pdf.getPage(pdf.numPages).then(function(page) {
				// you can now use *page* here
				var viewport = page.getViewport(2.0);
				var canvas = document.querySelector("canvas")
				canvas.height = viewport.height;
				canvas.width = viewport.width;


				page.render({
					canvasContext: canvas.getContext('2d'),
					viewport: viewport
				});
			});

		});
	};

  fileReader.readAsArrayBuffer(file);
  console.log(file)
})