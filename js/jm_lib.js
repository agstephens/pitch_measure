var ids = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
var labels = ['Length (A)', 'Width (B)', 'Corner to box (C)', 'Box width (D)', 'Box from goal (E)', 'To pen spot (F)', 'Side to centre (G)', 'Half diag (H)', 'Quarter diag (I)', 'Box diag (J)', 'Box half diag (K)'];

var m9v9 = [80.0, 50.0, 9.0, 32.0, 13.0, 9.0, 25.0, 64.0, 47.2, 34.5, 20.6];
var m7v7 = [60.0, 40.0, 11.0, 18.0, 10.0, 8.0, 20.0, 50.0, 36.1, 20.6, 13.5];

var scaled = [0,0,0,0,0,0,0,0,0,0,0];
var round_dp = 2;

var inputs = null;

function emptyAll(id) {
    
    for (var i=0; i<ids.length; i++) {
        var item = ids[i];
        
        if (item != id) {
            $("#input_" + item).val(""); 
        }
        
        $("#result_" + item).html("");
    }    
}

function update(id) {
    
    emptyAll(id);
    var scale_factor = 1;

    for (var i=0; i<ids.length; i++) {
        var item = ids[i];
        console.log(item, id);
        
        if (item == id) {
            var value = inputs[i];
            scale_factor = parseFloat($("#input_" + id).val()) / value;
            break
        }
    }

    for (var i=0; i<ids.length; i++) {
        var item = ids[i];
        
        scaled[i] = scale_factor * inputs[i];
        $("#result_" + item).html(Math.round(scaled[i], round_dp));
        
    }    
}

function renderTableContent() {

    for (var i=0; i<ids.length; i++) {
        var html = '<tr><td class="col1">' + labels[i] + '</td><td id="' + ids[i] + '">' + inputs[i] + '</td>';
        html += '<td><input onChange=\'update("' + ids[i] + '");\' class="input_box" type="text" ';
        html += 'id="input_' + ids[i] + '" name="input_' + ids[i] + '">';
        html += '</input></td><td id="result_' + ids[i] + '"></td></tr>';
        $("#main_table").append(html);
    }   
}