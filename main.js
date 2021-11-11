value = "";

function setup()
{
  canvas = createCanvas(400,300);
  canvas.center();
}

function start()
{
   objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
   document.getElementById("status").innerHTML = "Status : Detecting Objects";
   document.getElementById("form_control").value;
}

function modelLoaded()
{
  console.log("Model loaded!")
}

function draw()
{
    image(video, 0, 0, 480, 380);

    if (object[i].label == object_name)
    {
        objectDetector.detect(gotResult);
        for(i=0; i < objects.length; i++)
         document.getElementById("status").innerHTML = "Status : Detecting Objects";
         document.getElementById("object_name").innerHTML = objetc_name + "Found";

         fill("#0000FF");
         percent = floor(objects[i].confidence* 100);
         text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
         noFill();
         stroke("#FF0000");
         rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}

function gotResult(error, results)
{
 if (error)
{
   console.log(error);
}
   console.log(results);
   objects = results;
}


