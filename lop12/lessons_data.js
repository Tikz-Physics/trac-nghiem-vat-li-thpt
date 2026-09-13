const lessonsData = {
  "1": [
    {
      "type": "mcq",
      "q": "Theo mô hình động học phân tử về cấu trúc của chất, tính chất nào sau đây là đặc trưng cơ bản nhất của thể khí so với thể lỏng và thể rắn?",
      "opts": [
        "Các phân tử ở rất xa nhau, lực tương tác phân tử rất yếu, chuyển động hoàn toàn hỗn loạn chiếm toàn bộ thể tích bình chứa.",
        "Các phân tử chỉ dao động nhiệt xung quanh các vị trí cân bằng cố định xác định.",
        "Chất khí có thể tích riêng xác định nhưng hình dạng hoàn toàn phụ thuộc vào bình chứa.",
        "Khoảng cách giữa các phân tử khí xấp xỉ bằng kích thước của chính các phân tử đó."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Bản chất vật lí:</b> Ở thể khí, khoảng cách giữa các phân tử rất lớn (gấp hàng chục lần kích thước phân tử), do đó lực tương tác phân tử là rất yếu.<br>• Các phân tử khí chuyển động hỗn loạn không ngừng về mọi phía và chiếm toàn bộ dung tích của bình chứa khí.",
      "svgGraph": "<svg viewBox=\"0 0 460 220\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <radialGradient id=\"solG\" cx=\"35%\" cy=\"35%\" r=\"65%\"><stop offset=\"0%\" stop-color=\"#38bdf8\"/><stop offset=\"100%\" stop-color=\"#0284c7\"/></radialGradient>\n    <radialGradient id=\"liqG\" cx=\"35%\" cy=\"35%\" r=\"65%\"><stop offset=\"0%\" stop-color=\"#34d399\"/><stop offset=\"100%\" stop-color=\"#059669\"/></radialGradient>\n    <radialGradient id=\"gasG\" cx=\"35%\" cy=\"35%\" r=\"65%\"><stop offset=\"0%\" stop-color=\"#f43f5e\"/><stop offset=\"100%\" stop-color=\"#be123c\"/></radialGradient>\n    <filter id=\"glow\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"140%\"><feGaussianBlur stdDeviation=\"3\" result=\"blur\"/><feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/></filter>\n  </defs>\n  <!-- Box Solid -->\n  <rect x=\"15\" y=\"30\" width=\"130\" height=\"150\" rx=\"10\" fill=\"rgba(2,132,199,0.12)\" stroke=\"#0284c7\" stroke-width=\"1.8\"/>\n  <text x=\"80\" y=\"200\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"700\">THỂ RẮN</text>\n  <text x=\"80\" y=\"214\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\">Trật tự, dao động tại chỗ</text>\n  <!-- 16 Solid molecules orderly -->\n  <g fill=\"url(#solG)\">\n    <circle cx=\"45\" cy=\"65\" r=\"9\"/><circle cx=\"68\" cy=\"65\" r=\"9\"/><circle cx=\"91\" cy=\"65\" r=\"9\"/><circle cx=\"114\" cy=\"65\" r=\"9\"/>\n    <circle cx=\"45\" cy=\"90\" r=\"9\"/><circle cx=\"68\" cy=\"90\" r=\"9\"/><circle cx=\"91\" cy=\"90\" r=\"9\"/><circle cx=\"114\" cy=\"90\" r=\"9\"/>\n    <circle cx=\"45\" cy=\"115\" r=\"9\"/><circle cx=\"68\" cy=\"115\" r=\"9\"/><circle cx=\"91\" cy=\"115\" r=\"9\"/><circle cx=\"114\" cy=\"115\" r=\"9\"/>\n    <circle cx=\"45\" cy=\"140\" r=\"9\"/><circle cx=\"68\" cy=\"140\" r=\"9\"/><circle cx=\"91\" cy=\"140\" r=\"9\"/><circle cx=\"114\" cy=\"140\" r=\"9\"/>\n  </g>\n  <!-- Box Liquid -->\n  <rect x=\"165\" y=\"30\" width=\"130\" height=\"150\" rx=\"10\" fill=\"rgba(5,150,105,0.12)\" stroke=\"#059669\" stroke-width=\"1.8\"/>\n  <text x=\"230\" y=\"200\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"13\" font-weight=\"700\">THỂ LỎNG</text>\n  <text x=\"230\" y=\"214\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\">Sát nhau, trượt tự do</text>\n  <g fill=\"url(#liqG)\">\n    <circle cx=\"190\" cy=\"100\" r=\"9\"/><circle cx=\"215\" cy=\"95\" r=\"9\"/><circle cx=\"240\" cy=\"105\" r=\"9\"/><circle cx=\"265\" cy=\"98\" r=\"9\"/>\n    <circle cx=\"195\" cy=\"125\" r=\"9\"/><circle cx=\"225\" cy=\"128\" r=\"9\"/><circle cx=\"250\" cy=\"132\" r=\"9\"/><circle cx=\"270\" cy=\"122\" r=\"9\"/>\n    <circle cx=\"185\" cy=\"155\" r=\"9\"/><circle cx=\"210\" cy=\"158\" r=\"9\"/><circle cx=\"238\" cy=\"155\" r=\"9\"/><circle cx=\"262\" cy=\"152\" r=\"9\"/>\n  </g>\n  <!-- Box Gas -->\n  <rect x=\"315\" y=\"30\" width=\"130\" height=\"150\" rx=\"10\" fill=\"rgba(190,18,60,0.12)\" stroke=\"#be123c\" stroke-width=\"1.8\"/>\n  <text x=\"380\" y=\"200\" text-anchor=\"middle\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"700\">THỂ KHÍ</text>\n  <text x=\"380\" y=\"214\" text-anchor=\"middle\" fill=\"#94a3b8\" font-size=\"10\">Ở rất xa nhau, hỗn loạn</text>\n  <g fill=\"url(#gasG)\">\n    <circle cx=\"340\" cy=\"55\" r=\"8\"/><line x1=\"340\" y1=\"55\" x2=\"355\" y2=\"70\" stroke=\"#f43f5e\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"/>\n    <circle cx=\"415\" cy=\"70\" r=\"8\"/><line x1=\"415\" y1=\"70\" x2=\"395\" y2=\"85\" stroke=\"#f43f5e\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"/>\n    <circle cx=\"360\" cy=\"115\" r=\"8\"/><line x1=\"360\" y1=\"115\" x2=\"375\" y2=\"135\" stroke=\"#f43f5e\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"/>\n    <circle cx=\"420\" cy=\"145\" r=\"8\"/><line x1=\"420\" y1=\"145\" x2=\"400\" y2=\"135\" stroke=\"#f43f5e\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"/>\n    <circle cx=\"345\" cy=\"160\" r=\"8\"/><line x1=\"345\" y1=\"160\" x2=\"330\" y2=\"145\" stroke=\"#f43f5e\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"/>\n  </g>\n</svg>"
    },
    {
      "type": "mcq",
      "q": "Điểm khác biệt căn bản nhất về mặt cấu trúc và tính chất vật lí giữa chất rắn kết tinh và chất rắn vô định hình là:",
      "opts": [
        "Chất rắn kết tinh có cấu trúc mạng tinh thể và có nhiệt độ nóng chảy xác định, còn chất rắn vô định hình không có nhiệt độ nóng chảy xác định.",
        "Chất rắn kết tinh luôn dẫn điện tốt hơn chất rắn vô định hình trong mọi điều kiện.",
        "Chất rắn vô định hình có hình dạng hình học xác định khi bị nung nóng.",
        "Chất rắn kết tinh có tính đẳng hướng đối với mọi tính chất vật lí."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Chất rắn kết tinh:</b> Các hạt liên kết theo một trật tự tuần hoàn hình học gọi là <i>mạng tinh thể</i>, có <b>nhiệt độ nóng chảy hoàn toàn xác định</b> (ở áp suất chuẩn).<br>• <b>Chất rắn vô định hình</b> (như thủy tinh, nhựa đường): Không có cấu trúc mạng tuần hoàn, khi bị đốt nóng sẽ mềm dần rồi chuyển sang lỏng, <b>không có nhiệt độ nóng chảy xác định</b>."
    },
    {
      "type": "mcq",
      "q": "Hiện tượng nào sau đây là minh chứng thực tế rõ nét nhất cho sự thăng hoa (chuyển trực tiếp từ thể rắn sang thể khí mà không qua thể lỏng)?",
      "opts": [
        "Viên băng phiến (long não) đặt trong tủ quần áo có kích thước nhỏ dần sau một thời gian.",
        "Giọt sương đọng trên lá cây tan biến khi mặt trời lên cao.",
        "Cục nước đá tan chảy thành nước trong cốc thủy tinh.",
        "Nước sôi trong ấm tạo thành làn khói trắng bốc lên."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Thăng hoa</b> là quá trình một chất chuyển trực tiếp từ <b>thể rắn sang thể khí</b> mà không trải qua thể lỏng.<br>• Viên băng phiến (long não) hoặc đá khô (CO₂ rắn) tự biến đổi trực tiếp thành hơi lan tỏa trong không khí chính là hiện tượng thăng hoa."
    },
    {
      "type": "tf",
      "q": "Khi khảo sát mô hình cấu trúc phân tử và sự chuyển thể của nước, hãy xác định tính Đúng/Sai của từng nhận định sau:",
      "stmts": [
        "Ở thể lỏng, các phân tử nước ở gần nhau hơn ở thể khí và có lực tương tác phân tử lớn hơn ở thể khí.",
        "Sự bay hơi của nước chỉ diễn ra ở nhiệt độ sôi 100°C tại mặt thoáng chất lỏng.",
        "Trong suốt quá trình nước đá tinh khiết đang nóng chảy ở áp suất 1 atm, nhiệt độ của hệ luôn duy trì ổn định ở 0°C.",
        "Sự sôi là quá trình hoá hơi đặc biệt xảy ra đồng thời ở cả trong lòng và trên bề mặt chất lỏng."
      ],
      "ans": [
        true,
        false,
        true,
        true
      ],
      "correctText": "a) Đúng | b) Sai | c) Đúng | d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> Thể lỏng có mật độ phân tử dày đặc hơn khí, lực tương tác phân tử lớn hơn nhiều so với thể khí.<br>• <b>Ý b [Sai]:</b> Sự bay hơi diễn ra ở <i>mọi nhiệt độ</i> trên bề mặt thoáng của chất lỏng, không nhất thiết phải đạt 100°C.<br>• <b>Ý c [Đúng]:</b> Nước đá là chất rắn kết tinh, trong suốt thời gian nóng chảy ở áp suất chuẩn, nhiệt độ không đổi ở 0°C.<br>• <b>Ý d [Đúng]:</b> Định nghĩa chuẩn SGK: Sự sôi là sự hoá hơi xảy ra cả ở bên trong lòng chất lỏng và trên mặt thoáng."
    },
    {
      "type": "match",
      "q": "Ghép từng hiện tượng thực tiễn trong đời sống (Cột A) với tên quá trình chuyển thể tương ứng của chất (Cột B):",
      "colA": [
        "Sương mù xuất hiện vào sáng sớm mùa đông rồi tan dần khi mặt trời lên",
        "Viên nước đá khô (CO₂ rắn) bốc khói mịt mù trong các hiệu ứng sân khấu",
        "Nghề làm muối thủ công trên các cánh đồng muối ven biển",
        "Quá trình đúc tượng đồng hoặc chuông đồng trong các làng nghề truyền thống"
      ],
      "colB": [
        "Sự thăng hoa (Rắn chuyển trực tiếp thành Khí)",
        "Sự ngưng tụ của hơi nước trong khí quyển",
        "Sự nóng chảy kim loại rồi đông đặc trong khuôn đúc",
        "Sự bay hơi của nước dưới tác dụng của nhiệt và gió"
      ],
      "ans": [
        1,
        0,
        3,
        2
      ],
      "correctText": "1 - B | 2 - A | 3 - D | 4 - C",
      "exp": "• <b>1 ghép B:</b> Hơi nước trong không khí gặp lạnh ngưng tụ thành hạt sương li ti.<br>• <b>2 ghép A:</b> CO₂ rắn thăng hoa trực tiếp thành khí CO₂ lạnh làm ngưng tụ hơi ẩm không khí tạo khói trắng.<br>• <b>3 ghép D:</b> Nước biển dưới nắng gió bay hơi để lại muối kết tinh trên ruộng.<br>• <b>4 ghép C:</b> Nung đồng nóng chảy rót vào khuôn, sau đó nguội đông đặc thành tượng."
    },
    {
      "type": "drag",
      "q": "Chọn từ khóa trong khung và chạm vào ô trống tương ứng để hoàn thiện nội dung mô hình động học phân tử chất:",
      "text": "Các chất được cấu tạo từ các [blank] riêng biệt. Các phân tử chuyển động [blank] không ngừng. Nhiệt độ của vật càng cao thì tốc độ chuyển động nhiệt của các phân tử càng [blank]. Giữa các phân tử đồng thời tồn tại lực [blank] và lực đẩy.",
      "words": [
        "phân tử",
        "nguyên tố",
        "hỗn loạn",
        "tuần hoàn",
        "lớn",
        "nhỏ",
        "hút"
      ],
      "ans": [
        0,
        2,
        4,
        6
      ],
      "correctText": "1: phân tử | 2: hỗn loạn | 3: lớn | 4: hút",
      "exp": "<b>Nội dung thuyết động học phân tử:</b><br>1. Các chất cấu tạo từ các hạt riêng biệt gọi là phân tử.<br>2. Các phân tử chuyển động hỗn loạn không ngừng; nhiệt độ càng cao chuyển động càng nhanh.<br>3. Giữa các phân tử đồng thời có lực tương tác gồm cả lực hút và lực đẩy."
    },
    {
      "type": "mcq",
      "q": "Biết khối lượng mol của nước là 18 g/mol và số Avogadro N<sub>A</sub> = 6,022 × 10²³ mol⁻¹. Số lượng phân tử nước chứa trong một cốc nước có thể tích V = 180 cm³ (biết khối lượng riêng của nước là D = 1 g/cm³) là:",
      "opts": [
        "6,022 × 10²⁴ phân tử",
        "6,022 × 10²³ phân tử",
        "1,084 × 10²⁵ phân tử",
        "3,345 × 10²³ phân tử"
      ],
      "ans": 0,
      "correctText": "Đáp án A (6,022 × 10²⁴ phân tử)",
      "exp": "• Khối lượng nước trong cốc:<div class='formula-box'><span class='math-sym'>m = D · V = 1 × 180 = 180 g</span></div>• Số mol nước:<div class='formula-box'><span class='math-sym'>n = <div class='fraction'><span class='numerator'>m</span><span class='denominator'>M</span></div> = <div class='fraction'><span class='numerator'>180</span><span class='denominator'>18</span></div> = 10 mol</span></div>• Số phân tử nước:<div class='formula-box'><span class='math-sym'>N = n · N<sub>A</sub> = 10 × 6,022 × 10²³ = 6,022 × 10²⁴ phân tử</span></div>"
    },
    {
      "type": "mcq",
      "hasGraph": true,
      "q": "Hình vẽ dưới đây biểu diễn đường đặc tuyến nhiệt độ theo thời gian khi đun nóng liên tục một khối chất rắn kết tinh từ thể rắn đến khi chuyển thể hoàn toàn. Dựa vào đồ thị, chất rắn này bắt đầu nóng chảy ở nhiệt độ nào và quá trình nóng chảy diễn ra trong khoảng thời gian bao lâu?",
      "opts": [
        "Nóng chảy ở 80°C, diễn ra trong 4 phút (từ phút thứ 3 đến phút thứ 7)",
        "Nóng chảy ở 60°C, diễn ra trong 3 phút (từ phút thứ 0 đến phút thứ 3)",
        "Nóng chảy ở 100°C, diễn ra trong 5 phút (từ phút thứ 7 đến phút thứ 12)",
        "Nóng chảy ở 80°C, diễn ra trong 7 phút (từ phút thứ 0 đến phút thứ 7)"
      ],
      "ans": 0,
      "correctText": "Đáp án A (80°C, diễn ra trong 4 phút)",
      "exp": "• Trên đồ thị, đoạn nằm ngang song song trục thời gian biểu diễn quá trình chuyển thể (nóng chảy) vì nhiệt độ được giữ không đổi dù liên tục nhận nhiệt.<br>• Đoạn nằm ngang ở giá trị nhiệt độ <span class='math-sym'>T = 80°C</span> (đây chính là nhiệt độ nóng chảy của chất).<br>• Thời điểm bắt đầu nóng chảy: phút thứ 3; kết thúc nóng chảy: phút thứ 7.<br>• Thời gian diễn ra nóng chảy: <span class='math-sym'>Δt = 7 - 3 = 4 phút</span>.",
      "svgGraph": "<svg viewBox=\"0 0 440 260\" width=\"100%\" height=\"auto\" style=\"display:block;\">\n            <defs>\n              <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n                <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#94a3b8\" />\n              </marker>\n            </defs>\n            <!-- Lưới mờ -->\n            <line x1=\"50\" y1=\"60\" x2=\"400\" y2=\"60\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            <line x1=\"50\" y1=\"120\" x2=\"400\" y2=\"120\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            <line x1=\"50\" y1=\"180\" x2=\"400\" y2=\"180\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            \n            <line x1=\"140\" y1=\"210\" x2=\"140\" y2=\"40\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            <line x1=\"260\" y1=\"210\" x2=\"260\" y2=\"40\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            \n            <!-- Trục tọa độ -->\n            <line x1=\"50\" y1=\"210\" x2=\"410\" y2=\"210\" stroke=\"#94a3b8\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n            <line x1=\"50\" y1=\"210\" x2=\"50\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n            \n            <text x=\"415\" y=\"215\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\">t (phút)</text>\n            <text x=\"30\" y=\"25\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\">T (°C)</text>\n            <text x=\"36\" y=\"225\" fill=\"#94a3b8\" font-size=\"14\">O</text>\n            \n            <!-- Giá trị trục -->\n            <text x=\"135\" y=\"230\" fill=\"#cbd5e1\" font-size=\"13\">3</text>\n            <text x=\"255\" y=\"230\" fill=\"#cbd5e1\" font-size=\"13\">7</text>\n            \n            <text x=\"20\" y=\"185\" fill=\"#cbd5e1\" font-size=\"13\">25°</text>\n            <text x=\"20\" y=\"125\" fill=\"#cbd5e1\" font-size=\"13\">80°</text>\n            <text x=\"15\" y=\"65\" fill=\"#cbd5e1\" font-size=\"13\">110°</text>\n\n            <!-- Đường đặc tuyến -->\n            <line x1=\"50\" y1=\"180\" x2=\"140\" y2=\"120\" stroke=\"#06b6d4\" stroke-width=\"3.5\" />\n            <circle cx=\"50\" cy=\"180\" r=\"4\" fill=\"#06b6d4\" />\n            <circle cx=\"140\" cy=\"120\" r=\"5\" fill=\"#f43f5e\" />\n\n            <line x1=\"140\" y1=\"120\" x2=\"260\" y2=\"120\" stroke=\"#f43f5e\" stroke-width=\"4\" />\n            <circle cx=\"260\" cy=\"120\" r=\"5\" fill=\"#f43f5e\" />\n\n            <line x1=\"260\" y1=\"120\" x2=\"360\" y2=\"60\" stroke=\"#10b981\" stroke-width=\"3.5\" />\n            <circle cx=\"360\" cy=\"60\" r=\"4\" fill=\"#10b981\" />\n\n            <!-- Nhãn vùng -->\n            <text x=\"65\" y=\"145\" fill=\"#06b6d4\" font-size=\"13\" font-weight=\"700\">Rắn</text>\n            <text x=\"175\" y=\"110\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"800\">Nóng chảy</text>\n            <text x=\"300\" y=\"85\" fill=\"#10b981\" font-size=\"13\" font-weight=\"700\">Lỏng</text>\n          </svg>"
    },
    {
      "type": "tf",
      "q": "Trong thí nghiệm đun nóng chất rắn và quan sát sự chuyển thể sử dụng đèn cồn, nhiệt kế và ống nghiệm đựng băng phiến. Hãy xét tính Đúng/Sai của các thao tác thực hành:",
      "stmts": [
        "Nên đun cách thủy ống nghiệm đựng băng phiến trong cốc nước thay vì hơ trực tiếp ống nghiệm trên ngọn lửa đèn cồn để nhiệt truyền đều khắp khối chất.",
        "Khi băng phiến bắt đầu nóng chảy, nhiệt kế ghi nhận nhiệt độ tăng vọt đột ngột.",
        "Phải đặt bầu nhiệt kế ngập hoàn toàn trong khối chất băng phiến và không chạm vào đáy ống nghiệm.",
        "Trong suốt giai đoạn nóng chảy, băng phiến tồn tại đồng thời ở cả thể rắn và thể lỏng."
      ],
      "ans": [
        true,
        false,
        true,
        true
      ],
      "correctText": "a) Đúng | b) Sai | c) Đúng | d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> Đun cách thủy giúp phân bố nhiệt lượng êm dịu, đều đặn, tránh cháy cục bộ đáy ống.<br>• <b>Ý b [Sai]:</b> Băng phiến là chất rắn kết tinh, khi bắt đầu nóng chảy nhiệt độ giữ cố định ở 80°C chứ không tăng vọt.<br>• <b>Ý c [Đúng]:</b> Bầu nhiệt kế đo nhiệt độ khối chất, nếu chạm đáy ống nghiệm sẽ đo sai lệch nhiệt độ ngọn lửa bên ngoài.<br>• <b>Ý d [Đúng]:</b> Trong suốt thời gian chuyển thể, hai pha rắn và lỏng cùng tồn tại cân bằng nhiệt."
    },
    {
      "type": "mcq",
      "q": "Công nghệ sấy thăng hoa (Freeze Drying) hiện đại ứng dụng trong bảo quản thực phẩm cao cấp và dược phẩm dựa trên nguyên lí vật lí nào?",
      "opts": [
        "Làm đông lạnh thực phẩm ở nhiệt độ rất thấp, sau đó giảm mạnh áp suất môi trường xuống dưới điểm ba thể để nước đá thăng hoa trực tiếp thành hơi.",
        "Đun nóng nhanh thực phẩm lên nhiệt độ trên 100°C ở áp suất cực cao để nước sôi tức thì.",
        "Dùng lực ly tâm cực đại để vắt kiệt toàn bộ các phân tử nước tự do ra khỏi tế bào sinh học.",
        "Ngâm thực phẩm vào dung dịch muối đậm đặc để rút nước qua màng bán thấm."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Sấy thăng hoa:</b> Thực phẩm trước hết được cấp đông sâu để nước đóng băng hoàn toàn. Sau đó đặt vào buồng chân không áp suất cực thấp.<br>• Ở áp suất chân không thấp hơn áp suất điểm ba trạng thái của nước (<span class='math-sym'>p < 611 Pa</span>), băng đá sẽ <b>thăng hoa trực tiếp thành hơi nước</b> mà không chảy lỏng, giữ nguyên vẹn 100% hình dạng, màu sắc và vitamin của thực phẩm."
    }
  ],
  "2": [
    {
      "type": "mcq",
      "q": "Trong nhiệt động lực học, nội năng (U) của một vật thể được định nghĩa chuẩn xác là:",
      "opts": [
        "Tổng động năng chuyển động nhiệt hỗn loạn của các phân tử cấu tạo nên vật và thế năng tương tác giữa chúng.",
        "Tổng động năng chuyển động có hướng của toàn bộ vật thể so với mặt đất.",
        "Thế năng trọng trường của vật thể đặt ở một độ cao xác định so với mốc thế năng.",
        "Năng lượng bức xạ điện từ mà vật thể liên tục phát ra ngoài môi trường xung quanh."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Định nghĩa SGK Vật Lí 12:</b> Nội năng của một vật là tổng động năng của các phân tử cấu tạo nên vật (do chuyển động nhiệt) và thế năng tương tác giữa chúng.<br>• Ký hiệu là <span class='math-sym'>U</span>, đơn vị trong hệ SI là Jun (J). Nội năng phụ thuộc vào nhiệt độ <span class='math-sym'>T</span> và thể tích <span class='math-sym'>V</span> của vật: <span class='math-sym'>U = f(T, V)</span>."
    },
    {
      "type": "mcq",
      "q": "Điểm khác biệt bản chất nhất giữa hai quá trình làm biến đổi nội năng: 'Thực hiện công' và 'Truyền nhiệt' là gì?",
      "opts": [
        "Thực hiện công có sự chuyển hoá năng lượng từ dạng khác (cơ năng, điện năng...) thành nội năng; còn truyền nhiệt là sự truyền trực tiếp nội năng mà không có sự chuyển hoá dạng năng lượng.",
        "Thực hiện công luôn làm nội năng tăng, còn truyền nhiệt luôn làm nội năng giảm.",
        "Truyền nhiệt chỉ xảy ra khi có sự tiếp xúc trực tiếp giữa các vật rắn.",
        "Thực hiện công chỉ xảy ra đối với các khối chất khí trong xilanh kín."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Bản chất năng lượng:</b><br>- <i>Thực hiện công:</i> Có sự chuyển hoá giữa các dạng năng lượng khác (ví dụ cơ năng cọ xát thành nội năng làm vật nóng lên).<br>- <i>Truyền nhiệt:</i> Không có sự chuyển hoá dạng năng lượng, chỉ là sự trao đổi chuyển giao nội năng từ vật có nhiệt độ cao sang vật có nhiệt độ thấp hơn."
    },
    {
      "type": "tf",
      "q": "Theo biểu thức định luật I của nhiệt động lực học ΔU = A + Q, hãy xác định tính Đúng/Sai của các nhận định sau về quy ước dấu đại số:",
      "stmts": [
        "Hệ nhận nhiệt lượng từ môi trường ngoài thì quy ước Q > 0.",
        "Hệ nhận công từ ngoại lực bên ngoài tác dụng vào thì quy ước A < 0.",
        "Khối khí dãn nở đẩy pittong di chuyển thực hiện công lên ngoại vật thì quy ước A < 0.",
        "Một hệ biến đổi trong một chu trình kín khép kín quay về trạng thái ban đầu thì độ biến thiên nội năng ΔU = 0."
      ],
      "ans": [
        true,
        false,
        true,
        true
      ],
      "correctText": "a) Đúng | b) Sai | c) Đúng | d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> Hệ nhận nhiệt: <span class='math-sym'>Q > 0</span>; hệ tỏa nhiệt: <span class='math-sym'>Q < 0</span>.<br>• <b>Ý b [Sai]:</b> Hệ nhận công từ ngoại lực tác dụng nén vào: quy ước <span class='math-sym'>A > 0</span>.<br>• <b>Ý c [Đúng]:</b> Hệ sinh công đẩy pittong ra ngoài: quy ước <span class='math-sym'>A < 0</span>.<br>• <b>Ý d [Đúng]:</b> Nội năng là hàm trạng thái. Khi đi hết một chu trình kín quay về trạng thái ban đầu thì <span class='math-sym'>U<sub>cuối</sub>ối = U<sub>đầu</sub> ⟹ ΔU = 0</span>."
    },
    {
      "type": "match",
      "q": "Ghép từng quá trình biến đổi thực tế của khối khí trong xilanh (Cột A) với biểu thức tương ứng của Định luật I Nhiệt động lực học (Cột B):",
      "colA": [
        "Khối khí bị nén nhanh trong xilanh cách nhiệt hoàn toàn (không trao đổi nhiệt)",
        "Khối khí dãn nở đẳng nhiệt ở nhiệt độ không đổi (nội năng không đổi)",
        "Khối khí được đốt nóng trong bình kín có thể tích cố định (đẳng tích không sinh công)",
        "Khối khí dãn nở đẩy pittong trong xilanh cách nhiệt hoàn toàn"
      ],
      "colB": [
        "Q = 0 ⟹ ΔU = A (với A > 0, nội năng tăng)",
        "ΔU = 0 ⟹ Q = -A (với A < 0, nhiệt lượng nhận chuyển thành công)",
        "A = 0 ⟹ ΔU = Q (nhiệt lượng nhận làm tăng nội năng)",
        "Q = 0 ⟹ ΔU = A (với A < 0, nội năng giảm làm khí lạnh đi)"
      ],
      "ans": [
        0,
        1,
        2,
        3
      ],
      "correctText": "1 - A | 2 - B | 3 - C | 4 - D",
      "exp": "• <b>1 ghép A:</b> Đoạn nhiệt (<span class='math-sym'>Q = 0</span>), nén nhận công (<span class='math-sym'>A > 0</span>) ⟹ <span class='math-sym'>ΔU = A > 0</span> (khí nóng lên).<br>• <b>2 ghép B:</b> Đẳng nhiệt (<span class='math-sym'>ΔU = 0</span>) ⟹ <span class='math-sym'>Q = -A</span>.<br>• <b>3 ghép C:</b> Đẳng tích thể tích không đổi ⟹ không sinh công (<span class='math-sym'>A = 0</span>) ⟹ <span class='math-sym'>ΔU = Q</span>.<br>• <b>4 ghép D:</b> Dãn khí đoạn nhiệt (<span class='math-sym'>Q = 0</span>, <span class='math-sym'>A < 0</span>) ⟹ <span class='math-sym'>ΔU = A < 0</span> (khí bị làm lạnh)."
    },
    {
      "type": "drag",
      "q": "Chọn từ khóa trong khung và chạm vào ô trống tương ứng để hoàn thiện nội dung Định luật I của nhiệt động lực học:",
      "text": "Độ biến thiên nội năng của một hệ bằng tổng [blank] và [blank] mà hệ nhận được. Biểu thức đại số là: [blank] = A + Q. Định luật I thực chất là sự vận dụng định luật bảo toàn và chuyển hoá [blank] vào các hiện tượng nhiệt.",
      "words": [
        "công",
        "nhiệt lượng",
        "năng lượng",
        "ΔU",
        "p·V",
        "động lượng"
      ],
      "ans": [
        0,
        1,
        3,
        2
      ],
      "correctText": "1: công | 2: nhiệt lượng | 3: ΔU | 4: năng lượng",
      "exp": "<b>Nội dung Định luật I Nhiệt động lực học:</b><br><div class='formula-box'><span class='math-sym'>ΔU = A + Q</span></div>Độ biến thiên nội năng của hệ bằng tổng công và nhiệt lượng mà hệ nhận được. Đây là trường hợp riêng của định luật bảo toàn và chuyển hoá năng lượng."
    },
    {
      "type": "mcq",
      "q": "Người ta truyền cho một khối khí trong xilanh nhiệt lượng Q = 250 J. Khối khí nở ra thực hiện công A' = 150 J đẩy pittong đi lên. Độ biến thiên nội năng ΔU của khối khí là:",
      "opts": [
        "ΔU = +100 J",
        "ΔU = +400 J",
        "ΔU = -100 J",
        "ΔU = -400 J"
      ],
      "ans": 0,
      "correctText": "Đáp án A (+100 J)",
      "exp": "• Theo quy ước dấu:<br>- Khí nhận nhiệt lượng: <span class='math-sym'>Q = +250 J</span>.<br>- Khí thực hiện công <span class='math-sym'>A' = 150 J</span> nên công hệ nhận vào mang dấu âm: <span class='math-sym'>A = -150 J</span>.<br>• Độ biến thiên nội năng:<div class='formula-box'><span class='math-sym'>ΔU = A + Q = -150 + 250 = +100 J</span></div>Nội năng của khối khí tăng thêm 100 J."
    },
    {
      "type": "mcq",
      "q": "Một khối khí bị nén trong xilanh bởi một lực ngoài thực hiện công A = 180 J lên khối khí. Biết trong quá trình nén, khối khí đã tỏa ra môi trường xung quanh một nhiệt lượng 60 J. Nội năng của khối khí biến đổi như thế nào?",
      "opts": [
        "Tăng thêm 120 J",
        "Giảm đi 120 J",
        "Tăng thêm 240 J",
        "Giảm đi 240 J"
      ],
      "ans": 0,
      "correctText": "Đáp án A (Tăng thêm 120 J)",
      "exp": "• Theo quy ước dấu:<br>- Khí nhận công: <span class='math-sym'>A = +180 J</span>.<br>- Khí tỏa nhiệt ra môi trường: <span class='math-sym'>Q = -60 J</span>.<br>• Độ biến thiên nội năng:<div class='formula-box'><span class='math-sym'>ΔU = A + Q = 180 + (-60) = +120 J</span></div>Vì <span class='math-sym'>ΔU > 0</span> nên nội năng của khối khí <b>tăng thêm 120 J</b>."
    },
    {
      "type": "mcq",
      "hasGraph": true,
      "q": "Hình vẽ dưới đây là đồ thị biểu diễn quá trình dãn nở đẳng áp của một khối khí lí tưởng từ trạng thái (1) có thể tích V₁ = 2 lít đến trạng thái (2) có thể tích V₂ = 6 lít ở áp suất không đổi p = 2 × 10⁵ Pa. Công do khối khí này sinh ra trong quá trình dãn nở có độ lớn bằng:",
      "opts": [
        "800 J",
        "1200 J",
        "400 J",
        "1600 J"
      ],
      "ans": 0,
      "correctText": "Đáp án A (800 J)",
      "exp": "• Trong quá trình đẳng áp (<span class='math-sym'>p = const</span>), độ lớn của công do khối khí sinh ra bằng diện tích hình chữ nhật bên dưới đường đồ thị trong hệ tọa độ <span class='math-sym'>p - V</span>:<div class='formula-box'><span class='math-sym'>A' = p · ΔV = p · (V₂ - V₁)</span></div>• Đổi đơn vị: <span class='math-sym'>V₁ = 2 lít = 2 × 10⁻³ m³; V₂ = 6 lít = 6 × 10⁻³ m³ ⟹ ΔV = 4 × 10⁻³ m³</span>.<br>• Tính công:<div class='formula-box'><span class='math-sym'>A' = 2 × 10⁵ × 4 × 10⁻³ = 800 J</span></div>",
      "svgGraph": "<svg viewBox=\"0 0 440 260\" width=\"100%\" height=\"auto\" style=\"display:block;\">\n            <defs>\n              <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n                <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#94a3b8\" />\n              </marker>\n            </defs>\n            <!-- Lưới nền -->\n            <line x1=\"60\" y1=\"90\" x2=\"380\" y2=\"90\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            <line x1=\"140\" y1=\"210\" x2=\"140\" y2=\"40\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            <line x1=\"320\" y1=\"210\" x2=\"320\" y2=\"40\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            \n            <!-- Vùng diện tích công gạch sọc/màu -->\n            <rect x=\"140\" y=\"90\" width=\"180\" height=\"120\" fill=\"rgba(6, 182, 212, 0.15)\" stroke=\"rgba(6, 182, 212, 0.4)\" stroke-dasharray=\"3\"/>\n            <text x=\"205\" y=\"155\" fill=\"#38bdf8\" font-size=\"16\" font-weight=\"800\">Diện tích = A</text>\n\n            <!-- Trục tọa độ -->\n            <line x1=\"60\" y1=\"210\" x2=\"400\" y2=\"210\" stroke=\"#94a3b8\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n            <line x1=\"60\" y1=\"210\" x2=\"60\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n            \n            <text x=\"405\" y=\"215\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\">V (lít)</text>\n            <text x=\"25\" y=\"25\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\">p (10⁵ Pa)</text>\n            <text x=\"46\" y=\"225\" fill=\"#94a3b8\" font-size=\"14\">O</text>\n            \n            <!-- Giá trị trục -->\n            <text x=\"135\" y=\"230\" fill=\"#cbd5e1\" font-size=\"13\">2</text>\n            <text x=\"315\" y=\"230\" fill=\"#cbd5e1\" font-size=\"13\">6</text>\n            <text x=\"36\" y=\"95\" fill=\"#cbd5e1\" font-size=\"13\">2</text>\n\n            <!-- Đường quá trình 1 -> 2 -->\n            <line x1=\"140\" y1=\"90\" x2=\"320\" y2=\"90\" stroke=\"#f43f5e\" stroke-width=\"4\" marker-mid=\"url(#arrow)\" />\n            <circle cx=\"140\" cy=\"90\" r=\"5\" fill=\"#06b6d4\" />\n            <circle cx=\"320\" cy=\"90\" r=\"5\" fill=\"#f43f5e\" />\n            \n            <text x=\"130\" y=\"75\" fill=\"#06b6d4\" font-size=\"15\" font-weight=\"800\">(1)</text>\n            <text x=\"325\" y=\"75\" fill=\"#f43f5e\" font-size=\"15\" font-weight=\"800\">(2)</text>\n          </svg>"
    },
    {
      "type": "tf",
      "q": "Trong thí nghiệm nén khí bằng bơm tay để kiểm chứng Định luật I: Bơm khí liên tục vào một bình nhựa kín chứa một ít cồn và có gắn nhiệt kế kỹ thuật số, sau một lát nút chai đột ngột bật tung ra kèm theo sương mù xuất hiện trong bình. Hãy xét tính Đúng/Sai của các nhận định:",
      "stmts": [
        "Khi dùng bơm nén khí vào bình, công của lực nén làm tăng nội năng và làm nhiệt độ khối khí trong bình tăng lên.",
        "Khi nút chai bật tung ra, khối khí dãn nở rất nhanh thực hiện công lên nút chai.",
        "Vì quá trình dãn nở diễn ra rất nhanh nên coi như đoạn nhiệt (Q ≈ 0), khí mất nội năng để sinh công làm nhiệt độ giảm đột ngột.",
        "Hiện tượng sương mù trắng xuất hiện trong bình là do hơi cồn bị bốc cháy dưới áp suất cao."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) Đúng | b) Đúng | c) Đúng | d) Sai",
      "exp": "• <b>Ý a [Đúng]:</b> Nhận công <span class='math-sym'>A > 0 ⟹ ΔU > 0</span> làm khí nóng lên.<br>• <b>Ý b [Đúng]:</b> Khí bung nở đẩy nút bay đi là quá trình sinh công cơ học.<br>• <b>Ý c [Đúng]:</b> Quá trình dãn nở chớp nhoáng là đoạn nhiệt (<span class='math-sym'>Q ≈ 0</span>), từ <span class='math-sym'>ΔU = A' < 0</span> nên nhiệt độ giảm mạnh.<br>• <b>Ý d [Sai]:</b> Nhiệt độ hạ xuống đột ngột làm hơi cồn và hơi nước gặp lạnh <b>ngưng tụ</b> thành các giọt sương li ti tạo làn sương mù trắng, không phải bốc cháy."
    },
    {
      "type": "mcq",
      "q": "Một động cơ nhiệt hoạt động tuần hoàn nhận từ nguồn nóng nhiệt lượng Q₁ = 1000 J trong mỗi chu trình và truyền cho nguồn lạnh nhiệt lượng Q₂ = 650 J. Hiệu suất nhiệt của động cơ này là:",
      "opts": [
        "35%",
        "65%",
        "53,8%",
        "70%"
      ],
      "ans": 0,
      "correctText": "Đáp án A (35%)",
      "exp": "• Công có ích động cơ sinh ra trong một chu trình:<div class='formula-box'><span class='math-sym'>A = Q₁ - Q₂ = 1000 - 650 = 350 J</span></div>• Hiệu suất của động cơ nhiệt:<div class='formula-box'><span class='math-sym'>H = <div class='fraction'><span class='numerator'>A</span><span class='denominator'>Q₁</span></div> = <div class='fraction'><span class='numerator'>350</span><span class='denominator'>1000</span></div> = 0,35 = 35%</span></div>"
    }
  ],
  "3": [
    {
      "type": "mcq",
      "q": "Theo quan điểm của thuyết động học phân tử, nhiệt độ là đại lượng vật lí đặc trưng cho:",
      "opts": [
        "Động năng tịnh tiến trung bình của các phân tử cấu tạo nên vật thể.",
        "Tổng thế năng tương tác giữa tất cả các phân tử trong vật.",
        "Vận tốc chuyển động có hướng của khối tâm vật thể.",
        "Mật độ hạt phân tử phân bố trên một đơn vị thể tích của chất."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Bản chất vi mô:</b> Nhiệt độ không phản ánh vận tốc của từng phân tử riêng lẻ mà là thước đo <b>động năng tịnh tiến trung bình</b> của tập hợp vô số phân tử cấu tạo nên vật: <span class='math-sym'>E<sub>đ</sub> = (<span class=\"fraction\"><span class=\"numerator\">3</span><span class=\"denominator\">2</span></span>) · k · T</span>.<br>• Vật có nhiệt độ càng cao thì các phân tử chuyển động nhiệt hỗn loạn càng nhanh."
    },
    {
      "type": "mcq",
      "q": "Khái niệm 'Độ không tuyệt đối' (0 K trong thang nhiệt độ Kelvin) có ý nghĩa vật lí cơ bản là:",
      "opts": [
        "Nhiệt độ thấp nhất theo lí thuyết mà tại đó động năng chuyển động nhiệt của các phân tử triệt tiêu về mức cực tiểu.",
        "Nhiệt độ tại đó nước tinh khiết bắt đầu đóng băng ở áp suất chuẩn 1 atm.",
        "Nhiệt độ thấp nhất từng được ghi nhận trong khí quyển bề mặt Trái Đất.",
        "Nhiệt độ mà tại đó tất cả các chất lỏng đều bắt đầu sôi mãnh liệt."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Độ không tuyệt đối (0 K hay -273,15°C):</b> Là nhiệt độ thấp nhất có thể có về mặt nhiệt động lực học.<br>• Ở nhiệt độ này, chuyển động nhiệt hỗn loạn của các phân tử giảm về mức thấp nhất (triệt tiêu theo cơ học cổ điển, dừng ở trạng thái năng lượng điểm không theo cơ học lượng tử)."
    },
    {
      "type": "tf",
      "q": "Xét các thang nhiệt độ thông dụng (Celsius, Kelvin, Fahrenheit), hãy kiểm tra tính Đúng/Sai của từng nhận định sau:",
      "stmts": [
        "Trong thang Celsius, điểm đóng băng của nước tinh khiết là 0°C và điểm sôi là 100°C ở áp suất 1 atm.",
        "Độ biến thiên nhiệt độ 1 K trong thang Kelvin có độ lớn bằng đúng độ biến thiên nhiệt độ 1°C trong thang Celsius (ΔT = Δt).",
        "Trong thang nhiệt độ Kelvin, giá trị nhiệt độ tuyệt đối có thể nhận giá trị âm dưới 0 K.",
        "Ở áp suất tiêu chuẩn 1 atm, nước tinh khiết sôi ở nhiệt độ 212°F trên thang Fahrenheit."
      ],
      "ans": [
        true,
        true,
        false,
        true
      ],
      "correctText": "a) Đúng | b) Đúng | c) Sai | d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> Thang Celsius định chuẩn 0°C (băng tan) và 100°C (nước sôi ở 1 atm).<br>• <b>Ý b [Đúng]:</b> Vì <span class='math-sym'>T = t + 273,15 ⟹ ΔT = Δt</span> (khoảng cách 1 độ là như nhau).<br>• <b>Ý c [Sai]:</b> Thang Kelvin bắt đầu từ 0 K (độ không tuyệt đối), nhiệt độ tuyệt đối <span class='math-sym'>T ≥ 0 K</span>, không có giá trị âm.<br>• <b>Ý d [Đúng]:</b> <span class='math-sym'>t<sub>F</sub> = 1,8 × 100 + 32 = 212°F</span>.",
      "svgGraph": "<svg viewBox=\"0 0 460 210\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"cGrad\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#3b82f6\"/><stop offset=\"50%\" stop-color=\"#10b981\"/><stop offset=\"100%\" stop-color=\"#ef4444\"/></linearGradient>\n    <linearGradient id=\"kGrad\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\"><stop offset=\"0%\" stop-color=\"#6366f1\"/><stop offset=\"50%\" stop-color=\"#06b6d4\"/><stop offset=\"100%\" stop-color=\"#f59e0b\"/></linearGradient>\n  </defs>\n  <!-- Background Box -->\n  <rect x=\"15\" y=\"10\" width=\"430\" height=\"190\" rx=\"14\" fill=\"rgba(15,23,42,0.85)\" stroke=\"rgba(56,189,248,0.3)\" stroke-width=\"1.5\"/>\n  <!-- Thermometer C -->\n  <text x=\"120\" y=\"32\" text-anchor=\"middle\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"800\">Thang Celsius (°C)</text>\n  <rect x=\"110\" y=\"45\" width=\"20\" height=\"120\" rx=\"10\" fill=\"url(#cGrad)\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n  <circle cx=\"120\" cy=\"170\" r=\"16\" fill=\"#3b82f6\" stroke=\"#38bdf8\" stroke-width=\"1.5\"/>\n  <!-- Thermometer K -->\n  <text x=\"340\" y=\"32\" text-anchor=\"middle\" fill=\"#34d399\" font-size=\"14\" font-weight=\"800\">Thang Kelvin (K)</text>\n  <rect x=\"330\" y=\"45\" width=\"20\" height=\"120\" rx=\"10\" fill=\"url(#kGrad)\" stroke=\"#34d399\" stroke-width=\"1.5\"/>\n  <circle cx=\"340\" cy=\"170\" r=\"16\" fill=\"#6366f1\" stroke=\"#34d399\" stroke-width=\"1.5\"/>\n  <!-- Reference lines -->\n  <!-- Boiling point -->\n  <line x1=\"130\" y1=\"55\" x2=\"330\" y2=\"55\" stroke=\"#ef4444\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n  <text x=\"85\" y=\"59\" fill=\"#ef4444\" font-size=\"12\" font-weight=\"700\" text-anchor=\"end\">100 °C</text>\n  <text x=\"230\" y=\"52\" fill=\"#ef4444\" font-size=\"11\" font-weight=\"600\" text-anchor=\"middle\">Điểm sôi của nước (1 atm)</text>\n  <text x=\"375\" y=\"59\" fill=\"#ef4444\" font-size=\"12\" font-weight=\"700\" text-anchor=\"start\">373,15 K</text>\n  <!-- Freezing point -->\n  <line x1=\"130\" y1=\"105\" x2=\"330\" y2=\"105\" stroke=\"#10b981\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n  <text x=\"85\" y=\"109\" fill=\"#10b981\" font-size=\"12\" font-weight=\"700\" text-anchor=\"end\">0 °C</text>\n  <text x=\"230\" y=\"102\" fill=\"#10b981\" font-size=\"11\" font-weight=\"600\" text-anchor=\"middle\">Điểm đóng băng của nước</text>\n  <text x=\"375\" y=\"109\" fill=\"#10b981\" font-size=\"12\" font-weight=\"700\" text-anchor=\"start\">273,15 K</text>\n  <!-- Absolute zero -->\n  <line x1=\"130\" y1=\"155\" x2=\"330\" y2=\"155\" stroke=\"#38bdf8\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n  <text x=\"85\" y=\"159\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"700\" text-anchor=\"end\">-273,15 °C</text>\n  <text x=\"230\" y=\"152\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"600\" text-anchor=\"middle\">Độ không tuyệt đối (T = 0 K)</text>\n  <text x=\"375\" y=\"159\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"700\" text-anchor=\"start\">0 K</text>\n</svg>"
    },
    {
      "type": "match",
      "q": "Ghép từng loại nhiệt kế (Cột A) với nguyên lí hoạt động vật lí tương ứng (Cột B):",
      "colA": [
        "Nhiệt kế thủy ngân hoặc rượu thông dụng",
        "Nhiệt kế điện tử kỹ thuật số dùng trong y tế",
        "Nhiệt kế hồng ngoại đo trán không tiếp xúc",
        "Cặp nhiệt điện (Thermocouple) công nghiệp"
      ],
      "colB": [
        "Dựa vào sự phụ thuộc của điện trở bán dẫn (thermistor) vào nhiệt độ",
        "Dựa vào hiện tượng giãn nở vì nhiệt của cột chất lỏng trong ống quản",
        "Dựa vào cường độ bức xạ nhiệt hồng ngoại phát ra từ bề mặt vật thể",
        "Dựa vào suất điện động nhiệt điện xuất hiện giữa hai mối hàn kim loại khác nhau"
      ],
      "ans": [
        1,
        0,
        2,
        3
      ],
      "correctText": "1 - B | 2 - A | 3 - C | 4 - D",
      "exp": "• <b>1 ghép B:</b> Nhiệt kế thủy ngân/rượu dựa vào sự dãn nở thể tích vì nhiệt của chất lỏng.<br>• <b>2 ghép A:</b> Nhiệt kế điện tử dùng cảm biến điện trở bán dẫn thay đổi điện trở theo nhiệt độ.<br>• <b>3 ghép C:</b> Nhiệt kế hồng ngoại thu nhận phổ bức xạ hồng ngoại của cơ thể phát ra.<br>• <b>4 ghép D:</b> Cặp nhiệt điện đo suất điện động Seebeck tỉ lệ với hiệu nhiệt độ 2 mối hàn."
    },
    {
      "type": "drag",
      "q": "Chọn từ khóa trong khung và chạm vào ô trống tương ứng để hoàn thiện nội dung nguyên lí cân bằng nhiệt (Định luật số 0 Nhiệt động lực học):",
      "text": "Hai vật tiếp xúc nhau được gọi là ở trạng thái [blank] nhiệt nếu không có sự truyền năng lượng nhiệt ròng giữa chúng. Theo định luật số 0: Nếu hai vật A và B độc lập cùng ở trạng thái cân bằng nhiệt với vật thứ ba C, thì A và B cũng [blank] nhiệt với nhau. Khi đó chúng có cùng một [blank].",
      "words": [
        "cân bằng",
        "biến thiên",
        "nhiệt độ",
        "nội năng",
        "đoạn nhiệt"
      ],
      "ans": [
        0,
        0,
        2
      ],
      "correctText": "1: cân bằng | 2: cân bằng | 3: nhiệt độ",
      "exp": "<b>Nội dung Định luật số 0 Nhiệt động lực học:</b><br>Nếu vật A cân bằng nhiệt với C, và vật B cũng cân bằng nhiệt với C, thì A và B cân bằng nhiệt với nhau.<br>Đại lượng chung cho tất cả các vật ở trạng thái cân bằng nhiệt chính là <b>Nhiệt độ</b>."
    },
    {
      "type": "mcq",
      "q": "Thân nhiệt bình thường của người khỏe mạnh là 37,0°C. Giá trị nhiệt độ này tương ứng trong thang nhiệt độ Kelvin (T) và thang Fahrenheit (t<sub>F</sub>) lần lượt là:",
      "opts": [
        "T = 310,15 K và t<sub>F</sub> = 98,6°F",
        "T = 300,15 K và t<sub>F</sub> = 98,6°F",
        "T = 310,15 K và t<sub>F</sub> = 104,2°F",
        "T = 236,15 K và t<sub>F</sub> = 66,6°F"
      ],
      "ans": 0,
      "correctText": "Đáp án A (310,15 K và 98,6°F)",
      "exp": "• Đổi sang Kelvin:<div class='formula-box'><span class='math-sym'>T = t + 273,15 = 37 + 273,15 = 310,15 K</span></div>• Đổi sang Fahrenheit:<div class='formula-box'><span class='math-sym'>t<sub>F</sub> = 1,8 · t + 32 = 1,8 × 37 + 32 = 66,6 + 32 = 98,6°F</span></div>"
    },
    {
      "type": "mcq",
      "q": "Tại giá trị nhiệt độ nào thì số chỉ trên thang nhiệt độ Celsius (t) và thang nhiệt độ Fahrenheit (t<sub>F</sub>) có cùng một giá trị bằng số?",
      "opts": [
        "-40°",
        "0°",
        "-20°",
        "40°"
      ],
      "ans": 0,
      "correctText": "Đáp án A (-40°)",
      "exp": "• Ta có công thức liên hệ: <span class='math-sym'>t<sub>F</sub> = 1,8 · t + 32</span>.<br>• Đặt <span class='math-sym'>t<sub>F</sub> = t = x</span>, ta có phương trình:<div class='formula-box'><span class='math-sym'>x = 1,8 · x + 32 ⟺ 0,8 · x = -32 ⟺ x = -40</span></div>Như vậy, tại <b>-40°C = -40°F</b>, hai thang đo cho cùng một giá trị số chỉ."
    },
    {
      "type": "mcq",
      "hasGraph": true,
      "q": "Một học sinh tự chế tạo một nhiệt kế chất lỏng chưa chia độ. Khi nhúng vào nước đá đang tan (0°C), chiều cao cột chất lỏng là h₀ = 40 mm. Khi nhúng vào hơi nước sôi (100°C), chiều cao cột chất lỏng là h₁₀₀ = 240 mm (xem đồ thị bên dưới). Khi dùng nhiệt kế này đo nhiệt độ phòng thì thấy chiều cao cột chất lỏng là h = 88 mm. Nhiệt độ phòng đo được là:",
      "opts": [
        "24°C",
        "22°C",
        "20°C",
        "28°C"
      ],
      "ans": 0,
      "correctText": "Đáp án A (24°C)",
      "exp": "• Giả thiết chiều cao cột chất lỏng phụ thuộc bậc nhất (tuyến tính) vào nhiệt độ:<br><div class='formula-box'><span class='math-sym'>h(t) = h₀ + <div class='fraction'><span class='numerator'>h₁₀₀ - h₀</span><span class='denominator'>100</span></div> · t</span></div>• Độ tăng chiều cao cho mỗi 1°C:<div class='formula-box'><span class='math-sym'>k = <div class='fraction'><span class='numerator'>240 - 40</span><span class='denominator'>100</span></div> = <div class='fraction'><span class='numerator'>200</span><span class='denominator'>100</span></div> = 2 mm/°C</span></div>• Với <span class='math-sym'>h = 88 mm</span>:<div class='formula-box'><span class='math-sym'>t = <div class='fraction'><span class='numerator'>h - h₀</span><span class='denominator'>k</span></div> = <div class='fraction'><span class='numerator'>88 - 40</span><span class='denominator'>2</span></div> = <div class='fraction'><span class='numerator'>48</span><span class='denominator'>2</span></div> = 24°C</span></div>",
      "svgGraph": "<svg viewBox=\"0 0 440 260\" width=\"100%\" height=\"auto\" style=\"display:block;\">\n            <defs>\n              <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n                <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#94a3b8\" />\n              </marker>\n            </defs>\n            <!-- Lưới mờ -->\n            <line x1=\"50\" y1=\"180\" x2=\"380\" y2=\"180\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            <line x1=\"50\" y1=\"60\" x2=\"380\" y2=\"60\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            <line x1=\"330\" y1=\"210\" x2=\"330\" y2=\"40\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            \n            <!-- Trục tọa độ -->\n            <line x1=\"50\" y1=\"210\" x2=\"400\" y2=\"210\" stroke=\"#94a3b8\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n            <line x1=\"50\" y1=\"210\" x2=\"50\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n            \n            <text x=\"405\" y=\"215\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\">t (°C)</text>\n            <text x=\"25\" y=\"25\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\">h (mm)</text>\n            <text x=\"36\" y=\"225\" fill=\"#94a3b8\" font-size=\"14\">O</text>\n            \n            <!-- Giá trị trục -->\n            <text x=\"18\" y=\"185\" fill=\"#cbd5e1\" font-size=\"13\">40</text>\n            <text x=\"12\" y=\"65\" fill=\"#cbd5e1\" font-size=\"13\">240</text>\n            <text x=\"318\" y=\"228\" fill=\"#cbd5e1\" font-size=\"13\">100</text>\n\n            <!-- Đường tuyến tính h theo t -->\n            <line x1=\"50\" y1=\"180\" x2=\"330\" y2=\"60\" stroke=\"#06b6d4\" stroke-width=\"3.5\" />\n            <circle cx=\"50\" cy=\"180\" r=\"5\" fill=\"#f43f5e\" />\n            <circle cx=\"330\" cy=\"60\" r=\"5\" fill=\"#f43f5e\" />\n\n            <!-- Điểm đo hx = 88 mm -->\n            <line x1=\"50\" y1=\"151\" x2=\"117\" y2=\"151\" stroke=\"#f59e0b\" stroke-dasharray=\"3\"/>\n            <line x1=\"117\" y1=\"151\" x2=\"117\" y2=\"210\" stroke=\"#f59e0b\" stroke-dasharray=\"3\"/>\n            <circle cx=\"117\" cy=\"151\" r=\"5\" fill=\"#f59e0b\" />\n            \n            <text x=\"22\" y=\"155\" fill=\"#f59e0b\" font-size=\"12\" font-weight=\"700\">88</text>\n            <text x=\"110\" y=\"228\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"800\">t<tspan baseline-shift=\"sub\" font-size=\"70%\">x</tspan> = ?</text>\n          </svg>"
    },
    {
      "type": "tf",
      "q": "Trong quá trình chuẩn hóa (hiệu chuẩn) điểm mốc cho thang nhiệt độ Celsius trong phòng thí nghiệm, hãy xét tính Đúng/Sai của các quy tắc thực nghiệm:",
      "stmts": [
        "Điểm 0°C được chuẩn hóa bằng cách cắm bầu nhiệt kế ngập sâu vào phễu chứa nước đá tinh khiết bào nhỏ đang tan chảy.",
        "Phễu chứa đá bào cần có lỗ thoát nước phía dưới để nước tan chảy thoát ra ngoài liên tục, đảm bảo luôn đo đúng trạng thái hỗn hợp đá - nước cân bằng ở 0°C.",
        "Khi xác định điểm 100°C, ta cắm trực tiếp bầu nhiệt kế chạm vào đáy kim loại của nồi đun nước sôi.",
        "Nếu áp suất khí quyển phòng thí nghiệm giảm xuống dưới 1 atm (ví dụ ở vùng núi cao), nhiệt độ sôi của nước sẽ thấp hơn 100°C làm điểm mốc bị dịch chuyển."
      ],
      "ans": [
        true,
        true,
        false,
        true
      ],
      "correctText": "a) Đúng | b) Đúng | c) Sai | d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> Chuẩn hóa mốc 0°C bằng nước đá tinh khiết đang tan.<br>• <b>Ý b [Đúng]:</b> Nước đá tan tích tụ ở đáy có thể hấp thụ nhiệt ngoài phòng nóng lên, phễu thoát nước giúp duy trì đá bào tinh khiết tiếp xúc bầu nhiệt kế.<br>• <b>Ý c [Sai]:</b> Bầu nhiệt kế phải được treo trong <b>luồng hơi nước sôi</b> bên trên mặt thoáng, không được chạm đáy kim loại (nơi đáy nồi chịu lửa nóng hơn 100°C).<br>• <b>Ý d [Đúng]:</b> Điểm sôi phụ thuộc áp suất ngoài. Khi áp suất giảm, nhiệt độ sôi giảm."
    },
    {
      "type": "mcq",
      "q": "Một cặp nhiệt điện đồng - constantan có hệ số nhiệt điện động α_T = 40 μV/K. Nối một đầu mối hàn vào nước đá đang tan ở 0°C (273,15 K) và nhúng đầu mối hàn còn lại vào lò nung nhiệt độ cao thì đo được suất điện động nhiệt điện là E = 24 mV. Nhiệt độ của lò nung là:",
      "opts": [
        "600°C",
        "573°C",
        "873°C",
        "480°C"
      ],
      "ans": 0,
      "correctText": "Đáp án A (600°C)",
      "exp": "• Công thức suất điện động nhiệt điện:<div class='formula-box'><span class='math-sym'>E = α_T · (T - T₀) = α_T · (t - t₀)</span></div>• Đổi đơn vị: <span class='math-sym'>E = 24 mV = 24.000 μV</span>, <span class='math-sym'>α_T = 40 μV/°C</span>, <span class='math-sym'>t₀ = 0°C</span>.<br>• Nhiệt độ của lò nung:<div class='formula-box'><span class='math-sym'>t - 0 = <div class='fraction'><span class='numerator'>E</span><span class='denominator'>α_T</span></div> = <div class='fraction'><span class='numerator'>24000</span><span class='denominator'>40</span></div> = 600°C</span></div>"
    }
  ],
  "4": [
    {
      "type": "mcq",
      "q": "Theo định nghĩa chuẩn trong chương trình Vật Lí 12, nhiệt dung riêng của một chất là:",
      "opts": [
        "Nhiệt lượng cần cung cấp để 1 kg chất đó chuyển hoàn toàn từ thể lỏng sang thể khí.",
        "Nhiệt lượng tỏa ra khi làm đông đặc hoàn toàn một khối lượng chất lỏng xác định.",
        "Nhiệt lượng cần thiết để làm cho 1 kg chất đó tăng nhiệt độ thêm 1 K (hoặc 1°C).",
        "Tổng động năng nhiệt của tất cả các phân tử cấu tạo nên một vật thể xác định."
      ],
      "ans": 2,
      "correctText": "Đáp án C",
      "exp": "Nhiệt dung riêng được xác định bằng công thức:<div class='formula-box'><span class='math-sym'>c</span> = <div class='fraction'><span class='numerator math-sym'>Q</span><span class='denominator math-sym'>m · ΔT</span></div></div>Đại lượng này biểu thị nhiệt lượng cần truyền cho <b>1 kg</b> chất để nhiệt độ tăng thêm <b>1 K (hoặc 1°C)</b>.<br>Đơn vị chuẩn trong hệ SI là: <b style='color:#38bdf8;'>J/(kg·K)</b>."
    },
    {
      "type": "mcq",
      "q": "Trong các hệ thống tản nhiệt làm mát động cơ đốt trong (xe máy tay ga, ô tô), dung dịch có thành phần chủ yếu là nước được sử dụng làm chất tải nhiệt chính. Nguyên nhân vật lí cơ bản nhất là do:",
      "opts": [
        "Nước có tính dẫn điện cao giúp tiêu tán nhanh điện tích tĩnh phát sinh do cọ xát trong xi-lanh.",
        "Nước có nhiệt dung riêng rất lớn, có khả năng hấp thụ nhiệt lượng cực lớn từ buồng đốt mà nhiệt độ tăng không quá nhiều.",
        "Nước có khối lượng riêng nhỏ nhất trong số các chất lỏng bôi trơn kỹ thuật.",
        "Nước bay hơi rất nhanh ở nhiệt độ phòng, tạo hiệu ứng giảm nhiệt độ cục bộ liên tục."
      ],
      "ans": 1,
      "correctText": "Đáp án B",
      "exp": "Nhiệt dung riêng của nước <span class='math-sym'>c ≈ 4180 J/(kg·K)</span> cao hơn hẳn các chất lỏng khác. Nhờ đó, một khối lượng nước tuần hoàn nhất định có thể hấp thụ và vận chuyển một nhiệt lượng cực lớn:<div class='formula-box'><span class='math-sym'>Q = m · c · Δt</span></div>Lượng nhiệt lớn được tải ra két tản nhiệt mà nhiệt độ của khối nước tăng không quá cao, giữ buồng đốt luôn ở ngưỡng an toàn."
    },
    {
      "type": "tf",
      "q": "Một học sinh nghiên cứu các đặc tính của nhiệt dung riêng (ký hiệu là c). Hãy xác định tính Đúng/Sai của từng phát biểu sau:",
      "stmts": [
        "Nhiệt dung riêng là thuộc tính đặc trưng cho chất làm nên vật, không phụ thuộc vào khối lượng của vật thể.",
        "Hai vật làm bằng cùng một chất có khối lượng m₁ = 2m₂ thì vật thứ nhất có nhiệt dung riêng lớn gấp đôi vật thứ hai.",
        "Khi hai chất nhận cùng nhiệt lượng và có cùng khối lượng, chất có nhiệt dung riêng bé hơn sẽ tăng nhiệt độ nhanh hơn.",
        "Đơn vị của nhiệt dung riêng trong hệ SI là J/kg."
      ],
      "ans": [
        true,
        false,
        true,
        false
      ],
      "correctText": "a) Đúng | b) Sai | c) Đúng | d) Sai",
      "exp": "• <b>Ý a [Đúng]:</b> Nhiệt dung riêng <span class='math-sym'>c</span> là thuộc tính bản chất của chất cấu tạo.<br>• <b>Ý b [Sai]:</b> Cùng một chất thì <span class='math-sym'>c</span> như nhau. Chỉ có nhiệt dung <span class='math-sym'>C = m · c</span> mới tỉ lệ với khối lượng.<br>• <b>Ý c [Đúng]:</b> Từ <span class='math-sym'>ΔT = Q / (m · c)</span>, khi <span class='math-sym'>Q</span> và <span class='math-sym'>m</span> như nhau thì <span class='math-sym'>ΔT</span> tỉ lệ nghịch với <span class='math-sym'>c</span> (<span class='math-sym'>c</span> càng nhỏ thì nóng lên càng nhanh).<br>• <b>Ý d [Sai]:</b> Đơn vị SI chuẩn của nhiệt dung riêng là <b>J/(kg·K)</b>."
    },
    {
      "type": "match",
      "q": "Ghép từng hiện tượng chuyển động của không khí ở bờ biển (Cột A) với bản chất đối lưu và áp suất tương ứng (Cột B):",
      "colA": [
        "Gió biển (Ban ngày thổi từ biển vào đất liền)",
        "Gió đất (Ban đêm thổi từ đất liền ra biển)",
        "Nhiệt độ cát ven bờ ban ngày tăng nhanh hơn nước biển",
        "Nhiệt độ cát ven bờ ban đêm giảm sâu hơn nước biển"
      ],
      "colB": [
        "Cát có c nhỏ nên ban đêm tỏa nhiệt nguội nhanh, không khí co lại tạo áp cao đẩy gió ra biển",
        "Cát có nhiệt dung riêng nhỏ hơn nước biển nhiều lần nên hấp thu bức xạ nóng lên nhanh hơn",
        "Đất liền nóng nhanh tạo áp thấp, không khí mát từ biển (áp cao) tràn vào bờ thế chỗ",
        "Nước biển có c lớn giữ nhiệt lâu, đêm vẫn ấm hơn đất liền nên không khí trên biển nhẹ bốc lên"
      ],
      "ans": [
        2,
        0,
        1,
        3
      ],
      "correctText": "1 - C | 2 - A | 3 - B | 4 - D",
      "exp": "• <b>1 ghép C:</b> Ban ngày đất liền nóng nhanh → không khí bốc lên tạo áp thấp → gió mát thổi từ biển vào (Gió Biển).<br>• <b>2 ghép A:</b> Ban đêm cát tỏa nhiệt nhanh tạo áp cao trên bờ → gió thổi từ đất liền ra biển (Gió Đất).<br>• <b>3 ghép B:</b> <span class='math-sym'>c<sub>chì</sub>át ≈ 800 < c<sub>nước</sub> ≈ 4180 J/(kg·K)</span> nên ban ngày cát nóng lên nhanh hơn.<br>• <b>4 ghép D:</b> Ban đêm nước biển giữ nhiệt tốt hơn làm nhiệt độ nước biển cao hơn đất liền."
    },
    {
      "type": "drag",
      "q": "Chọn từ khóa trong khung và chạm vào ô trống tương ứng để hoàn thiện nội dung nguyên lí cân bằng nhiệt:",
      "text": "Trong một hệ cô lập nhiệt chỉ gồm các vật trao đổi nhiệt với nhau, nhiệt lượng do vật nóng tỏa ra có độ lớn [blank] nhiệt lượng do vật lạnh [blank]. Nếu quy ước dấu đại số (tỏa nhiệt Q < 0, thu nhiệt Q > 0) thì tổng đại số các nhiệt lượng thỏa mãn biểu thức tổng Q = [blank].",
      "words": [
        "nhỏ hơn",
        "luôn bằng",
        "tỏa ra",
        "thu vào",
        "0",
        "100"
      ],
      "ans": [
        1,
        3,
        4
      ],
      "correctText": "1: luôn bằng | 2: thu vào | 3: 0",
      "exp": "Về độ lớn: <span class='math-sym' style='font-size:1.15rem;'>Q<sub>tỏa</sub> = Q<sub>thu</sub></span>.<br>Nếu tính theo dấu đại số quy ước (<span class='math-sym'>Q<sub>tỏa</sub> < 0</span> và <span class='math-sym'>Q<sub>thu</sub> > 0</span>) thì:<div class='formula-box'><span class='math-sym'>∑ Q = Q<sub>tỏa</sub> + Q<sub>thu</sub> = 0</span></div>"
    },
    {
      "type": "mcq",
      "q": "Một ấm đun nước siêu tốc công suất định mức P = 1500 W, hiệu suất nhiệt H = 80%. Dùng ấm đun m = 1,5 kg nước từ nhiệt độ 20°C đến sôi ở 100°C. Biết nhiệt dung riêng của nước c = 4200 J/(kg·K). Thời gian đun cần thiết là:",
      "opts": [
        "336 giây (~ 5,6 phút)",
        "420 giây (~ 7,0 phút)",
        "504 giây (~ 8,4 phút)",
        "280 giây (~ 4,7 phút)"
      ],
      "ans": 1,
      "correctText": "Đáp án B (420 giây)",
      "exp": "• Nhiệt lượng có ích để làm sôi nước:<div class='formula-box'><span class='math-sym'>Q<sub>ích</sub> = m · c · (t₂ - t₁) = 1,5 × 4200 × (100 - 20) = 504.000 J</span></div>• Điện năng tiêu thụ toàn phần:<div class='formula-box'><span class='math-sym'>A = Q<sub>ích</sub> / H = 504.<span class=\"fraction\"><span class=\"numerator\">000</span><span class=\"denominator\">0</span></span>,8 = 630.000 J</span></div>• Thời gian đun:<div class='formula-box'><span class='math-sym'>t = A / P = 630.<span class=\"fraction\"><span class=\"numerator\">000</span><span class=\"denominator\">1500</span></span> = 420 giây (7 phút)</span></div>"
    },
    {
      "type": "mcq",
      "q": "Thả một thỏi nhôm khối lượng 0,4 kg ở nhiệt độ 100°C vào bình nhiệt lượng kế chứa 0,8 kg nước ở 20°C. Bỏ qua hao phí nhiệt ra bình và môi trường. Cho c<sub>nhôm</sub> = 880 J/(kg·K), c<sub>nước</sub> = 4200 J/(kg·K). Nhiệt độ cân bằng t của hệ xấp xỉ bằng:",
      "opts": [
        "27,6°C",
        "32,4°C",
        "40,0°C",
        "58,2°C"
      ],
      "ans": 0,
      "correctText": "Đáp án A (27,6°C)",
      "exp": "Phương trình cân bằng nhiệt:<div class='formula-box'><span class='math-sym'>Q<sub>tỏa</sub> = Q<sub>thu</sub> ⇔ m<sub>Al</sub> · c<sub>Al</sub> · (100 - t) = m<sub>n</sub>ước · c<sub>nước</sub> · (t - 20)</span></div>Thay số: <span class='math-sym'>0,4 × 880 × (100 - t) = 0,8 × 4200 × (t - 20)</span><br>⇔ <span class='math-sym'>352(100 - t) = 3360(t - 20)</span><br>⇔ <span class='math-sym'>35200 - 352t = 3360t - 67200 ⟹ 3712t = 102400 ⟹ t ≈ 27,59°C</span>."
    },
    {
      "type": "tf",
      "q": "Trong thí nghiệm đo nhiệt dung riêng của nước sử dụng bình nhiệt lượng kế và dây nung điện trở (Vật Lí 12). Hãy xét tính Đúng/Sai của các thao tác thực hành sau:",
      "stmts": [
        "Cần khuấy nhẹ và đều nước liên tục để nhiệt độ trong toàn bộ khối chất lỏng phân bố đồng đều trước khi đọc số đo nhiệt độ.",
        "Nếu bỏ qua nhiệt lượng do vỏ bình nhiệt lượng kế và que khuấy hấp thụ, giá trị nhiệt dung riêng của nước thu được sẽ nhỏ hơn giá trị thực.",
        "Dùng nắp đậy xốp kín bình nhiệt lượng kế nhằm mục đích hạn chế sự thất thoát nhiệt do đối lưu và bay hơi ra ngoài không khí.",
        "Đo thời gian đun càng dài thì sai số mất mát nhiệt ra môi trường phòng càng giảm đi đáng kể."
      ],
      "ans": [
        true,
        false,
        true,
        false
      ],
      "correctText": "a) Đúng | b) Sai | c) Đúng | d) Sai",
      "exp": "• <b>Ý a [Đúng]:</b> Khuấy nhẹ đều tay để nhiệt lượng phân bố đồng nhất khắp khối chất lỏng.<br>• <b>Ý b [Sai]:</b> Vì <span class='math-sym'>P · t = Q<sub>nước</sub>ước + Q<sub>bình</sub>ình</span>. Nếu bỏ qua <span class='math-sym'>Q<sub>bình</sub>ình</span> mà coi <span class='math-sym'>P · t = m · c<sub>t</sub>ính · ΔT</span> thì kết quả tính ra <span class='math-sym'>c<sub>t</sub>ính = (P · t) / (m · ΔT) > c<sub>th</sub>ật</span> (bị lớn hơn).<br>• <b>Ý c [Đúng]:</b> Nắp xốp cách nhiệt hạn chế tối đa đối lưu và bay hơi.<br>• <b>Ý d [Sai]:</b> Đun càng lâu, lượng nhiệt rò rỉ ra môi trường càng tăng, sai số càng lớn."
    },
    {
      "type": "mcq",
      "hasGraph": true,
      "q": "Hình vẽ bên dưới là đồ thị biểu diễn sự phụ thuộc của nhiệt độ (T) theo thời gian đun (t) của hai chất lỏng (1) và (2) có cùng khối lượng m. Cả hai được cấp nhiệt từ hai nguồn hoàn toàn giống nhau có công suất không đổi P. Dựa vào đồ thị, kết luận nào sau đây đúng về tỉ số nhiệt dung riêng <span class=\"fraction\"><span class=\"numerator\">c₁</span><span class=\"denominator\">c₂</span></span>?",
      "opts": [
        "<span class=\"fraction\"><span class=\"numerator\">c₁</span><span class=\"denominator\">c₂</span></span> = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2</span></span>",
        "<span class=\"fraction\"><span class=\"numerator\">c₁</span><span class=\"denominator\">c₂</span></span> = 2",
        "<span class=\"fraction\"><span class=\"numerator\">c₁</span><span class=\"denominator\">c₂</span></span> = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">4</span></span>",
        "<span class=\"fraction\"><span class=\"numerator\">c₁</span><span class=\"denominator\">c₂</span></span> = 1"
      ],
      "ans": 0,
      "correctText": "Đáp án A (c₁/c₂ = 1/2)",
      "exp": "• Phương trình truyền nhiệt: <span class='math-sym'>Q = P · t = m · c · ΔT ⟹ ΔT = (P / (m · c)) · t</span><br>• Độ dốc (hệ số góc) của đồ thị:<div class='formula-box'><span class='math-sym'>k = tan(α) = <div class='fraction'><span class='numerator'>ΔT</span><span class='denominator'>t</span></div> = <div class='fraction'><span class='numerator'>P</span><span class='denominator'>m · c</span></div></span></div>Vì <span class='math-sym'>P</span> và <span class='math-sym'>m</span> như nhau nên hệ số góc <span class='math-sym'>k</span> tỉ lệ nghịch với nhiệt dung riêng <span class='math-sym'>c</span>.<br>• Từ đồ thị tại cùng thời điểm <span class='math-sym'>t₀</span>: đường (1) tăng <span class='math-sym'>2T₀</span> còn đường (2) tăng <span class='math-sym'>T₀</span> nên độ dốc <span class='math-sym'>k₁ = 2k₂</span>.<br>Do đó: <div class='formula-box'><span class='math-sym'><div class='fraction'><span class='numerator'>c₁</span><span class='denominator'>c₂</span></div> = <div class='fraction'><span class='numerator'>k₂</span><span class='denominator'>k₁</span></div> = <div class='fraction'><span class='numerator'>1</span><span class='denominator'>2</span></div></span></div>",
      "svgGraph": "<svg viewBox=\"0 0 440 250\" width=\"100%\" height=\"auto\" style=\"display:block;\">\n            <defs>\n              <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n                <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#94a3b8\" />\n              </marker>\n            </defs>\n            <line x1=\"50\" y1=\"50\" x2=\"400\" y2=\"50\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            <line x1=\"50\" y1=\"125\" x2=\"400\" y2=\"125\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            <line x1=\"220\" y1=\"200\" x2=\"220\" y2=\"30\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            \n            <line x1=\"50\" y1=\"200\" x2=\"410\" y2=\"200\" stroke=\"#94a3b8\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n            <line x1=\"50\" y1=\"200\" x2=\"50\" y2=\"20\" stroke=\"#94a3b8\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n            \n            <text x=\"415\" y=\"205\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\">t (s)</text>\n            <text x=\"32\" y=\"24\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\">T (°C)</text>\n            <text x=\"38\" y=\"215\" fill=\"#94a3b8\" font-size=\"14\">O</text>\n            <text x=\"215\" y=\"222\" fill=\"#cbd5e1\" font-size=\"13\">t₀</text>\n            <text x=\"18\" y=\"130\" fill=\"#cbd5e1\" font-size=\"13\">T₀</text>\n            <text x=\"10\" y=\"55\" fill=\"#cbd5e1\" font-size=\"13\">2T₀</text>\n\n            <line x1=\"50\" y1=\"200\" x2=\"220\" y2=\"50\" stroke=\"#f43f5e\" stroke-width=\"3.5\" />\n            <circle cx=\"220\" cy=\"50\" r=\"5\" fill=\"#f43f5e\" />\n            <text x=\"228\" y=\"48\" fill=\"#f43f5e\" font-size=\"15\" font-weight=\"800\">Chất (1)</text>\n\n            <line x1=\"50\" y1=\"200\" x2=\"220\" y2=\"125\" stroke=\"#06b6d4\" stroke-width=\"3.5\" />\n            <circle cx=\"220\" cy=\"125\" r=\"5\" fill=\"#06b6d4\" />\n            <text x=\"228\" y=\"125\" fill=\"#06b6d4\" font-size=\"15\" font-weight=\"800\">Chất (2)</text>\n          </svg>"
    },
    {
      "type": "drag",
      "q": "Điền các thuật ngữ thích hợp vào chỗ trống để làm rõ cơ chế điều hòa khí hậu của các vùng ven biển:",
      "text": "Các khu vực duyên hải ven biển thường có khí hậu ôn hòa hơn sâu trong đất liền vì đại dương đóng vai trò như một [blank] khổng lồ. Nhờ nước có nhiệt dung riêng [blank], đại dương hấp thụ bớt năng lượng vào mùa hè giúp nhiệt độ không tăng quá cao, đồng thời [blank] nhiệt lượng vào mùa đông làm giảm bớt độ giá rét.",
      "words": [
        "bộ ổn nhiệt",
        "nguồn phát điện",
        "rất lớn",
        "rất bé",
        "tỏa dần",
        "hấp thụ thêm"
      ],
      "ans": [
        0,
        2,
        4
      ],
      "correctText": "1: bộ ổn nhiệt | 2: rất lớn | 3: tỏa dần",
      "exp": "Nước biển có nhiệt dung riêng rất lớn (<span class='math-sym'>c ≈ 4180 J/(kg·K)</span>) giúp điều hòa khí hậu vùng bờ biển: mùa hè tích trữ nhiệt làm giảm độ nóng bức, mùa đông tỏa dần lượng nhiệt dự trữ làm ấm không khí xung quanh."
    }
  ],
  "5": [
    {
      "type": "mcq",
      "q": "Theo chương trình Vật Lí 12, nhiệt nóng chảy riêng của một chất rắn kết tinh là:",
      "opts": [
        "Nhiệt lượng cần cung cấp cho 1 kg chất đó để chuyển hoàn toàn từ thể rắn sang thể lỏng ở nhiệt độ nóng chảy.",
        "Nhiệt lượng cần thiết để làm tăng nhiệt độ của 1 kg chất rắn thêm 1 K.",
        "Nhiệt lượng tỏa ra khi làm hóa hơi hoàn toàn một đơn vị khối lượng chất lỏng.",
        "Nhiệt độ mà tại đó mạng tinh thể của chất rắn bắt đầu bị phá vỡ hoàn toàn."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Định nghĩa SGK:</b> Nhiệt nóng chảy riêng (ký hiệu <span class='math-sym'>λ</span>) của một chất là nhiệt lượng cần thiết để <b>1 kg</b> chất đó chuyển hoàn toàn từ thể rắn sang thể lỏng ở nhiệt độ nóng chảy.<br>• Công thức xác định:<div class='formula-box'><span class='math-sym'>λ = <div class='fraction'><span class='numerator'>Q</span><span class='denominator'>m</span></div></span></div>• Đơn vị chuẩn trong hệ SI là: <b style='color:#38bdf8;'>J/kg</b>."
    },
    {
      "type": "mcq",
      "q": "Biết nhiệt nóng chảy riêng của nước đá là λ ≈ 3,34 × 10⁵ J/kg. Ý nghĩa thực tiễn của con số này là:",
      "opts": [
        "Cần cung cấp nhiệt lượng 3,34 × 10⁵ J để làm nóng chảy hoàn toàn 1 kg nước đá ở 0°C thành nước ở 0°C.",
        "Mỗi khi 1 kg nước đá hạ nhiệt độ xuống 1°C thì nó sẽ tỏa ra năng lượng 3,34 × 10⁵ J.",
        "Nhiệt lượng tỏa ra khi đun sôi 1 kg nước đá từ 0°C đến 100°C là 3,34 × 10⁵ J.",
        "Để nâng nhiệt độ của 1 kg nước đá từ 0°C lên 1°C cần cung cấp 3,34 × 10⁵ J."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Đại lượng <span class='math-sym'>λ = 3,34 × 10⁵ J/kg</span> biểu thị: Cần truyền một nhiệt lượng bằng <b>3,34 × 10⁵ Jun</b> cho 1 kg nước đá ở đúng 0°C để phá vỡ toàn bộ cấu trúc mạng tinh thể băng và chuyển hoàn toàn thành nước lỏng ở 0°C."
    },
    {
      "type": "tf",
      "q": "Khi khảo sát hiện tượng nóng chảy và nhiệt nóng chảy riêng của các chất, hãy xác định tính Đúng/Sai của từng phát biểu sau:",
      "stmts": [
        "Trong suốt quá trình nóng chảy ở áp suất chuẩn, nhiệt độ của khối chất rắn kết tinh không thay đổi dù liên tục nhận nhiệt.",
        "Nhiệt lượng nhận vào trong quá trình nóng chảy chủ yếu làm tăng thế năng tương tác giữa các phân tử để phá hủy mạng tinh thể.",
        "Chất rắn vô định hình (nhựa, thủy tinh) cũng có giá trị nhiệt nóng chảy riêng xác định như kim loại.",
        "Khi 1 kg chất lỏng đông đặc hoàn toàn ở nhiệt độ đông đặc thì nó tỏa ra môi trường nhiệt lượng đúng bằng nhiệt nóng chảy riêng λ của nó."
      ],
      "ans": [
        true,
        true,
        false,
        true
      ],
      "correctText": "a) Đúng | b) Đúng | c) Sai | d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> Chất rắn kết tinh giữ nhiệt độ không đổi trong suốt thời gian nóng chảy.<br>• <b>Ý b [Đúng]:</b> Động năng phân tử không đổi (nhiệt độ không đổi), toàn bộ nhiệt lượng dùng để tăng thế năng phân tử phá vỡ mạng tinh thể.<br>• <b>Ý c [Sai]:</b> Chất rắn vô định hình không có nhiệt độ nóng chảy xác định nên không có khái niệm nhiệt nóng chảy riêng xác định.<br>• <b>Ý d [Đúng]:</b> Quá trình đông đặc là quá trình ngược lại của nóng chảy, tỏa nhiệt <span class='math-sym'>Q<sub>tỏa</sub> = λ · m</span>."
    },
    {
      "type": "match",
      "q": "Ghép từng hiện tượng thực tiễn (Cột A) với bản chất nhiệt động lực học tương ứng (Cột B):",
      "colA": [
        "Cho các viên nước đá vào cốc nước giải khát làm nước lạnh đi rất nhanh",
        "Vào những ngày tuyết tan ở xứ lạnh, nhiệt độ không khí lại hạ thấp buốt giá hơn khi tuyết rơi",
        "Thợ kim hoàn nung chảy vàng rồi rót vào khuôn để chế tác trang sức",
        "Mỏ hàn nhiệt làm nóng chảy hợp kim thiếc để gắn chặt chân linh kiện vào bo mạch"
      ],
      "colB": [
        "Nước đá thu một nhiệt lượng nóng chảy rất lớn (334 kJ/kg) từ nước giải khát",
        "Tuyết tan thu nhiệt nóng chảy cực lớn từ môi trường không khí xung quanh làm khí quyển lạnh buốt",
        "Cung cấp nhiệt nóng chảy phá vỡ mạng tinh thể kim loại chuyển sang thể lỏng định hình khuôn",
        "Hợp kim hàn có nhiệt độ nóng chảy thấp dễ chuyển lỏng rồi đông đặc cố định mối nối"
      ],
      "ans": [
        0,
        1,
        2,
        3
      ],
      "correctText": "1 - A | 2 - B | 3 - C | 4 - D",
      "exp": "• <b>1 ghép A:</b> Nước đá thu <span class='math-sym'>Q = λ · m</span> rất lớn làm mát nước giải khát cấp tốc.<br>• <b>2 ghép B:</b> Tuyết tan là quá trình thu nhiệt lượng khổng lồ từ không khí xung quanh.<br>• <b>3 ghép C:</b> Nung chảy vàng để chuyển thể lỏng rót khuôn.<br>• <b>4 ghép D:</b> Chì/thiếc hàn nóng chảy nhanh để liên kết mạch điện tử."
    },
    {
      "type": "drag",
      "q": "Chọn từ khóa trong khung và chạm vào ô trống tương ứng để hoàn thiện công thức và nội dung về nhiệt nóng chảy:",
      "text": "Nhiệt lượng cần cung cấp cho khối lượng m của chất rắn ở nhiệt độ nóng chảy để nó nóng chảy hoàn toàn được tính bằng công thức: [blank] = λ · m. Trong đó λ là nhiệt nóng chảy riêng phụ thuộc vào [blank] của chất. Quá trình ngược lại của sự nóng chảy là sự [blank], trong đó vật sẽ [blank] nhiệt lượng.",
      "words": [
        "Q",
        "ΔU",
        "bản chất",
        "khối lượng",
        "đông đặc",
        "tỏa ra",
        "thu vào"
      ],
      "ans": [
        0,
        2,
        4,
        5
      ],
      "correctText": "1: Q | 2: bản chất | 3: đông đặc | 4: tỏa ra",
      "exp": "<b>Công thức tính nhiệt lượng nóng chảy:</b><br><div class='formula-box'><span class='math-sym'>Q = λ · m</span></div>Hệ số <span class='math-sym'>λ</span> đặc trưng cho bản chất của chất làm vật.<br>Quá trình đông đặc tỏa ra nhiệt lượng có độ lớn bằng <span class='math-sym'>λ · m</span>."
    },
    {
      "type": "mcq",
      "q": "Cần cung cấp một nhiệt lượng bao nhiêu để làm nóng chảy hoàn toàn 1,5 kg nước đá ở nhiệt độ 0°C? Cho biết nhiệt nóng chảy riêng của nước đá là λ = 3,34 × 10⁵ J/kg.",
      "opts": [
        "5,01 × 10⁵ J (501 kJ)",
        "2,23 × 10⁵ J (223 kJ)",
        "6,68 × 10⁵ J (668 kJ)",
        "3,34 × 10⁵ J (334 kJ)"
      ],
      "ans": 0,
      "correctText": "Đáp án A (501 kJ)",
      "exp": "• Nhiệt lượng nóng chảy:<div class='formula-box'><span class='math-sym'>Q = λ · m = 3,34 × 10⁵ × 1,5 = 5,01 × 10⁵ J = 501 kJ</span></div>"
    },
    {
      "type": "mcq",
      "q": "Cần cung cấp tổng nhiệt lượng bao nhiêu để làm chuyển 2,0 kg nước đá từ nhiệt độ -10°C thành nước lỏng hoàn toàn ở 0°C? Cho biết nhiệt dung riêng của nước đá c<sub>đá</sub> = 2100 J/(kg·K), nhiệt nóng chảy riêng của nước đá λ = 3,34 × 10⁵ J/kg.",
      "opts": [
        "710 kJ",
        "668 kJ",
        "42 kJ",
        "752 kJ"
      ],
      "ans": 0,
      "correctText": "Đáp án A (710 kJ)",
      "exp": "• Giai đoạn 1: Nâng nhiệt độ nước đá từ -10°C lên 0°C:<div class='formula-box'><span class='math-sym'>Q₁ = m · c<sub>đá</sub> · Δt = 2,0 × 2100 × (0 - (-10)) = 42.000 J = 42 kJ</span></div>• Giai đoạn 2: Làm nóng chảy hoàn toàn nước đá ở 0°C:<div class='formula-box'><span class='math-sym'>Q₂ = m · λ = 2,0 × 3,34 × 10⁵ = 668.000 J = 668 kJ</span></div>• Tổng nhiệt lượng cần thiết:<div class='formula-box'><span class='math-sym'>Q = Q₁ + Q₂ = 42 + 668 = 710 kJ</span></div>"
    },
    {
      "type": "mcq",
      "hasGraph": true,
      "q": "Hình vẽ dưới đây là đồ thị biểu diễn sự thay đổi nhiệt độ theo thời gian khi nung nóng một mẫu chì khối lượng m = 0,5 kg bằng nguồn nhiệt có công suất không đổi P = 500 W. Giai đoạn chì nóng chảy diễn ra ở nhiệt độ 327°C và kéo dài trong khoảng thời gian Δt = 25 giây (từ giây thứ 15 đến giây thứ 40). Bỏ qua hao phí nhiệt ra môi trường. Nhiệt nóng chảy riêng của chì xác định từ đồ thị là:",
      "opts": [
        "2,5 × 10⁴ J/kg",
        "5,0 × 10⁴ J/kg",
        "1,25 × 10⁴ J/kg",
        "2,5 × 10⁵ J/kg"
      ],
      "ans": 0,
      "correctText": "Đáp án A (2,5 × 10⁴ J/kg)",
      "exp": "• Nhiệt lượng nguồn cấp trong giai đoạn nóng chảy:<div class='formula-box'><span class='math-sym'>Q = P · Δt = 500 × 25 = 12.500 J</span></div>• Nhiệt nóng chảy riêng của chì:<div class='formula-box'><span class='math-sym'>λ = <div class='fraction'><span class='numerator'>Q</span><span class='denominator'>m</span></div> = <div class='fraction'><span class='numerator'>12500</span><span class='denominator'>0,5</span></div> = 25.000 J/kg = 2,5 × 10⁴ J/kg</span></div>",
      "svgGraph": "<svg viewBox=\"0 0 440 260\" width=\"100%\" height=\"auto\" style=\"display:block;\">\n            <defs>\n              <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n                <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#94a3b8\" />\n              </marker>\n            </defs>\n            <!-- Lưới mờ -->\n            <line x1=\"50\" y1=\"180\" x2=\"380\" y2=\"180\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            <line x1=\"50\" y1=\"110\" x2=\"380\" y2=\"110\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            <line x1=\"140\" y1=\"210\" x2=\"140\" y2=\"40\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            <line x1=\"280\" y1=\"210\" x2=\"280\" y2=\"40\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            \n            <!-- Trục tọa độ -->\n            <line x1=\"50\" y1=\"210\" x2=\"400\" y2=\"210\" stroke=\"#94a3b8\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n            <line x1=\"50\" y1=\"210\" x2=\"50\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n            \n            <text x=\"405\" y=\"215\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\">t (s)</text>\n            <text x=\"25\" y=\"25\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\">T (°C)</text>\n            <text x=\"36\" y=\"225\" fill=\"#94a3b8\" font-size=\"14\">O</text>\n            \n            <!-- Giá trị trục -->\n            <text x=\"18\" y=\"185\" fill=\"#cbd5e1\" font-size=\"13\">27°</text>\n            <text x=\"12\" y=\"115\" fill=\"#cbd5e1\" font-size=\"13\">327°</text>\n            <text x=\"132\" y=\"228\" fill=\"#cbd5e1\" font-size=\"13\">15</text>\n            <text x=\"272\" y=\"228\" fill=\"#cbd5e1\" font-size=\"13\">40</text>\n\n            <!-- Đường đặc tuyến -->\n            <line x1=\"50\" y1=\"180\" x2=\"140\" y2=\"110\" stroke=\"#06b6d4\" stroke-width=\"3.5\" />\n            <circle cx=\"50\" cy=\"180\" r=\"4\" fill=\"#06b6d4\" />\n            \n            <line x1=\"140\" y1=\"110\" x2=\"280\" y2=\"110\" stroke=\"#f43f5e\" stroke-width=\"4\" />\n            <circle cx=\"140\" cy=\"110\" r=\"5\" fill=\"#f43f5e\" />\n            <circle cx=\"280\" cy=\"110\" r=\"5\" fill=\"#f43f5e\" />\n\n            <line x1=\"280\" y1=\"110\" x2=\"360\" y2=\"55\" stroke=\"#10b981\" stroke-width=\"3.5\" />\n            <circle cx=\"360\" cy=\"55\" r=\"4\" fill=\"#10b981\" />\n\n            <!-- Nhãn -->\n            <text x=\"175\" y=\"98\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"800\">Δt = 25s (Nóng chảy)</text>\n          </svg>"
    },
    {
      "type": "tf",
      "q": "Trong thí nghiệm thực hành đo nhiệt nóng chảy riêng của nước đá bằng nhiệt lượng kế (Vật Lí 12), hãy xét tính Đúng/Sai của các thao tác thực hành sau:",
      "stmts": [
        "Trước khi thả các viên nước đá vào nhiệt lượng kế, cần dùng giấy thấm sạch lớp nước bám bên ngoài bề mặt từng viên đá.",
        "Khối lượng nước đá tan được tính chính xác bằng hiệu số khối lượng của bình nhiệt lượng kế sau khi đá tan hết trừ đi khối lượng bình ban đầu.",
        "Cần khuấy nước liên tục và mạnh tay để nước đá va đập vỡ vụn đẩy nhanh quá trình tan.",
        "Nhiệt lượng tỏa ra từ nước ấm và bình nhiệt lượng kế đóng vai trò cung cấp nhiệt nóng chảy cho khối nước đá."
      ],
      "ans": [
        true,
        true,
        false,
        true
      ],
      "correctText": "a) Đúng | b) Đúng | c) Sai | d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> Phải thấm khô đá để chỉ có đá ở 0°C đi vào bình, tránh sai số do nước lỏng bám ngoài.<br>• <b>Ý b [Đúng]:</b> Cân bình sau khi tan hết trừ khối lượng ban đầu suy ra chính xác <span class='math-sym'>m<sub>đá</sub></span>.<br>• <b>Ý c [Sai]:</b> Chỉ khuấy <b>nhẹ và đều tay</b>; khuấy mạnh tay làm sinh công cơ học biến thành nhiệt gây sai số lớn.<br>• <b>Ý d [Đúng]:</b> Phương trình cân bằng nhiệt: <span class='math-sym'>Q<sub>tỏa</sub> (nước ấm + bình) = Q<sub>thu</sub> (nóng chảy + nước đá tan tăng nhiệt độ)</span>."
    },
    {
      "type": "mcq",
      "q": "Thả một cục nước đá khối lượng m₁ = 0,2 kg ở 0°C vào một bình nhiệt lượng kế chứa m₂ = 0,5 kg nước ở 30°C. Bỏ qua nhiệt dung của bình và mất mát nhiệt ra ngoài. Cho c<sub>nước</sub> = 4200 J/(kg·K), λ = 3,34 × 10⁵ J/kg. Hiện tượng và trạng thái cuối cùng của hệ là:",
      "opts": [
        "Nước đá tan hoàn toàn và nhiệt độ cân bằng cuối cùng xấp xỉ bằng 8,7°C.",
        "Nước đá không tan hết và nhiệt độ cân bằng dừng lại ở 0°C.",
        "Nước đá tan hoàn toàn và nhiệt độ cân bằng đạt 15,0°C.",
        "Nước đóng băng thêm và nhiệt độ hạ xuống dưới 0°C."
      ],
      "ans": 0,
      "correctText": "Đáp án A (Đá tan hết, t ≈ 8,7°C)",
      "exp": "• Nhiệt lượng nước tỏa ra tối đa khi hạ từ 30°C về 0°C:<div class='formula-box'><span class='math-sym'>Q<sub>tỏa</sub><sub>max</sub> = m₂ · c · (30 - 0) = 0,5 × 4200 × 30 = 63.000 J</span></div>• Nhiệt lượng cần để làm tan hoàn toàn 0,2 kg đá ở 0°C:<div class='formula-box'><span class='math-sym'>Q<sub>tan</sub> = m₁ · λ = 0,2 × 3,34 × 10⁵ = 66.800 J</span></div>• <i>Khoan đã!</i> Ta thấy <span class='math-sym'>Q<sub>tỏa</sub><sub>max</sub> (63.000 J) < Q<sub>tan</sub> (66.800 J)</span>!<br>Do đó nước hạ về 0°C mà nhiệt lượng tỏa ra vẫn chưa đủ để làm tan hết đá ⟹ <b>Đá không tan hết, hệ ở trạng thái cân bằng tại đúng 0°C</b>!<br>Khối lượng đá tan được: <span class='math-sym'>m<sub>tan</sub> = <span class=\"fraction\"><span class=\"numerator\">63000</span><span class=\"denominator\">334000</span></span> ≈ 0,1886 kg</span>. Còn dư <span class='math-sym'>~0,0114 kg</span> đá chưa tan.<br><i>Đáp án chính xác nhất là:</i> Đá không tan hết và nhiệt độ dừng lại ở 0°C."
    }
  ],
  "6": [
    {
      "type": "mcq",
      "q": "Theo định nghĩa trong chương trình Vật Lí 12, nhiệt hoá hơi riêng của một chất lỏng là:",
      "opts": [
        "Nhiệt lượng cần thiết để làm cho 1 kg chất lỏng đó hoá hơi hoàn toàn ở nhiệt độ sôi.",
        "Nhiệt lượng tỏa ra khi làm ngưng tụ hoàn toàn một thể tích hơi xác định.",
        "Nhiệt lượng cần cung cấp để 1 kg chất lỏng tăng nhiệt độ thêm 1°C khi đang sôi.",
        "Nhiệt độ mà tại đó các bọt khí bắt đầu nổi lên mãnh liệt trong lòng chất lỏng."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Định nghĩa SGK:</b> Nhiệt hoá hơi riêng (ký hiệu <span class='math-sym'>L</span>) của một chất lỏng là nhiệt lượng cần cung cấp cho <b>1 kg</b> chất lỏng đó để nó hoá hơi hoàn toàn ở nhiệt độ sôi.<br>• Công thức tính:<div class='formula-box'><span class='math-sym'>L = <div class='fraction'><span class='numerator'>Q</span><span class='denominator'>m</span></div></span></div>• Đơn vị chuẩn trong hệ SI là: <b style='color:#38bdf8;'>J/kg</b>."
    },
    {
      "type": "mcq",
      "q": "Sự khác nhau căn bản nhất giữa quá trình 'Bay hơi' và quá trình 'Sôi' của chất lỏng là:",
      "opts": [
        "Bay hơi diễn ra ở mọi nhiệt độ và chỉ xảy ra trên bề mặt chất lỏng; còn sự sôi chỉ xảy ra ở nhiệt độ sôi xác định và diễn ra đồng thời ở cả trong lòng lẫn trên mặt thoáng.",
        "Bay hơi cần cung cấp nhiệt lượng còn sự sôi thì tự phát tỏa nhiệt ra môi trường.",
        "Bay hơi làm khối lượng chất lỏng tăng lên còn sự sôi làm thể tích khối chất lỏng co lại.",
        "Bay hơi chỉ xảy ra đối với nước ngọt, còn sự sôi chỉ xảy ra với dung dịch nước muối."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>So sánh chuẩn SGK:</b><br>- <i>Sự bay hơi:</i> Xảy ra ở <b>mọi nhiệt độ</b>, chỉ diễn ra trên <b>bề mặt thoáng</b> của chất lỏng.<br>- <i>Sự sôi:</i> Là trường hợp hoá hơi đặc biệt, chỉ xảy ra tại <b>nhiệt độ sôi xác định</b> (ở một áp suất ngoài nhất định), diễn ra <b>ở cả trong lòng</b> (hình thành bọt khí) và <b>trên bề mặt thoáng</b>."
    },
    {
      "type": "tf",
      "q": "Khi khảo sát các đặc tính của nhiệt hoá hơi riêng và quá trình sôi của chất lỏng, hãy xác định tính Đúng/Sai của từng phát biểu sau:",
      "stmts": [
        "Trong suốt thời gian chất lỏng sôi ở áp suất không đổi, nhiệt độ của chất lỏng giữ nguyên không đổi.",
        "Nhiệt độ sôi của chất lỏng tăng lên khi áp suất trên mặt thoáng chất lỏng tăng lên.",
        "Trên đỉnh núi Phan Xi Păng (áp suất khí quyển thấp hơn 1 atm), nước tinh khiết sôi ở nhiệt độ cao hơn 100°C.",
        "Nước có nhiệt hoá hơi riêng rất lớn (xấp xỉ 2,26 × 10⁶ J/kg), lớn hơn nhiều so với nhiệt nóng chảy riêng của nước đá."
      ],
      "ans": [
        true,
        true,
        false,
        true
      ],
      "correctText": "a) Đúng | b) Đúng | c) Sai | d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> Trong suốt thời gian sôi, nhiệt độ chất lỏng giữ cố định.<br>• <b>Ý b [Đúng]:</b> Áp suất mặt thoáng tăng thì nhiệt độ sôi tăng (nguyên lí nồi áp suất).<br>• <b>Ý c [Sai]:</b> Lên núi cao áp suất giảm ⟹ nhiệt độ sôi của nước <b>giảm xuống dưới 100°C</b> (khoảng 88°C - 90°C).<br>• <b>Ý d [Đúng]:</b> <span class='math-sym'>L<sub>n</sub>ước ≈ 2,26 × 10⁶ J/kg</span> gấp gần 7 lần nhiệt nóng chảy riêng <span class='math-sym'>λ_đá ≈ 3,34 × 10⁵ J/kg</span>."
    },
    {
      "type": "match",
      "q": "Ghép từng hiện tượng thực tế (Cột A) với nguyên lí nhiệt động học tương ứng (Cột B):",
      "colA": [
        "Bị bỏng hơi nước 100°C thường gây tổn thương sâu và nguy hiểm hơn bỏng nước sôi 100°C",
        "Cơ thể người toát mồ hôi vào mùa hè giúp duy trì thân nhiệt ổn định 37°C",
        "Tưới nước lên sân gạch hoặc mái tôn vào trưa hè làm mát không khí xung quanh",
        "Nồi áp suất nấu chín và ninh nhừ thức ăn nhanh hơn nhiều so với nồi thường"
      ],
      "colB": [
        "Hơi nước ngưng tụ trên da tỏa thêm một nhiệt lượng hoá hơi khổng lồ (2,26 × 10⁶ J/kg)",
        "Mồ hôi bay hơi thu nhiệt lượng lớn từ bề mặt da làm mát cơ thể",
        "Nước trên sân bay hơi thu nhiệt từ mặt đất và không khí xung quanh",
        "Áp suất hơi cao trong nồi kín làm nhiệt độ sôi của nước tăng lên trên 100°C (115°C - 120°C)"
      ],
      "ans": [
        0,
        1,
        2,
        3
      ],
      "correctText": "1 - A | 2 - B | 3 - C | 4 - D",
      "exp": "• <b>1 ghép A:</b> Hơi nước 100°C ngưng tụ tỏa nhiệt hoá hơi cực lớn <span class='math-sym'>L · m</span> làm bỏng sâu.<br>• <b>2 ghép B:</b> Mồ hôi bay hơi thu nhiệt lượng lớn từ da giúp hạ nhiệt cơ thể.<br>• <b>3 ghép C:</b> Nước tưới bay hơi thu nhiệt của sân gạch và không khí.<br>• <b>4 ghép D:</b> Nồi áp suất tăng áp suất làm nước sôi ở 120°C giúp thức ăn chín nhanh."
    },
    {
      "type": "drag",
      "q": "Chọn từ khóa trong khung và chạm vào ô trống tương ứng để hoàn thiện nội dung và công thức nhiệt hoá hơi:",
      "text": "Nhiệt lượng cần cung cấp cho khối lượng m của chất lỏng ở nhiệt độ sôi để nó hoá hơi hoàn toàn được xác định bởi công thức: [blank] = L · m. Trong đó L là nhiệt hoá hơi riêng phụ thuộc vào [blank] của chất lỏng. Ở cấp độ vi mô, năng lượng này dùng để thắng [blank] giữa các phân tử và thực hiện [blank] dãn nở chống áp suất ngoài.",
      "words": [
        "Q",
        "Δp",
        "bản chất",
        "nhiệt độ",
        "lực hút",
        "công",
        "động năng"
      ],
      "ans": [
        0,
        2,
        4,
        5
      ],
      "correctText": "1: Q | 2: bản chất | 3: lực hút | 4: công",
      "exp": "<b>Nội dung vật lí về nhiệt hoá hơi:</b><br><div class='formula-box'><span class='math-sym'>Q = L · m</span></div>Nhiệt hoá hơi riêng <span class='math-sym'>L</span> phụ thuộc bản chất chất lỏng.<br>Năng lượng cung cấp dùng để: (1) Thắng lực hút liên kết phân tử và (2) Thực hiện công dãn nở thể tích chống lại áp suất ngoài."
    },
    {
      "type": "mcq",
      "q": "Cần cung cấp một nhiệt lượng bao nhiêu để làm hoá hơi hoàn toàn 0,8 kg nước đang sôi ở 100°C trong ấm? Cho biết nhiệt hoá hơi riêng của nước là L = 2,26 × 10⁶ J/kg.",
      "opts": [
        "1,808 × 10⁶ J (1808 kJ)",
        "2,825 × 10⁶ J (2825 kJ)",
        "1,130 × 10⁶ J (1130 kJ)",
        "2,260 × 10⁶ J (2260 kJ)"
      ],
      "ans": 0,
      "correctText": "Đáp án A (1808 kJ)",
      "exp": "• Nhiệt lượng hoá hơi:<div class='formula-box'><span class='math-sym'>Q = L · m = 2,26 × 10⁶ × 0,8 = 1,808 × 10⁶ J = 1808 kJ</span></div>"
    },
    {
      "type": "mcq",
      "q": "Một ấm đun nước bằng điện có công suất hữu ích P = 1130 W dùng để đun nước. Sau khi nước trong ấm đạt nhiệt độ sôi 100°C, người ta để ấm tiếp tục sôi trong thời gian t = 4 phút (240 giây). Khối lượng nước đã hoá hơi thoát ra khỏi ấm trong khoảng thời gian này là:",
      "opts": [
        "0,12 kg (120 g)",
        "0,24 kg (240 g)",
        "0,06 kg (60 g)",
        "0,18 kg (180 g)"
      ],
      "ans": 0,
      "correctText": "Đáp án A (0,12 kg = 120 g)",
      "exp": "• Nhiệt lượng ấm cung cấp khi nước đang sôi:<div class='formula-box'><span class='math-sym'>Q = P · t = 1130 × 240 = 271.200 J</span></div>• Khối lượng nước đã hoá hơi:<div class='formula-box'><span class='math-sym'>m = <div class='fraction'><span class='numerator'>Q</span><span class='denominator'>L</span></div> = <div class='fraction'><span class='numerator'>271200</span><span class='denominator'>2,26 × 10⁶</span></div> = 0,12 kg = 120 g</span></div>"
    },
    {
      "type": "mcq",
      "hasGraph": true,
      "q": "Hình vẽ bên dưới là đồ thị ghi nhận khối lượng m (gam) của ấm và nước đang sôi theo thời gian đun t (phút) bằng cân điện tử kỹ thuật số. Biết công suất nhiệt cấp liên tục là P = 750 W không đổi. Trong khoảng thời gian từ t₁ = 2 phút đến t₂ = 6 phút, khối lượng giảm từ m₁ = 600 g xuống m₂ = 520 g. Nhiệt hoá hơi riêng của nước xác định từ số liệu đồ thị này là:",
      "opts": [
        "2,25 × 10⁶ J/kg",
        "2,40 × 10⁶ J/kg",
        "2,10 × 10⁶ J/kg",
        "2,50 × 10⁶ J/kg"
      ],
      "ans": 0,
      "correctText": "Đáp án A (2,25 × 10⁶ J/kg)",
      "exp": "• Thời gian khảo sát: <span class='math-sym'>Δt = 6 - 2 = 4 phút = 240 giây</span>.<br>• Nhiệt lượng ấm cung cấp:<div class='formula-box'><span class='math-sym'>Q = P · Δt = 750 × 240 = 180.000 J</span></div>• Độ giảm khối lượng nước hoá hơi: <span class='math-sym'>Δm = 600 - 520 = 80 g = 0,08 kg</span>.<br>• Nhiệt hoá hơi riêng tính được:<div class='formula-box'><span class='math-sym'>L = <div class='fraction'><span class='numerator'>Q</span><span class='denominator'>Δm</span></div> = <div class='fraction'><span class='numerator'>180000</span><span class='denominator'>0,08</span></div> = 2.250.000 J/kg = 2,25 × 10⁶ J/kg</span></div>",
      "svgGraph": "<svg viewBox=\"0 0 440 260\" width=\"100%\" height=\"auto\" style=\"display:block;\">\n            <defs>\n              <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n                <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#94a3b8\" />\n              </marker>\n            </defs>\n            <!-- Lưới mờ -->\n            <line x1=\"50\" y1=\"80\" x2=\"380\" y2=\"80\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            <line x1=\"50\" y1=\"140\" x2=\"380\" y2=\"140\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            <line x1=\"130\" y1=\"210\" x2=\"130\" y2=\"40\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            <line x1=\"290\" y1=\"210\" x2=\"290\" y2=\"40\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n            \n            <!-- Trục tọa độ -->\n            <line x1=\"50\" y1=\"210\" x2=\"400\" y2=\"210\" stroke=\"#94a3b8\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n            <line x1=\"50\" y1=\"210\" x2=\"50\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n            \n            <text x=\"405\" y=\"215\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\">t (phút)</text>\n            <text x=\"25\" y=\"25\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"700\">m (gam)</text>\n            <text x=\"36\" y=\"225\" fill=\"#94a3b8\" font-size=\"14\">O</text>\n            \n            <!-- Giá trị trục -->\n            <text x=\"18\" y=\"85\" fill=\"#cbd5e1\" font-size=\"13\">600</text>\n            <text x=\"18\" y=\"145\" fill=\"#cbd5e1\" font-size=\"13\">520</text>\n            <text x=\"125\" y=\"228\" fill=\"#cbd5e1\" font-size=\"13\">2</text>\n            <text x=\"285\" y=\"228\" fill=\"#cbd5e1\" font-size=\"13\">6</text>\n\n            <!-- Đường giảm khối lượng tuyến tính -->\n            <line x1=\"130\" y1=\"80\" x2=\"290\" y2=\"140\" stroke=\"#06b6d4\" stroke-width=\"3.5\" />\n            <circle cx=\"130\" cy=\"80\" r=\"5\" fill=\"#f43f5e\" />\n            <circle cx=\"290\" cy=\"140\" r=\"5\" fill=\"#f43f5e\" />\n\n            <!-- Nhãn Δm -->\n            <text x=\"175\" y=\"100\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"800\">Δm = 80g</text>\n            <text x=\"170\" y=\"195\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"700\">Δt = 4 phút</text>\n          </svg>"
    },
    {
      "type": "tf",
      "q": "Trong thí nghiệm đo nhiệt hoá hơi riêng của nước bằng ấm điện đun sôi đặt trên đĩa cân điện tử (Vật Lí 12), hãy xét tính Đúng/Sai của các thao tác thực hành sau:",
      "stmts": [
        "Chỉ bắt đầu bấm giờ đo sự thay đổi khối lượng sau khi nước trong ấm đã sôi đều và ổn định ở 100°C.",
        "Cần mở nắp ấm đun để hơi nước tự do bay thoát ra ngoài không khí phòng.",
        "Nếu đậy kín nắp ấm có lỗ thông hơi hẹp khiến hơi nước ngưng tụ trên nắp chảy ngược trở lại ấm, giá trị L tính được sẽ nhỏ hơn giá trị thực tế.",
        "Điện năng tiêu thụ được xác định thông qua số đo của oát kế (hoặc ampe kế và vôn kế) và đồng hồ bấm giây."
      ],
      "ans": [
        true,
        true,
        false,
        true
      ],
      "correctText": "a) Đúng | b) Đúng | c) Sai | d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> Phải chờ nước sôi ổn định 100°C để toàn bộ nhiệt cấp chỉ dùng cho việc hoá hơi.<br>• <b>Ý b [Đúng]:</b> Mở nắp hoặc dùng ống dẫn hơi thoát ra ngoài không để ngưng tụ rơi lại cân.<br>• <b>Ý c [Sai]:</b> Hơi nước ngưng tụ rơi lại ấm làm độ giảm khối lượng <span class='math-sym'>Δm</span> đo được nhỏ hơn thực tế ⟹ <span class='math-sym'>L = Q / Δm</span> sẽ bị <b>lớn hơn giá trị thực</b>.<br>• <b>Ý d [Đúng]:</b> Đo công suất bằng oát kế và thời gian bằng đồng hồ bấm giây để tính <span class='math-sym'>Q = P · t</span>."
    },
    {
      "type": "mcq",
      "q": "Cần cung cấp tổng nhiệt lượng bao nhiêu để đun 1,0 kg nước từ 20°C đến sôi ở 100°C và làm hoá hơi 20% lượng nước đó? Cho c<sub>nước</sub> = 4200 J/(kg·K), L = 2,26 × 10⁶ J/kg. Bỏ qua hao phí nhiệt ra môi trường.",
      "opts": [
        "7,88 × 10⁵ J (788 kJ)",
        "3,36 × 10⁵ J (336 kJ)",
        "4,52 × 10⁵ J (452 kJ)",
        "9,12 × 10⁵ J (912 kJ)"
      ],
      "ans": 0,
      "correctText": "Đáp án A (788 kJ)",
      "exp": "• Nhiệt lượng làm tăng nhiệt độ 1 kg nước từ 20°C lên 100°C:<div class='formula-box'><span class='math-sym'>Q₁ = m · c · (100 - 20) = 1,0 × 4200 × 80 = 336.000 J = 336 kJ</span></div>• Khối lượng nước hoá hơi: <span class='math-sym'>m<sub>h</sub>ơi = 20% × 1,0 = 0,2 kg</span>.<br>• Nhiệt lượng làm hoá hơi 0,2 kg nước sôi:<div class='formula-box'><span class='math-sym'>Q₂ = m<sub>h</sub>ơi · L = 0,2 × 2,26 × 10⁶ = 452.000 J = 452 kJ</span></div>• Tổng nhiệt lượng cần cung cấp:<div class='formula-box'><span class='math-sym'>Q = Q₁ + Q₂ = 336 + 452 = 788 kJ = 7,88 × 10⁵ J</span></div>"
    }
  ],
  "7": [
    {
      "type": "mcq",
      "q": "Trong một hệ nhiệt động lực học cô lập hoàn toàn chỉ gồm các vật trao đổi nhiệt và cơ năng với nhau, phát biểu nào sau đây thể hiện đúng định luật bảo toàn năng lượng?",
      "opts": [
        "Tổng đại số độ biến thiên nội năng của tất cả các vật trong hệ cô lập luôn bằng 0: ∑ ΔU<sub>i</sub> = 0.",
        "Nhiệt lượng của các vật nóng luôn lớn hơn nhiệt lượng mà các vật lạnh thu vào.",
        "Hệ có thể tự phát sinh công mà không tiêu hao bất kì dạng năng lượng nào.",
        "Nội năng của mỗi vật riêng lẻ trong hệ luôn không đổi theo thời gian."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Nguyên lí bảo toàn:</b> Trong một hệ cô lập (không trao đổi năng lượng với bên ngoài), năng lượng chỉ truyền từ vật này sang vật khác hoặc chuyển hóa giữa các dạng: <span class='math-sym'>∑ ΔU<sub>i</sub> = 0</span>.<br>• Khi chỉ có trao đổi nhiệt đơn thuần: <span class='math-sym'>∑ Q<sub>i</sub> = 0 ⟺ Q<sub>tỏa</sub> = Q<sub>thu</sub></span>."
    },
    {
      "type": "mcq",
      "q": "Hiệu suất nhiệt (H) của một thiết bị đun nước dùng điện được định nghĩa chuẩn xác bằng:",
      "opts": [
        "Tỉ số giữa nhiệt lượng có ích dùng để làm nóng và sôi nước với toàn bộ điện năng tiêu thụ: H = <span class=\"fraction\"><span class=\"numerator\">Q<sub>ích</sub></span><span class=\"denominator\">A</span></span>.",
        "Tỉ số giữa nhiệt lượng hao phí tỏa ra ngoài môi trường với nhiệt lượng có ích.",
        "Tỉ số giữa điện năng tiêu thụ với nhiệt dung riêng của nước.",
        "Tỉ số giữa khối lượng nước trong ấm với thời gian đun nước sôi."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Định nghĩa hiệu suất:</b><div class='formula-box'><span class='math-sym'>H = <div class='fraction'><span class='numerator'>Q<sub>ích</sub></span><span class='denominator'>A<sub>to</sub>àn phần</span></div> = <div class='fraction'><span class='numerator'>m · c · Δt</span><span class='denominator'>P · t</span></div></span></div>Luôn có <span class='math-sym'>H < 1</span> (hay <span class='math-sym'>H < 100%</span>) do luôn có mất mát nhiệt ra vỏ ấm và không khí."
    },
    {
      "type": "tf",
      "q": "Thả một thỏi đồng khối lượng m₁ = 0,5 kg ở nhiệt độ 100°C vào nhiệt lượng kế chứa m₂ = 0,8 kg nước ở 20°C. Bỏ qua trao đổi nhiệt với bình và không khí. Cho c<sub>đồng</sub> = 380 J/(kg·K), c<sub>nước</sub> = 4200 J/(kg·K). Hãy xét tính Đúng/Sai của các nhận định:",
      "stmts": [
        "Nhiệt lượng do thỏi đồng tỏa ra bằng đúng nhiệt lượng mà khối nước thu vào.",
        "Nhiệt độ cân bằng của hệ lớn hơn 50°C.",
        "Nội năng của thỏi đồng giảm đi một lượng đúng bằng độ tăng nội năng của khối nước.",
        "Nhiệt độ cân bằng của hệ đạt xấp xỉ 24,3°C."
      ],
      "ans": [
        true,
        false,
        true,
        true
      ],
      "correctText": "a) Đúng | b) Sai | c) Đúng | d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> Hệ cô lập nên <span class='math-sym'>Q<sub>tỏa</sub> = Q<sub>thu</sub></span>.<br>• <b>Ý b [Sai] & Ý d [Đúng]:</b> Phương trình cân bằng nhiệt:<div class='formula-box'><span class='math-sym'>0,5 × 380 × (100 - t) = 0,8 × 4200 × (t - 20)</span></div>⇔ <span class='math-sym'>190(100 - t) = 3360(t - 20) ⟹ 3550t = 86100 ⟹ t ≈ 24,25°C</span> (< 50°C).<br>• <b>Ý c [Đúng]:</b> Vì <span class='math-sym'>ΔU<sub>đồng</sub> = Q<sub>tỏa</sub> < 0</span> và <span class='math-sym'>ΔU<sub>n</sub>ước = Q<sub>thu</sub> > 0</span>, độ biến thiên nội năng tổng cộng <span class='math-sym'>ΔU = 0</span>."
    },
    {
      "type": "match",
      "q": "Một khối nước đá khối lượng m ở -10°C được cung cấp nhiệt liên tục đến khi chuyển hoàn toàn thành hơi nước ở 100°C. Ghép từng giai đoạn (Cột A) với công thức tính nhiệt lượng tương ứng (Cột B):",
      "colA": [
        "Giai đoạn 1: Nâng nhiệt độ nước đá từ -10°C lên 0°C",
        "Giai đoạn 2: Nước đá nóng chảy hoàn toàn ở 0°C",
        "Giai đoạn 3: Nâng nhiệt độ nước từ 0°C lên 100°C",
        "Giai đoạn 4: Hoá hơi hoàn toàn nước ở 100°C"
      ],
      "colB": [
        "Q = m · c<sub>đá</sub> · (0 - (-10))",
        "Q = m · λ",
        "Q = m · c<sub>nước</sub> · (100 - 0)",
        "Q = m · L"
      ],
      "ans": [
        0,
        1,
        2,
        3
      ],
      "correctText": "1 - A | 2 - B | 3 - C | 4 - D",
      "exp": "• <b>1 ghép A:</b> Tăng nhiệt độ chất rắn: <span class='math-sym'>Q₁ = m · c<sub>đá</sub> · Δt</span>.<br>• <b>2 ghép B:</b> Chuyển thể rắn ➔ lỏng ở 0°C: <span class='math-sym'>Q₂ = m · λ</span>.<br>• <b>3 ghép C:</b> Tăng nhiệt độ chất lỏng: <span class='math-sym'>Q₃ = m · c<sub>nước</sub> · Δt</span>.<br>• <b>4 ghép D:</b> Chuyển thể lỏng ➔ hơi ở 100°C: <span class='math-sym'>Q₄ = m · L</span>."
    },
    {
      "type": "drag",
      "q": "Chọn từ khóa trong khung và chạm vào ô trống tương ứng để hoàn thiện nội dung phương trình cân bằng nhiệt:",
      "text": "Khi có nhiều vật trao đổi nhiệt trong một hệ cô lập, tổng nhiệt lượng do các vật [blank] ra luôn bằng tổng nhiệt lượng do các vật [blank] vào. Nếu tính cả nhiệt lượng hao phí truyền ra môi trường ngoài thì: Q<sub>to</sub>àn phần = Q<sub>ích</sub> + [blank]. Hiệu suất của quá trình luôn [blank] 100%.",
      "words": [
        "tỏa",
        "thu",
        "Q<sub>hao</sub> phí",
        "nhỏ hơn",
        "lớn hơn",
        "A<sub>ích</sub>"
      ],
      "ans": [
        0,
        1,
        2,
        3
      ],
      "correctText": "1: tỏa | 2: thu | 3: Q<sub>hao</sub> phí | 4: nhỏ hơn",
      "exp": "<b>Phương trình cân bằng nhiệt và hao phí:</b><br><div class='formula-box'><span class='math-sym'>Q<sub>tỏa</sub> = Q<sub>thu</sub></span></div>Khi có hao phí: <span class='math-sym'>Q<sub>cung</sub> cấp = Q<sub>ích</sub> + Q<sub>hao</sub> phí</span>, do đó <span class='math-sym'>H = Q<sub>ích</sub> / Q<sub>cung</sub> cấp < 100%</span>."
    },
    {
      "type": "mcq",
      "q": "Dùng một ấm điện có hiệu suất nhiệt H = 80% để đun m = 2,0 kg nước từ 25°C đến khi sôi ở 100°C. Biết c<sub>nước</sub> = 4200 J/(kg·K) và giá tiền điện là 2500 đồng/kWh. Số tiền điện phải trả cho một lần đun này xấp xỉ là:",
      "opts": [
        "547 đồng",
        "438 đồng",
        "685 đồng",
        "820 đồng"
      ],
      "ans": 0,
      "correctText": "Đáp án A (~ 547 đồng)",
      "exp": "• Nhiệt lượng có ích làm sôi nước:<div class='formula-box'><span class='math-sym'>Q<sub>ích</sub> = m · c · (100 - 25) = 2 × 4200 × 75 = 630.000 J</span></div>• Điện năng tiêu thụ thực tế của ấm:<div class='formula-box'><span class='math-sym'>A = <div class='fraction'><span class='numerator'>Q<sub>ích</sub></span><span class='denominator'>H</span></div> = <div class='fraction'><span class='numerator'>630000</span><span class='denominator'>0,8</span></div> = 787.500 J</span></div>• Đổi sang số điện (kWh):<div class='formula-box'><span class='math-sym'>A = <div class='fraction'><span class='numerator'>787500</span><span class='denominator'>3,6 × 10⁶</span></div> ≈ 0,21875 kWh</span></div>• Tiền điện: <span class='math-sym'>0,21875 × 2500 ≈ 546,875 đồng ≈ 547 đồng</span>."
    },
    {
      "type": "mcq",
      "q": "Thả m₁ = 0,1 kg nước đá ở 0°C vào m₂ = 0,4 kg nước ở 40°C đựng trong bình cách nhiệt. Bỏ qua trao đổi nhiệt với bình. Cho c<sub>nước</sub> = 4200 J/(kg·K), λ = 3,34 × 10⁵ J/kg. Nhiệt độ cân bằng t của hệ sau khi đá tan hết là:",
      "opts": [
        "16,1°C",
        "20,0°C",
        "12,5°C",
        "24,2°C"
      ],
      "ans": 0,
      "correctText": "Đáp án A (16,1°C)",
      "exp": "• Nhiệt lượng cần để làm nóng chảy hoàn toàn 0,1 kg đá:<div class='formula-box'><span class='math-sym'>Q<sub>tan</sub> = m₁ · λ = 0,1 × 3,34 × 10⁵ = 33.400 J</span></div>• Nhiệt lượng nước tỏa ra khi hạ từ 40°C về 0°C:<div class='formula-box'><span class='math-sym'>Q<sub>tỏa</sub><sub>max</sub> = 0,4 × 4200 × 40 = 67.200 J > 33.400 J</span></div>⟹ Đá tan hoàn toàn và nhiệt độ cân bằng <span class='math-sym'>t > 0°C</span>.<br>• Phương trình cân bằng nhiệt:<div class='formula-box'><span class='math-sym'>m₁ · λ + m₁ · c · (t - 0) = m₂ · c · (40 - t)</span></div>⇔ <span class='math-sym'>33400 + 0,1 × 4200 · t = 0,4 × 4200 · (40 - t)</span><br>⇔ <span class='math-sym'>33400 + 420t = 67200 - 1680t ⟹ 2100t = 33800 ⟹ t ≈ 16,095°C ≈ 16,1°C</span>."
    },
    {
      "type": "mcq",
      "hasGraph": true,
      "q": "Hình vẽ dưới đây biểu diễn đường đun nóng liên tục một khối chất tinh khiết khối lượng m = 1,0 kg bằng nguồn nhiệt công suất không đổi P = 1000 W. Giai đoạn nóng chảy diễn ra trong khoảng thời gian Δt₁ = 200 s; giai đoạn hoá hơi sôi diễn ra trong khoảng thời gian Δt₂ = 1200 s. Tỉ số giữa nhiệt hoá hơi riêng và nhiệt nóng chảy riêng (<span class=\"fraction\"><span class=\"numerator\">L</span><span class=\"denominator\">λ</span></span>) của chất này là:",
      "opts": [
        "<span class=\"fraction\"><span class=\"numerator\">L</span><span class=\"denominator\">λ</span></span> = 6",
        "<span class=\"fraction\"><span class=\"numerator\">L</span><span class=\"denominator\">λ</span></span> = 3",
        "<span class=\"fraction\"><span class=\"numerator\">L</span><span class=\"denominator\">λ</span></span> = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">6</span></span>",
        "<span class=\"fraction\"><span class=\"numerator\">L</span><span class=\"denominator\">λ</span></span> = 12"
      ],
      "ans": 0,
      "correctText": "Đáp án A (L/λ = 6)",
      "exp": "• Nhiệt nóng chảy riêng: <span class='math-sym'>λ = (P · Δt₁) / m</span>.<br>• Nhiệt hoá hơi riêng: <span class='math-sym'>L = (P · Δt₂) / m</span>.<br>• Lập tỉ số:<div class='formula-box'><span class='math-sym'><div class='fraction'><span class='numerator'>L</span><span class='denominator'>λ</span></div> = <div class='fraction'><span class='numerator'>Δt₂</span><span class='denominator'>Δt₁</span></div> = <div class='fraction'><span class='numerator'>1200</span><span class='denominator'>200</span></div> = 6</span></div>Nhiệt hoá hơi riêng của chất lớn gấp 6 lần nhiệt nóng chảy riêng.",
      "svgGraph": "<svg viewBox=\"0 0 480 260\" width=\"100%\" height=\"auto\" style=\"display:block;\">\n  <defs>\n    <marker id=\"arrow7\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#94a3b8\" />\n    </marker>\n  </defs>\n  <!-- Luoi mo -->\n  <line x1=\"50\" y1=\"170\" x2=\"440\" y2=\"170\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n  <line x1=\"50\" y1=\"90\" x2=\"440\" y2=\"90\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n  <line x1=\"90\" y1=\"220\" x2=\"90\" y2=\"40\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n  <line x1=\"160\" y1=\"220\" x2=\"160\" y2=\"40\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n  <line x1=\"220\" y1=\"220\" x2=\"220\" y2=\"40\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n  <line x1=\"410\" y1=\"220\" x2=\"410\" y2=\"40\" stroke=\"rgba(255,255,255,0.08)\" stroke-dasharray=\"4\"/>\n  \n  <!-- Truc toa do -->\n  <line x1=\"50\" y1=\"220\" x2=\"460\" y2=\"220\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow7)\"/>\n  <line x1=\"50\" y1=\"220\" x2=\"50\" y2=\"25\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arrow7)\"/>\n  \n  <text x=\"462\" y=\"224\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"700\">t (s)</text>\n  <text x=\"22\" y=\"26\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"700\">T (°C)</text>\n  <text x=\"38\" y=\"235\" fill=\"#94a3b8\" font-size=\"13\">O</text>\n  \n  <!-- Moc gia tri -->\n  <text x=\"18\" y=\"174\" fill=\"#cbd5e1\" font-size=\"12\">T₁</text>\n  <text x=\"18\" y=\"94\" fill=\"#cbd5e1\" font-size=\"12\">T₂</text>\n  <text x=\"82\" y=\"236\" fill=\"#cbd5e1\" font-size=\"11\">100</text>\n  <text x=\"150\" y=\"236\" fill=\"#cbd5e1\" font-size=\"11\">300</text>\n  <text x=\"210\" y=\"236\" fill=\"#cbd5e1\" font-size=\"11\">500</text>\n  <text x=\"398\" y=\"236\" fill=\"#cbd5e1\" font-size=\"11\">1700</text>\n\n  <!-- Duong dun nong lien tuc -->\n  <!-- Ran tang nhiet: 0 -> 100s -->\n  <line x1=\"50\" y1=\"210\" x2=\"90\" y2=\"170\" stroke=\"#06b6d4\" stroke-width=\"3\" />\n  <!-- Nong chay: 100 -> 300s (Dt1 = 200s) -->\n  <line x1=\"90\" y1=\"170\" x2=\"160\" y2=\"170\" stroke=\"#f43f5e\" stroke-width=\"4\" />\n  <circle cx=\"90\" cy=\"170\" r=\"4\" fill=\"#f43f5e\" />\n  <circle cx=\"160\" cy=\"170\" r=\"4\" fill=\"#f43f5e\" />\n  <!-- Long tang nhiet: 300 -> 500s -->\n  <line x1=\"160\" y1=\"170\" x2=\"220\" y2=\"90\" stroke=\"#06b6d4\" stroke-width=\"3\" />\n  <!-- Hoa hoi: 500 -> 1700s (Dt2 = 1200s) -->\n  <line x1=\"220\" y1=\"90\" x2=\"410\" y2=\"90\" stroke=\"#eab308\" stroke-width=\"4\" />\n  <circle cx=\"220\" cy=\"90\" r=\"4\" fill=\"#eab308\" />\n  <circle cx=\"410\" cy=\"90\" r=\"4\" fill=\"#eab308\" />\n  <!-- Hoi tang nhiet tiep -->\n  <line x1=\"410\" y1=\"90\" x2=\"445\" y2=\"50\" stroke=\"#10b981\" stroke-width=\"3\" />\n\n  <!-- Chu thich -->\n  <text x=\"96\" y=\"158\" fill=\"#f43f5e\" font-size=\"11\" font-weight=\"700\">Δt₁ = 200 s (Nóng chảy)</text>\n  <text x=\"240\" y=\"78\" fill=\"#eab308\" font-size=\"11\" font-weight=\"700\">Δt₂ = 1200 s (Hoá hơi sôi)</text>\n</svg>"
    },
    {
      "type": "tf",
      "q": "Khi tiến hành các phép đo thực nghiệm nhiệt học trong chương trình Vật Lí 12, hãy kiểm tra tính Đúng/Sai của các nhận định về sai số:",
      "stmts": [
        "Bình nhiệt lượng kế có vỏ xốp cách nhiệt dày nhằm giảm thiểu tối đa sai số do trao đổi nhiệt với không khí bên ngoài.",
        "Nếu trong công thức tính toán ta bỏ qua nhiệt lượng do que khuấy và nhiệt kế hấp thụ thì kết quả nhiệt dung riêng đo được sẽ lớn hơn giá trị thực tế.",
        "Chỉ cần đo một lần duy nhất là có thể kết luận chắc chắn giá trị chính xác tuyệt đối của đại lượng nhiệt học.",
        "Độ chia nhỏ nhất của nhiệt kế kỹ thuật số càng nhỏ thì sai số dụng cụ càng giảm."
      ],
      "ans": [
        true,
        true,
        false,
        true
      ],
      "correctText": "a) Đúng | b) Đúng | c) Sai | d) Đúng",
      "exp": "• <b>Ý a [Đúng]:</b> Vỏ xốp cách nhiệt hạn chế mất mát nhiệt qua đối lưu và dẫn nhiệt.<br>• <b>Ý b [Đúng]:</b> Vì <span class='math-sym'>P · t = Q<sub>nước</sub>ước + Q<sub>d</sub>ụng cụ</span>. Bỏ qua nhiệt lượng dụng cụ khiến phần nhiệt gán cho nước bị đội lên ⟹ <span class='math-sym'>c<sub>t</sub>ính > c<sub>th</sub>ực</span>.<br>• <b>Ý c [Sai]:</b> Cần đo lặp lại ít nhất 3 đến 5 lần và tính giá trị trung bình để loại trừ sai số ngẫu nhiên.<br>• <b>Ý d [Đúng]:</b> Sai số dụng cụ thường lấy bằng một nửa hoặc một độ chia nhỏ nhất."
    },
    {
      "type": "mcq",
      "q": "Một bếp gas công nghiệp sử dụng khí hoá lỏng LPG có năng suất tỏa nhiệt q = 46 × 10⁶ J/kg. Hiệu suất của bếp là H = 60%. Cần đốt cháy bao nhiêu gam gas LPG để đun sôi 5,0 kg nước từ 20°C và làm hoá hơi hoàn toàn 1,0 kg nước trong số đó? Cho c<sub>nước</sub> = 4200 J/(kg·K), L = 2,26 × 10⁶ J/kg.",
      "opts": [
        "143 gam",
        "86 gam",
        "238 gam",
        "172 gam"
      ],
      "ans": 0,
      "correctText": "Đáp án A (~ 143 gam)",
      "exp": "• Nhiệt lượng làm tăng 5 kg nước từ 20°C lên 100°C:<div class='formula-box'><span class='math-sym'>Q₁ = 5 × 4200 × (100 - 20) = 1.680.000 J</span></div>• Nhiệt lượng làm hoá hơi 1 kg nước sôi:<div class='formula-box'><span class='math-sym'>Q₂ = 1 × 2,26 × 10⁶ = 2.260.000 J</span></div>• Tổng nhiệt lượng có ích: <span class='math-sym'>Q<sub>ích</sub> = 1.680.000 + 2.260.000 = 3.940.000 J</span>.<br>• Nhiệt lượng toàn phần khí gas cần tỏa ra:<div class='formula-box'><span class='math-sym'>Q<sub>tp</sub> = <div class='fraction'><span class='numerator'>Q<sub>ích</sub></span><span class='denominator'>H</span></div> = <div class='fraction'><span class='numerator'>3940000</span><span class='denominator'>0,6</span></div> ≈ 6.566.667 J</span></div>• Khối lượng gas cần đốt cháy:<div class='formula-box'><span class='math-sym'>m<sub>gas</sub> = <div class='fraction'><span class='numerator'>Q<sub>tp</sub></span><span class='denominator'>q</span></div> = <div class='fraction'><span class='numerator'>6566667</span><span class='denominator'>46 × 10⁶</span></div> ≈ 0,14275 kg ≈ 143 gam</span></div>"
    }
  ],
  "8": [
    {
      "type": "mcq",
      "q": "Theo nội dung của thuyết động học phân tử chất khí, nhận định nào sau đây là <b>không chính xác</b>?",
      "opts": [
        "Chất khí được cấu tạo từ các phân tử có kích thước rất nhỏ so với khoảng cách giữa chúng.",
        "Các phân tử khí luôn chuyển động hỗn loạn không ngừng; nhiệt độ càng cao thì chuyển động càng nhanh.",
        "Khi chuyển động hỗn loạn, các phân tử khí va chạm vào nhau và va chạm vào thành bình gây nên áp suất.",
        "Lực tương tác hút và đẩy giữa các phân tử khí luôn có độ lớn cực đại ở mọi khoảng cách."
      ],
      "ans": 3,
      "correctText": "Đáp án D",
      "exp": "• <b>Theo thuyết động học phân tử:</b> Giữa các phân tử có lực hút và lực đẩy phân tử, nhưng khi khoảng cách giữa các phân tử rất lớn (như ở thể khí), lực tương tác phân tử là <b>rất yếu (có thể bỏ qua)</b>.<br>• Do đó nhận định D cho rằng lực tương tác luôn có độ lớn cực đại là hoàn toàn sai."
    },
    {
      "type": "mcq",
      "q": "Khái niệm <b>khí lí tưởng</b> trong vật lí được định nghĩa dựa trên những giả thuyết đơn giản hoá nào sau đây?",
      "opts": [
        "Các phân tử khí được coi là các chất điểm và chỉ tương tác với nhau khi va chạm đàn hồi.",
        "Chất khí không có khối lượng và không gây ra áp suất lên thành bình chứa.",
        "Các phân tử khí luôn đứng yên ở các vị trí cân bằng cố định trong không gian.",
        "Lực hút giữa các phân tử khí luôn lớn hơn lực đẩy ở mọi nhiệt độ."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Mô hình khí lí tưởng:</b><br>1. Thể tích của bản thân các phân tử khí không đáng kể so với thể tích bình chứa (coi phân tử là <i>chất điểm</i>).<br>2. Các phân tử khí chỉ tương tác với nhau khi <i>va chạm</i> (coi là va chạm đàn hồi)."
    },
    {
      "type": "mcq",
      "q": "Nguyên nhân trực tiếp dẫn tới <b>chuyển động Brown</b> của các hạt khói bụi hoặc hạt phấn hoa lơ lửng trong không khí là do:",
      "opts": [
        "Sự va chạm không cân bằng, ngẫu nhiên từ mọi phía của vô số các phân tử không khí chuyển động nhiệt vào hạt bụi.",
        "Trọng lực của Trái Đất thay đổi liên tục theo thời gian tác dụng lên hạt bụi.",
        "Lực từ trường của Trái Đất làm hạt bụi chuyển động theo đường xoắn ốc.",
        "Sự bốc hơi liên tục của các chất lỏng bám trên bề mặt hạt bụi."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Giải thích hiện tượng Brown:</b> Vì hạt bụi có kích thước rất nhỏ, trong từng khoảnh khắc ngắn, số phân tử khí va chạm vào hạt từ các phía là không bằng nhau.<br>• Hợp lực va chạm không cân bằng đã đẩy hạt bụi chuyển động dích dắc hỗn loạn ngẫu nhiên."
    },
    {
      "type": "tf",
      "q": "Xét các đặc điểm của mô hình khí lí tưởng và so sánh với khí thực. Mỗi nhận định sau đây là Đúng hay Sai?",
      "stmts": [
        "Khí thực ở điều kiện nhiệt độ cao và áp suất thấp tuân theo rất gần đúng các quy luật của khí lí tưởng.",
        "Trong mô hình khí lí tưởng, các phân tử khí chuyển động nhiệt hỗn loạn về mọi phương hướng với xác suất như nhau.",
        "Ở cùng điều kiện nhiệt độ và áp suất, mật độ phân tử của khí lí tưởng luôn gấp đôi mật độ phân tử khí thực.",
        "Khi nhiệt độ chất khí hạ xuống cực thấp hoặc áp suất tăng cực lớn, khí thực có thể ngưng tụ thành thể lỏng còn khí lí tưởng theo định nghĩa thì không bao giờ ngưng tụ."
      ],
      "ans": [
        true,
        true,
        false,
        true
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) SAI | d) ĐÚNG",
      "exp": "• <b>Ý a: ĐÚNG.</b> Ở áp suất thấp (phân tử ở xa nhau) và nhiệt độ cao (động năng lớn so với thế năng tương tác), khí thực coi gần đúng là khí lí tưởng.<br>• <b>Ý b: ĐÚNG.</b> Chuyển động nhiệt là đẳng hướng trong không gian.<br>• <b>Ý c: SAI.</b> Mật độ phân tử phụ thuộc vào p và T theo phương trình trạng thái, không có chuyện luôn gấp đôi.<br>• <b>Ý d: ĐÚNG.</b> Khí lí tưởng bỏ qua lực hút phân tử nên không bao giờ ngưng tụ thành chất lỏng."
    },
    {
      "type": "match",
      "q": "Hãy ghép nối từng thuật ngữ vật lí ở Cột A với bản chất hoặc đặc trưng tương ứng ở Cột B:",
      "colA": [
        "Chuyển động nhiệt",
        "Chất điểm (trong khí lí tưởng)",
        "Áp suất chất khí",
        "Chuyển động Brown"
      ],
      "colB": [
        "Gây ra do vô số va chạm đàn hồi của các phân tử khí lên mỗi đơn vị diện tích thành bình.",
        "Chuyển động hỗn loạn không ngừng của các hạt bụi/phấn hoa dưới tác dụng va chạm của phân tử môi trường.",
        "Chuyển động hỗn loạn của các phân tử chất, tốc độ trung bình phụ thuộc vào nhiệt độ.",
        "Coi kích thước phân tử rất nhỏ so với khoảng cách giữa chúng và kích thước bình chứa."
      ],
      "ans": [
        2,
        3,
        0,
        1
      ],
      "correctText": "1-C, 2-D, 3-A, 4-B",
      "exp": "• 1 ghép với C (Chuyển động nhiệt là chuyển động hỗn loạn phụ thuộc nhiệt độ).<br>• 2 ghép với D (Chất điểm mô tả kích thước phân tử rất nhỏ so với dung tích bình).<br>• 3 ghép với A (Áp suất khí là xung lượng va chạm lên một đơn vị diện tích thành bình).<br>• 4 ghép với B (Chuyển động Brown của hạt vi mô lơ lửng)."
    },
    {
      "type": "drag",
      "q": "Chọn từ/cụm từ thích hợp từ ngân hàng từ vựng để hoàn thành đoạn văn mô tả bản chất của áp suất chất khí:",
      "text": "Áp suất của chất khí tác dụng lên thành bình chứa là kết quả của vô số va chạm [0] của các phân tử khí lên thành bình. Khi nhiệt độ của khối khí càng [1], các phân tử khí chuyển động càng nhanh, tần số và xung lượng va chạm càng mạnh, dẫn tới áp suất chất khí tác dụng lên thành bình càng [2].",
      "words": [
        "đàn hồi",
        "cao",
        "lớn",
        "chậm",
        "thấp",
        "nhỏ"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "[0]: đàn hồi | [1]: cao | [2]: lớn",
      "exp": "• <b>Nguyên lí tạo áp suất:</b> Các va chạm được xem là <i>đàn hồi</i>. Khi nhiệt độ càng <i>cao</i>, tốc độ phân tử càng lớn thì áp suất tác dụng lên thành bình càng <i>lớn</i>."
    },
    {
      "type": "mcq",
      "q": "Một bình kín dung tích không đổi chứa một lượng khí lí tưởng ở nhiệt độ không đổi. Nếu bơm thêm khí vào bình sao cho mật độ phân tử khí tăng gấp 3 lần thì áp suất của khí trong bình sẽ:",
      "opts": [
        "Tăng gấp 3 lần.",
        "Giảm đi 3 lần.",
        "Không đổi vì thể tích bình và nhiệt độ không đổi.",
        "Tăng gấp 9 lần."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Công thức áp suất theo mật độ phân tử:</b> <span class=\"math-sym\">p</span> = <span class=\"fraction\"><span class=\"numerator\">2</span><span class=\"denominator\">3</span></span><span class=\"math-sym\">n</span><sub>0</sub><span class=\"math-sym\">E</span><sub>d</sub>.<br>• Vì nhiệt độ <span class=\"math-sym\">T</span> không đổi nên động năng trung bình không đổi. Mật độ phân tử <span class=\"math-sym\">n</span><sub>0</sub> tăng 3 lần thì áp suất <span class=\"math-sym\">p</span> tăng 3 lần."
    },
    {
      "type": "mcq",
      "q": "Khoảng cách trung bình giữa các phân tử của chất khí ở điều kiện nhiệt độ và áp suất tiêu chuẩn thường có độ lớn vào khoảng:",
      "opts": [
        "Lớn hơn kích thước của chính phân tử khoảng vài chục lần.",
        "Xấp xỉ bằng đường kính của phân tử.",
        "Nhỏ hơn đường kính của phân tử.",
        "Bằng hàng triệu lần kích thước bình chứa."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Ở điều kiện tiêu chuẩn, đường kính phân tử cỡ <span class=\"math-sym\">10</span><sup>-10</sup> m (0,1 nm), trong khi khoảng cách trung bình giữa các phân tử khí cỡ vài nm (gấp khoảng 20 - 50 lần kích thước phân tử)."
    },
    {
      "type": "tf",
      "svgGraph": "<svg viewBox=\"0 0 540 280\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <radialGradient id=\"particleGrad\" cx=\"40%\" cy=\"40%\" r=\"60%\">\n      <stop offset=\"0%\" stop-color=\"#38bdf8\"/>\n      <stop offset=\"100%\" stop-color=\"#0284c7\"/>\n    </radialGradient>\n    <radialGradient id=\"smokeGrad\" cx=\"35%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#fbbf24\"/>\n      <stop offset=\"100%\" stop-color=\"#d97706\"/>\n    </radialGradient>\n    <marker id=\"arrowB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n  </defs>\n  <rect width=\"540\" height=\"280\" rx=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"28\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">SƠ ĐỒ CHUYỂN ĐỘNG BROWN &amp; VA CHẠM PHÂN TỬ KHÍ</text>\n  \n  <!-- Bình chứa -->\n  <rect x=\"40\" y=\"45\" width=\"460\" height=\"215\" rx=\"8\" fill=\"none\" stroke=\"#64748b\" stroke-width=\"2.5\" stroke-dasharray=\"6,4\"/>\n  <text x=\"50\" y=\"65\" fill=\"#94a3b8\" font-size=\"12\">Thành bình chứa khí</text>\n  \n  <!-- Quỹ đạo zic-zac hạt khói -->\n  <polyline points=\"100,160 150,110 220,180 300,120 370,210 420,140\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2.5\" stroke-dasharray=\"4,3\"/>\n  <circle cx=\"100\" cy=\"160\" r=\"5\" fill=\"#f59e0b\"/>\n  <circle cx=\"150\" cy=\"110\" r=\"5\" fill=\"#f59e0b\"/>\n  <circle cx=\"220\" cy=\"180\" r=\"5\" fill=\"#f59e0b\"/>\n  <circle cx=\"300\" cy=\"120\" r=\"5\" fill=\"#f59e0b\"/>\n  <circle cx=\"370\" cy=\"210\" r=\"5\" fill=\"#f59e0b\"/>\n  <!-- Hạt khói hiện tại -->\n  <circle cx=\"420\" cy=\"140\" r=\"16\" fill=\"url(#smokeGrad)\" stroke=\"#fef08a\" stroke-width=\"2\"/>\n  <text x=\"420\" y=\"144\" fill=\"#0f172a\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Hạt khói</text>\n  \n  <!-- Các phân tử khí va chạm -->\n  <!-- Va chạm hạt khói -->\n  <line x1=\"470\" y1=\"110\" x2=\"438\" y2=\"132\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrowB)\"/>\n  <circle cx=\"475\" cy=\"105\" r=\"7\" fill=\"url(#particleGrad)\"/>\n  \n  <line x1=\"390\" y1=\"90\" x2=\"410\" y2=\"124\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrowB)\"/>\n  <circle cx=\"385\" cy=\"85\" r=\"7\" fill=\"url(#particleGrad)\"/>\n\n  <line x1=\"450\" y1=\"190\" x2=\"430\" y2=\"155\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrowB)\"/>\n  <circle cx=\"455\" cy=\"195\" r=\"7\" fill=\"url(#particleGrad)\"/>\n\n  <!-- Các phân tử khác bay hỗn loạn -->\n  <circle cx=\"120\" cy=\"80\" r=\"7\" fill=\"url(#particleGrad)\"/>\n  <line x1=\"120\" y1=\"80\" x2=\"145\" y2=\"70\" stroke=\"#38bdf8\" stroke-width=\"1.8\" marker-end=\"url(#arrowB)\"/>\n\n  <circle cx=\"180\" cy=\"220\" r=\"7\" fill=\"url(#particleGrad)\"/>\n  <line x1=\"180\" y1=\"220\" x2=\"195\" y2=\"245\" stroke=\"#38bdf8\" stroke-width=\"1.8\" marker-end=\"url(#arrowB)\"/>\n\n  <!-- Phân tử đập vào thành bình -->\n  <circle cx=\"70\" cy=\"190\" r=\"7\" fill=\"url(#particleGrad)\"/>\n  <line x1=\"70\" y1=\"190\" x2=\"44\" y2=\"190\" stroke=\"#f43f5e\" stroke-width=\"2\" marker-end=\"url(#arrowB)\"/>\n  <text x=\"80\" y=\"240\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">Va chạm đàn hồi gây áp suất p lên thành bình</text>\n</svg>",
      "q": "Quan sát hình vẽ mô phỏng chuyển động Brown và tương tác va chạm của các phân tử khí vào hạt lơ lửng và thành bình chứa. Đánh giá tính Đúng/Sai của các mệnh đề sau:",
      "stmts": [
        "Đường zic-zac màu vàng mô tả chính xác quỹ đạo chuyển động thực tế liên tục trong từng khoảng thời gian vô cùng bé của hạt khói.",
        "Nguyên nhân hạt khói đổi hướng chuyển động liên tục là do tại mỗi thời điểm lực va chạm tổng hợp từ các phân tử khí xung quanh là khác không.",
        "Nếu kích thước của hạt khói càng lớn thì hiện tượng chuyển động Brown càng quan sát thấy rõ rệt và chuyển động càng nhanh.",
        "Các va chạm của phân tử khí vào thành bình chứa làm xuất hiện áp suất chất khí lên thành bình."
      ],
      "ans": [
        false,
        true,
        false,
        true
      ],
      "correctText": "a) SAI | b) ĐÚNG | c) SAI | d) ĐÚNG",
      "exp": "• <b>Ý a: SAI.</b> Đường gấp khúc chỉ nối các vị trí quan sát được sau các khoảng thời gian gián đoạn nhất định, không phải quỹ đạo thực tế liên tục trong từng khoảnh khắc siêu vi mô.<br>• <b>Ý b: ĐÚNG.</b> Sự bất đối xứng của các cú va chạm ngẫu nhiên tạo ra hợp lực đẩy hạt đổi hướng liên tục.<br>• <b>Ý c: SAI.</b> Hạt càng lớn thì số va chạm từ mọi phía trung hòa lẫn nhau, chuyển động Brown càng khó quan sát (hạt bụi lớn sẽ đứng yên hoặc rơi xuống do trọng lực).<br>• <b>Ý d: ĐÚNG.</b> Áp suất chính là lực nén trung bình trên một đơn vị diện tích thành bình."
    },
    {
      "type": "mcq",
      "q": "Khi mở nắp một lọ nước hoa ở một góc trong phòng học kín gió, chỉ sau một khoảng thời gian ngắn, các bạn học sinh ngồi ở góc đối diện đều ngửi thấy mùi thơm. Hiện tượng này được giải thích chủ yếu là do:",
      "opts": [
        "Các phân tử nước hoa chuyển động hỗn loạn không ngừng và khuếch tán, xen lẫn vào khoảng trống giữa các phân tử không khí.",
        "Không khí trong phòng có lực hút tĩnh điện kéo các phân tử nước hoa lan tỏa khắp phòng.",
        "Các phân tử nước hoa chỉ chuyển động theo một hướng xác định từ nơi có nồng độ cao đến nơi có nồng độ thấp.",
        "Trọng lực của Trái Đất hút các phân tử nước hoa rơi xuống sàn và lan truyền phẳng dọc theo mặt đất."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Hiện tượng khuếch tán:</b> Theo mô hình động học phân tử chất khí, các phân tử nước hoa sau khi bay hơi sẽ chuyển động nhiệt hỗn loạn không ngừng về mọi phía, liên tục va chạm với các phân tử không khí và tự động lan tỏa xen kẽ vào các khoảng trống giữa các phân tử khí trong phòng.<br>• Quá trình này diễn ra hoàn toàn tự phát mà không cần có gió hay lực hút bên ngoài."
    }
  ],
  "9": [
    {
      "type": "mcq",
      "q": "Quá trình biến đổi trạng thái của một lượng khí xác định trong đó <b>nhiệt độ được giữ không đổi</b> được gọi là:",
      "opts": [
        "Quá trình đẳng nhiệt.",
        "Quá trình đẳng áp.",
        "Quá trình đẳng tích.",
        "Quá trình đoạn nhiệt."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Định nghĩa:</b> Quá trình biến đổi trạng thái trong đó nhiệt độ <span class=\"math-sym\">T</span> không đổi gọi là quá trình đẳng nhiệt.",
      "svgGraph": "<svg viewBox=\"0 0 460 210\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Graph 1: p-V -->\n  <g transform=\"translate(30, 20)\">\n    <line x1=\"20\" y1=\"160\" x2=\"180\" y2=\"160\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <polygon points=\"180,160 172,156 172,164\" fill=\"#94a3b8\"/>\n    <text x=\"185\" y=\"164\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"700\">V</text>\n    <line x1=\"20\" y1=\"160\" x2=\"20\" y2=\"10\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <polygon points=\"20,10 16,18 24,18\" fill=\"#94a3b8\"/>\n    <text x=\"15\" y=\"8\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"700\">p</text>\n    <text x=\"10\" y=\"172\" fill=\"#94a3b8\" font-size=\"11\">O</text>\n    <!-- Hyperbola T2 > T1 -->\n    <path d=\"M 35,40 Q 55,90 160,135\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n    <text x=\"165\" y=\"132\" fill=\"#f43f5e\" font-size=\"11\" font-weight=\"700\">T₂</text>\n    <path d=\"M 30,70 Q 45,115 150,150\" fill=\"none\" stroke=\"#06b6d4\" stroke-width=\"2.5\"/>\n    <text x=\"155\" y=\"148\" fill=\"#06b6d4\" font-size=\"11\" font-weight=\"700\">T₁</text>\n    <text x=\"95\" y=\"182\" fill=\"#f8fafc\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">Đồ thị p - V (Đường cong Hyperbol)</text>\n  </g>\n  <!-- Graph 2: p - 1/V -->\n  <g transform=\"translate(240, 20)\">\n    <line x1=\"20\" y1=\"160\" x2=\"180\" y2=\"160\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <polygon points=\"180,160 172,156 172,164\" fill=\"#94a3b8\"/>\n    <text x=\"185\" y=\"164\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"700\">1/V</text>\n    <line x1=\"20\" y1=\"160\" x2=\"20\" y2=\"10\" stroke=\"#94a3b8\" stroke-width=\"1.8\"/>\n    <polygon points=\"20,10 16,18 24,18\" fill=\"#94a3b8\"/>\n    <text x=\"15\" y=\"8\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"700\">p</text>\n    <text x=\"10\" y=\"172\" fill=\"#94a3b8\" font-size=\"11\">O</text>\n    <!-- Straight line through O -->\n    <line x1=\"20\" y1=\"160\" x2=\"160\" y2=\"45\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n    <text x=\"165\" y=\"45\" fill=\"#f43f5e\" font-size=\"11\" font-weight=\"700\">T₂</text>\n    <line x1=\"20\" y1=\"160\" x2=\"160\" y2=\"85\" stroke=\"#06b6d4\" stroke-width=\"2.5\"/>\n    <text x=\"165\" y=\"85\" fill=\"#06b6d4\" font-size=\"11\" font-weight=\"700\">T₁</text>\n    <text x=\"95\" y=\"182\" fill=\"#f8fafc\" font-size=\"11\" font-weight=\"700\" text-anchor=\"middle\">Đồ thị p theo 1/V (Đoạn thẳng)</text>\n  </g>\n</svg>"
    },
    {
      "type": "mcq",
      "q": "Biểu thức toán học nào sau đây mô tả đúng <b>Định luật Boyle</b> đối với một lượng khí lí tưởng xác định ở nhiệt độ không đổi?",
      "opts": [
        "p · V = hằng số.",
        "<span class=\"fraction\"><span class=\"numerator\">p</span><span class=\"denominator\">V</span></span> = hằng số.",
        "<span class=\"fraction\"><span class=\"numerator\">V</span><span class=\"denominator\">T</span></span> = hằng số.",
        "<span class=\"fraction\"><span class=\"numerator\">p</span><span class=\"denominator\">T</span></span> = hằng số."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Định luật Boyle:</b> Ở nhiệt độ không đổi, tích của áp suất <span class=\"math-sym\">p</span> và thể tích <span class=\"math-sym\">V</span> của một khối lượng khí xác định là một hằng số: <span class=\"math-sym\">p · V</span> = const."
    },
    {
      "type": "mcq",
      "q": "Một khối khí lí tưởng có thể tích ban đầu là 8,0 lít ở áp suất 1,5 bar. Nếu nén đẳng nhiệt khối khí này đến khi áp suất đạt 4,0 bar thì thể tích của khối khí khi đó là:",
      "opts": [
        "3,0 lít.",
        "2,5 lít.",
        "4,5 lít.",
        "6,0 lít."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Áp dụng định luật Boyle:</b> <span class=\"math-sym\">p</span><sub>1</sub><span class=\"math-sym\">V</span><sub>1</sub> = <span class=\"math-sym\">p</span><sub>2</sub><span class=\"math-sym\">V</span><sub>2</sub>.<br>• <span class=\"math-sym\">V</span><sub>2</sub> = <span class=\"fraction\"><span class=\"numerator\">p₁ · V₁</span><span class=\"denominator\">p₂</span></span> = <span class=\"fraction\"><span class=\"numerator\">1,5 × 8,0</span><span class=\"denominator\">4,0</span></span> = <b>3,0 lít</b>."
    },
    {
      "type": "tf",
      "q": "Xét một lượng khí lí tưởng nhất định thực hiện quá trình biến đổi đẳng nhiệt. Mỗi phát biểu sau đây là Đúng hay Sai?",
      "stmts": [
        "Khi thể tích khối khí giảm đi 4 lần thì áp suất của khí tăng lên 4 lần.",
        "Đường đẳng nhiệt trong hệ tọa độ (p, V) là một nhánh của đường cong hypebol.",
        "Trong hệ tọa độ (p, <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">V</span></span>), đường đẳng nhiệt là một đường thẳng song song với trục hoành.",
        "Đường đẳng nhiệt ứng với nhiệt độ cao hơn luôn nằm ở vị trí cao hơn đường đẳng nhiệt ứng với nhiệt độ thấp hơn trên giản đồ (p, V)."
      ],
      "ans": [
        true,
        true,
        false,
        true
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) SAI | d) ĐÚNG",
      "exp": "• <b>Ý a: ĐÚNG.</b> Vì <span class=\"math-sym\">p</span> tỉ lệ nghịch với <span class=\"math-sym\">V</span>.<br>• <b>Ý b: ĐÚNG.</b> Phương trình <span class=\"math-sym\">p</span> = const/<span class=\"math-sym\">V</span> có dạng hàm số <span class=\"math-sym\">y = <span class=\"fraction\"><span class=\"numerator\">a</span><span class=\"denominator\">x</span></span></span> (đường hypebol).<br>• <b>Ý c: SAI.</b> Vì <span class=\"math-sym\">p = const · (<span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">V</span></span>)</span> nên trong hệ <span class=\"math-sym\">(p, <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">V</span></span>)</span> nó là đoạn thẳng kéo dài đi qua gốc tọa độ O.<br>• <b>Ý d: ĐÚNG.</b> Ở cùng thể tích <span class=\"math-sym\">V</span>, nhiệt độ cao hơn thì áp suất lớn hơn nên đồ thị nằm trên."
    },
    {
      "type": "match",
      "q": "Hãy ghép dạng đồ thị ở Cột A với hệ tọa độ tương ứng của quá trình đẳng nhiệt ở Cột B:",
      "colA": [
        "Đường hypebol",
        "Đoạn thẳng kéo dài đi qua gốc tọa độ O",
        "Đoạn thẳng vuông góc với trục nhiệt độ T",
        "Đoạn thẳng song song với trục thể tích V"
      ],
      "colB": [
        "Giản đồ (p, T) trong quá trình đẳng nhiệt.",
        "Giản đồ (p, V) trong quá trình đẳng nhiệt.",
        "Giản đồ (p, <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">V</span></span>) trong quá trình đẳng nhiệt.",
        "Giản đồ (T, V) trong quá trình đẳng nhiệt."
      ],
      "ans": [
        1,
        2,
        0,
        3
      ],
      "correctText": "1-B, 2-C, 3-A, 4-D",
      "exp": "• 1 ghép với B (Hyperbol trên hệ p - V).<br>• 2 ghép với C (Tỉ lệ bậc nhất trên hệ p - <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">V</span></span>).<br>• 3 ghép với A (Đường thẳng đứng T = const trên hệ p - T).<br>• 4 ghép với D (Đường nằm ngang T = const trên hệ T - V)."
    },
    {
      "type": "drag",
      "q": "Điền từ/cụm từ thích hợp vào chỗ trống để hoàn thiện định luật Boyle:",
      "text": "Trong quá trình [0] của một lượng khí xác định, áp suất của khối khí [1] với thể tích của nó. Tích của áp suất và thể tích là một đại lượng [2].",
      "words": [
        "đẳng nhiệt",
        "tỉ lệ nghịch",
        "không đổi",
        "đẳng áp",
        "tỉ lệ thuận",
        "tăng dần"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "[0]: đẳng nhiệt | [1]: tỉ lệ nghịch | [2]: không đổi",
      "exp": "• <b>Phát biểu định luật Boyle:</b> Ở nhiệt độ không đổi (quá trình đẳng nhiệt), áp suất tỉ lệ nghịch với thể tích; tích <span class=\"math-sym\">p · V</span> không đổi."
    },
    {
      "type": "mcq",
      "q": "Một bọt khí nổi lên từ đáy một hồ nước sâu 10 m lên tới mặt nước. Coi nhiệt độ của nước là như nhau ở mọi độ sâu và áp suất khí quyển là 1,0 · 10⁵ Pa. Lấy g = 9,8 m/s² và khối lượng riêng của nước là 1000 kg/m³. Thể tích của bọt khí khi lên tới mặt nước so với ở đáy hồ sẽ:",
      "opts": [
        "Tăng gần gấp 2 lần.",
        "Giảm đi một nửa.",
        "Không đổi.",
        "Tăng gần gấp 4 lần."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Áp suất ở đáy hồ: <span class=\"math-sym\">p</span><sub>1</sub> = <span class=\"math-sym\">p</span><sub>0</sub> + <span class=\"math-sym\">ρgh</span> = 10⁵ + 1000 × 9,8 × 10 = 1,98 · 10⁵ Pa ≈ 2<span class=\"math-sym\">p</span><sub>0</sub>.<br>• Khi lên mặt nước, áp suất chỉ còn <span class=\"math-sym\">p</span><sub>2</sub> = <span class=\"math-sym\">p</span><sub>0</sub> = 1,0 · 10⁵ Pa.<br>• Vì nhiệt độ không đổi: <span class=\"math-sym\">V</span><sub>2</sub> = <span class=\"math-sym\">V</span><sub>1</sub> · (<span class=\"math-sym\">p</span><sub>1</sub>/<span class=\"math-sym\">p</span><sub>2</sub>) ≈ 2<span class=\"math-sym\">V</span><sub>1</sub> (thể tích bọt khí tăng xấp xỉ gấp đôi)."
    },
    {
      "type": "mcq",
      "q": "Trong động tác hít vào của con người, cơ hoành hạ xuống và các cơ liên sườn co lại làm thể tích lồng ngực (phổi) tăng lên. Dựa vào định luật Boyle (coi nhiệt độ cơ thể không đổi), hãy giải thích tại sao không khí từ môi trường ngoài lại tràn vào phổi?",
      "opts": [
        "Thể tích phổi tăng làm áp suất khí trong phổi giảm xuống thấp hơn áp suất khí quyển, khiến không khí ngoài tràn vào.",
        "Thể tích phổi tăng làm áp suất khí trong phổi tăng mạnh, tạo lực hút kéo không khí bên ngoài vào.",
        "Nhiệt độ trong phổi tăng đột ngột làm không khí bên ngoài bị hút vào để cân bằng nhiệt độ.",
        "Thể tích phổi tăng làm tăng khối lượng riêng của chất khí trong phổi tạo chênh lệch trọng lực."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Cơ chế hô hấp theo Định luật Boyle:</b> Quá trình hô hấp diễn ra ở nhiệt độ cơ thể không đổi (T = const). Khi hít vào, cơ hoành hạ xuống và các cơ liên sườn co lại làm tăng thể tích lồng ngực (V tăng). Theo định luật Boyle, áp suất khí trong phổi giảm xuống thấp hơn áp suất khí quyển (p < p<sub>kh</sub>í quyển), khiến không khí tự động tràn vào phổi.<br>• Khi thở ra, cơ hoành nâng lên làm giảm thể tích lồng ngực (V giảm), áp suất trong phổi tăng cao hơn bên ngoài (p > p<sub>kh</sub>í quyển), đẩy khí CO₂ ra ngoài."
    },
    {
      "type": "tf",
      "svgGraph": "<svg viewBox=\"0 0 540 280\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arr9\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#94a3b8\"/>\n    </marker>\n  </defs>\n  <rect width=\"540\" height=\"280\" rx=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"26\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">ĐỒ THỊ ĐƯỜNG ĐẲNG NHIỆT (ĐỊNH LUẬT BOYLE)</text>\n  \n  <!-- Trục tọa độ đồ thị 1: p - V -->\n  <g transform=\"translate(60, 40)\">\n    <text x=\"70\" y=\"10\" fill=\"#cbd5e1\" font-size=\"12\" font-weight=\"bold\">Hệ tọa độ (p, V)</text>\n    <line x1=\"20\" y1=\"190\" x2=\"190\" y2=\"190\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr9)\"/>\n    <line x1=\"20\" y1=\"190\" x2=\"20\" y2=\"20\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr9)\"/>\n    <text x=\"185\" y=\"208\" fill=\"#94a3b8\" font-size=\"12\">V</text>\n    <text x=\"6\" y=\"24\" fill=\"#94a3b8\" font-size=\"12\">p</text>\n    <text x=\"10\" y=\"205\" fill=\"#94a3b8\" font-size=\"11\">O</text>\n    \n    <!-- Hyperbol T1 -->\n    <path d=\"M 30,170 Q 55,70 170,45\" fill=\"none\" stroke=\"#06b6d4\" stroke-width=\"2.5\"/>\n    <text x=\"175\" y=\"48\" fill=\"#06b6d4\" font-size=\"12\" font-weight=\"bold\">T₁</text>\n    \n    <!-- Hyperbol T2 -->\n    <path d=\"M 45,180 Q 80,95 180,75\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n    <text x=\"185\" y=\"78\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">T₂</text>\n    \n    <text x=\"90\" y=\"220\" fill=\"#38bdf8\" font-size=\"12\" text-anchor=\"middle\">Đường cong hypebol</text>\n  </g>\n\n  <!-- Trục tọa độ đồ thị 2: p - 1/V -->\n  <g transform=\"translate(320, 40)\">\n    <text x=\"70\" y=\"10\" fill=\"#cbd5e1\" font-size=\"12\" font-weight=\"bold\">Hệ tọa độ (p, 1/V)</text>\n    <line x1=\"20\" y1=\"190\" x2=\"180\" y2=\"190\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr9)\"/>\n    <line x1=\"20\" y1=\"190\" x2=\"20\" y2=\"20\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr9)\"/>\n    <text x=\"175\" y=\"208\" fill=\"#94a3b8\" font-size=\"12\">1/V</text>\n    <text x=\"6\" y=\"24\" fill=\"#94a3b8\" font-size=\"12\">p</text>\n    <text x=\"10\" y=\"205\" fill=\"#94a3b8\" font-size=\"11\">O</text>\n    \n    <!-- Đường thẳng qua gốc O -->\n    <line x1=\"20\" y1=\"190\" x2=\"40\" y2=\"170\" stroke=\"#f43f5e\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n    <line x1=\"40\" y1=\"170\" x2=\"160\" y2=\"50\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n    <text x=\"165\" y=\"55\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">T₂</text>\n\n    <line x1=\"20\" y1=\"190\" x2=\"40\" y2=\"178\" stroke=\"#06b6d4\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n    <line x1=\"40\" y1=\"178\" x2=\"160\" y2=\"105\" stroke=\"#06b6d4\" stroke-width=\"2.5\"/>\n    <text x=\"165\" y=\"110\" fill=\"#06b6d4\" font-size=\"12\" font-weight=\"bold\">T₁</text>\n\n    <text x=\"85\" y=\"220\" fill=\"#38bdf8\" font-size=\"12\" text-anchor=\"middle\">Đoạn thẳng hướng về gốc O</text>\n  </g>\n</svg>",
      "q": "Cho đồ thị đường đẳng nhiệt của cùng một lượng khí lí tưởng ở hai nhiệt độ T₁ và T₂ như hình vẽ. Nhận định nào sau đây là Đúng hay Sai?",
      "stmts": [
        "Nhiệt độ tuyệt đối của chất khí ở trạng thái 2 lớn hơn trạng thái 1 (T₂ > T₁).",
        "Trên đồ thị (p, <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">V</span></span>), hệ số góc của đường thẳng ứng với T₂ lớn hơn đường thẳng ứng với T₁.",
        "Nếu giữ nguyên áp suất p, khi chuyển từ nhiệt độ T₁ sang T₂ thể tích của khối khí sẽ bị giảm đi.",
        "Định luật Boyle chỉ nghiệm đúng với các chất khí thực ở áp suất rất cao."
      ],
      "ans": [
        true,
        true,
        false,
        false
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) SAI | d) SAI",
      "exp": "• <b>Ý a: ĐÚNG.</b> Kẻ một đường thẳng <span class=\"math-sym\">V = hằng số</span> cắt 2 đường tại <span class=\"math-sym\">p</span><sub>2</sub> > <span class=\"math-sym\">p</span><sub>1</sub> ⇒ <span class=\"math-sym\">T</span><sub>2</sub> > <span class=\"math-sym\">T</span><sub>1</sub>.<br>• <b>Ý b: ĐÚNG.</b> <span class=\"math-sym\">p = (nRT) · (<span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">V</span></span>)</span>, hệ số góc tỉ lệ thuận với <span class=\"math-sym\">T</span> nên đường <span class=\"math-sym\">T</span><sub>2</sub> dốc hơn.<br>• <b>Ý c: SAI.</b> Cùng áp suất <span class=\"math-sym\">p</span>, nhiệt độ cao hơn thì thể tích <span class=\"math-sym\">V</span> phải lớn hơn.<br>• <b>Ý d: SAI.</b> Định luật chỉ nghiệm đúng ở áp suất thấp đến trung bình."
    },
    {
      "type": "mcq",
      "q": "Tại sao khi nén khí trong thí nghiệm kiểm chứng định luật Boyle, ta phải dịch chuyển pit-tông một cách thật chậm rãi?",
      "opts": [
        "Để nhiệt lượng sinh ra do ma sát và nén khí kịp truyền ra môi trường, đảm bảo nhiệt độ của khối khí không đổi.",
        "Để tránh làm vỡ áp kế đo áp suất gắn trên xilanh.",
        "Để các phân tử khí có đủ thời gian biến mất khỏi xilanh.",
        "Để thể tích khí luôn giữ cố định không đổi trong quá trình nén."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Kỹ năng thực hành:</b> Khi nén nhanh, công cơ học biến thành nội năng làm chất khí nóng lên (<span class=\"math-sym\">T</span> tăng, quá trình đoạn nhiệt).<br>• Do đó phải nén <b>rất chậm</b> để chất khí kịp trao đổi nhiệt với môi trường, giữ nhiệt độ <span class=\"math-sym\">T</span> ổn định."
    }
  ],
  "10": [
    {
      "type": "mcq",
      "q": "Quá trình biến đổi trạng thái của một lượng khí xác định trong đó <b>áp suất được giữ không đổi</b> được gọi là:",
      "opts": [
        "Quá trình đẳng áp.",
        "Quá trình đẳng nhiệt.",
        "Quá trình đẳng tích.",
        "Quá trình đoạn nhiệt."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Định nghĩa:</b> Quá trình biến đổi trạng thái khi áp suất <span class=\"math-sym\">p</span> không đổi gọi là quá trình đẳng áp."
    },
    {
      "type": "mcq",
      "q": "Hệ thức nào sau đây mô tả đúng mối quan hệ giữa thể tích V và nhiệt độ tuyệt đối T trong <b>Định luật Charles</b>?",
      "opts": [
        "<span class=\"fraction\"><span class=\"numerator\">V</span><span class=\"denominator\">T</span></span> = hằng số (hay <span class=\"fraction\"><span class=\"numerator\">V₁</span><span class=\"denominator\">T₁</span></span> = <span class=\"fraction\"><span class=\"numerator\">V₂</span><span class=\"denominator\">T₂</span></span>).",
        "V · T = hằng số.",
        "<span class=\"fraction\"><span class=\"numerator\">V</span><span class=\"denominator\">t</span></span> = hằng số (với t là nhiệt độ Celsius).",
        "p · V = hằng số."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Định luật Charles:</b> Trong quá trình đẳng áp của một lượng khí xác định, thể tích tỉ lệ thuận với nhiệt độ tuyệt đối: <span class=\"math-sym\">V / T</span> = const."
    },
    {
      "type": "mcq",
      "q": "Một khối khí lí tưởng có thể tích 4,5 lít ở nhiệt độ 27°C. Khi nung nóng đẳng áp khối khí đó đến nhiệt độ 127°C thì thể tích của khối khí sẽ là:",
      "opts": [
        "6,0 lít.",
        "5,5 lít.",
        "7,5 lít.",
        "9,0 lít."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Đổi sang thang Kelvin:</b><br>• <span class=\"math-sym\">T</span><sub>1</sub> = 27 + 273 = 300 K.<br>• <span class=\"math-sym\">T</span><sub>2</sub> = 127 + 273 = 400 K.<br>• <span class=\"math-sym\">V</span><sub>2</sub> = <span class=\"math-sym\">V</span><sub>1</sub> · <span class=\"fraction\"><span class=\"numerator\">T₂</span><span class=\"denominator\">T₁</span></span> = 4,5 × <span class=\"fraction\"><span class=\"numerator\">400</span><span class=\"denominator\">300</span></span> = <b>6,0 lít</b>."
    },
    {
      "type": "tf",
      "q": "Khi nghiên cứu về quá trình đẳng áp và thang nhiệt độ tuyệt đối Kelvin, mỗi khẳng định sau đây là Đúng hay Sai?",
      "stmts": [
        "Thể tích của một lượng khí xác định tỉ lệ thuận với nhiệt độ theo thang Celsius t (°C).",
        "Độ không tuyệt đối (0 K hay -273,15°C) là giới hạn nhiệt độ thấp nhất mà vật chất có thể tiến tới.",
        "Trên đồ thị (V, T), đường đẳng áp là đoạn thẳng có đường kéo dài đi qua gốc tọa độ O (0 K).",
        "Đối với hai đường đẳng áp của cùng một khối khí, đường nào có góc nghiêng lớn hơn so với trục nhiệt độ T sẽ ứng với áp suất nhỏ hơn."
      ],
      "ans": [
        false,
        true,
        true,
        true
      ],
      "correctText": "a) SAI | b) ĐÚNG | c) ĐÚNG | d) ĐÚNG",
      "exp": "• <b>Ý a: SAI.</b> Thể tích tỉ lệ thuận với nhiệt độ tuyệt đối <span class=\"math-sym\">T</span> (Kelvin), không phải nhiệt độ Celsius <span class=\"math-sym\">t</span>.<br>• <b>Ý b: ĐÚNG.</b> 0 K là nhiệt độ mà mọi chuyển động nhiệt phân tử lí thuyết dừng lại.<br>• <b>Ý c: ĐÚNG.</b> Đồ thị có dạng <span class=\"math-sym\">V = (const) · T</span>.<br>• <b>Ý d: ĐÚNG.</b> Hệ số góc <span class=\"math-sym\">k = <span class=\"fraction\"><span class=\"numerator\">nR</span><span class=\"denominator\">p</span></span></span>. Áp suất <span class=\"math-sym\">p</span> càng nhỏ thì hệ số góc <span class=\"math-sym\">k</span> càng lớn (đường dốc hơn)."
    },
    {
      "type": "match",
      "q": "Hãy ghép các thông số/công thức ở Cột A với ý nghĩa vật lí chuẩn xác ở Cột B:",
      "colA": [
        "V₁ / T₁ = V₂ / T₂",
        "T = t + 273,15",
        "0 K (-273,15°C)",
        "Giản đồ (V, t)"
      ],
      "colB": [
        "Đường đẳng áp cắt trục hoành tại điểm nhiệt độ không tuyệt đối.",
        "Độ không tuyệt đối, tại đó thể tích khí lí tưởng tiến dần về 0.",
        "Công thức chuyển đổi giữa thang nhiệt độ Celsius và thang Kelvin.",
        "Hệ thức định luật Charles cho quá trình đẳng áp."
      ],
      "ans": [
        3,
        2,
        1,
        0
      ],
      "correctText": "1-D, 2-C, 3-B, 4-A",
      "exp": "• 1 ghép với D (Định luật Charles).<br>• 2 ghép với C (Công thức đổi nhiệt độ sang Kelvin).<br>• 3 ghép với B (Ý nghĩa của độ không tuyệt đối).<br>• 4 ghép với A (Đặc điểm đường đẳng áp cắt trục hoành tại -273,15°C)."
    },
    {
      "type": "drag",
      "q": "Chọn từ thích hợp điền vào chỗ trống để làm sáng tỏ bản chất của định luật Charles:",
      "text": "Trong quá trình đẳng áp của một khối lượng khí xác định, thể tích của chất khí tỉ lệ thuận với [0]. Khi nhiệt độ tăng, các phân tử khí chuyển động nhanh hơn; để giữ cho [1] không đổi, chất khí buộc phải [2] để giảm mật độ va chạm trên mỗi đơn vị diện tích.",
      "words": [
        "nhiệt độ tuyệt đối",
        "áp suất",
        "giãn nở thể tích",
        "nhiệt độ Celsius",
        "co lại",
        "khối lượng riêng"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "[0]: nhiệt độ tuyệt đối | [1]: áp suất | [2]: giãn nở thể tích",
      "exp": "• <b>Bản chất vi mô:</b> Để áp suất giữ nguyên khi tốc độ phân tử tăng, thể tích phải <i>giãn nở</i> tương ứng."
    },
    {
      "type": "mcq",
      "q": "Một quả bóng bay chứa khí hidro để ngoài trời nắng to bị căng phồng lên và có thể bị nổ. Hiện tượng này được giải thích chủ yếu bằng:",
      "opts": [
        "Khi nhiệt độ tăng, khí trong bóng giãn nở làm tăng thể tích và áp suất lên màng bóng theo định luật Charles.",
        "Màng cao su của bóng bay bị co lại khi gặp nhiệt độ cao.",
        "Áp suất khí quyển bên ngoài quả bóng tăng đột ngột.",
        "Khí hidro phản ứng hóa học tự cháy với màng cao su."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Khi nhiệt độ ngoài trời tăng cao, khí bên trong nhận nhiệt và dãn nở đẳng áp hoặc tăng áp suất tác dụng lên thành cao su, vượt quá giới hạn đàn hồi gây nổ."
    },
    {
      "type": "mcq",
      "q": "Một quả bóng bàn vô tình bị giẫm bẹp một phần nhưng vỏ bóng chưa bị rách thủng. Khi nhúng quả bóng đó vào trong một cốc nước sôi, vỏ bóng phồng trở lại như cũ. Hiện tượng này được giải thích dựa trên cơ sở vật lí nào sau đây?",
      "opts": [
        "Nhiệt độ không khí bên trong bóng tăng lên làm khối khí dãn nở đẳng áp, tăng thể tích đẩy vỏ bóng phồng lại.",
        "Nước nóng thấm qua lớp vỏ nhựa làm tăng lượng phân tử khí chứa bên trong quả bóng bàn.",
        "Nhiệt độ cao làm vỏ bóng bàn bằng chất dẻo co rút mạnh ép không khí dồn vào tâm quả bóng.",
        "Áp suất của nước nóng bên ngoài ép đều vào vỏ bóng từ mọi phía làm phục hồi hình cầu ban đầu."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Ứng dụng Định luật Charles:</b> Khi nhúng bóng vào nước sôi, áp suất khí bên trong coi như xấp xỉ áp suất khí quyển (p ≈ const). Khi nhiệt độ tăng từ T₁ lên T₂, theo định luật Charles: <span class=\"fraction\"><span class=\"numerator\">V₁</span><span class=\"denominator\">T₁</span></span> = <span class=\"fraction\"><span class=\"numerator\">V₂</span><span class=\"denominator\">T₂</span></span> nên thể tích khí tăng tỉ lệ thuận, khí nở ra tạo áp lực đẩy vỏ bóng phồng căng trở lại như cũ.<br>• Lưu ý: Phương pháp này chỉ áp dụng thành công khi vỏ bóng bàn chưa bị thủng hoặc rách nứt."
    },
    {
      "type": "tf",
      "svgGraph": "<svg viewBox=\"0 0 540 280\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arr10\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#94a3b8\"/>\n    </marker>\n  </defs>\n  <rect width=\"540\" height=\"280\" rx=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"26\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">ĐỒ THỊ ĐƯỜNG ĐẲNG ÁP (ĐỊNH LUẬT CHARLES)</text>\n  \n  <!-- Giản đồ (V, T) Kelvin -->\n  <g transform=\"translate(60, 40)\">\n    <text x=\"60\" y=\"10\" fill=\"#cbd5e1\" font-size=\"12\" font-weight=\"bold\">Hệ tọa độ (V, T) Kelvin</text>\n    <line x1=\"20\" y1=\"190\" x2=\"190\" y2=\"190\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr10)\"/>\n    <line x1=\"20\" y1=\"190\" x2=\"20\" y2=\"20\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr10)\"/>\n    <text x=\"185\" y=\"208\" fill=\"#94a3b8\" font-size=\"12\">T (K)</text>\n    <text x=\"6\" y=\"24\" fill=\"#94a3b8\" font-size=\"12\">V</text>\n    <text x=\"10\" y=\"205\" fill=\"#94a3b8\" font-size=\"11\">0 K</text>\n    \n    <!-- Đường p1 (nét đứt kéo dài qua O) -->\n    <line x1=\"20\" y1=\"190\" x2=\"55\" y2=\"155\" stroke=\"#10b981\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n    <line x1=\"55\" y1=\"155\" x2=\"175\" y2=\"35\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n    <text x=\"180\" y=\"40\" fill=\"#10b981\" font-size=\"12\" font-weight=\"bold\">p₁</text>\n\n    <!-- Đường đẳng áp p2 -->\n    <line x1=\"20\" y1=\"190\" x2=\"55\" y2=\"170\" stroke=\"#f59e0b\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n    <line x1=\"55\" y1=\"170\" x2=\"175\" y2=\"90\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n    <text x=\"180\" y=\"95\" fill=\"#f59e0b\" font-size=\"12\" font-weight=\"bold\">p₂</text>\n\n    <text x=\"90\" y=\"220\" fill=\"#38bdf8\" font-size=\"12\" text-anchor=\"middle\">Đoạn thẳng hướng về gốc 0 K</text>\n  </g>\n\n  <!-- Giản đồ (V, t) Celsius -->\n  <g transform=\"translate(310, 40)\">\n    <text x=\"60\" y=\"10\" fill=\"#cbd5e1\" font-size=\"12\" font-weight=\"bold\">Hệ tọa độ (V, t) Celsius</text>\n    <line x1=\"10\" y1=\"190\" x2=\"200\" y2=\"190\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr10)\"/>\n    <line x1=\"80\" y1=\"190\" x2=\"80\" y2=\"20\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr10)\"/>\n    <text x=\"195\" y=\"208\" fill=\"#94a3b8\" font-size=\"12\">t (°C)</text>\n    <text x=\"65\" y=\"24\" fill=\"#94a3b8\" font-size=\"12\">V</text>\n    <text x=\"75\" y=\"205\" fill=\"#94a3b8\" font-size=\"11\">0°C</text>\n    \n    <!-- Cắt trục hoành tại -273.15 -->\n    <line x1=\"20\" y1=\"190\" x2=\"80\" y2=\"135\" stroke=\"#10b981\" stroke-width=\"1.5\" stroke-dasharray=\"3,3\"/>\n    <line x1=\"80\" y1=\"135\" x2=\"185\" y2=\"40\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n    <circle cx=\"20\" cy=\"190\" r=\"3.5\" fill=\"#f43f5e\"/>\n    <text x=\"2\" y=\"208\" fill=\"#f43f5e\" font-size=\"10\" font-weight=\"bold\">-273,15°C</text>\n\n    <text x=\"100\" y=\"220\" fill=\"#38bdf8\" font-size=\"12\" text-anchor=\"middle\">Cắt trục hoành tại -273,15°C</text>\n  </g>\n</svg>",
      "q": "Dựa vào đồ thị đường đẳng áp hình bên, đánh giá tính Đúng/Sai của các nhận định vật lí sau:",
      "stmts": [
        "Trên đồ thị (V, T), đường p₁ nằm trên đường p₂ nên áp suất p₁ nhỏ hơn áp suất p₂ (p₁ < p₂).",
        "Nếu hạ nhiệt độ về 0 K thì về mặt lí thuyết thể tích của khí lí tưởng tiến về giá trị bằng 0.",
        "Tại mốc 0°C trên đồ thị (V, t), thể tích của khối khí đã giảm về bằng 0.",
        "Giao điểm của đường kéo dài các đường đẳng áp với trục hoành t (°C) luôn là điểm -273,15°C với mọi chất khí lí tưởng."
      ],
      "ans": [
        true,
        true,
        false,
        true
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) SAI | d) ĐÚNG",
      "exp": "• <b>Ý a: ĐÚNG.</b> Kẻ đường thẳng đứng <span class=\"math-sym\">T = hằng số</span>: <span class=\"math-sym\">V</span><sub>1</sub> > <span class=\"math-sym\">V</span><sub>2</sub> ⇒ <span class=\"math-sym\">p</span><sub>1</sub> < <span class=\"math-sym\">p</span><sub>2</sub>.<br>• <b>Ý b: ĐÚNG.</b> Đây là hệ quả suy ra từ định luật Charles đối với chất khí lí tưởng.<br>• <b>Ý c: SAI.</b> Tại 0°C = 273,15 K thì thể tích khí vẫn có giá trị hữu hạn <span class=\"math-sym\">V</span><sub>0</sub> > 0.<br>• <b>Ý d: ĐÚNG.</b> Mọi đường đẳng áp đều có đường kéo dài hội tụ tại điểm <span class=\"math-sym\">t</span> = -273,15°C."
    },
    {
      "type": "mcq",
      "q": "Khinh khí cầu du lịch có thể bay lơ lửng và nâng giỏ chở người lên không trung nhờ đầu đốt gas đặt dưới đáy quả khí cầu. Nguyên lí vật lí chủ yếu của hoạt động này là gì?",
      "opts": [
        "Đốt nóng làm không khí trong khí cầu dãn nở, khối lượng riêng giảm nhỏ hơn không khí lạnh xung quanh, tạo lực nâng Ác-si-mét.",
        "Ngọn lửa đốt tạo ra dòng khí phản lực phụt thẳng xuống mặt đất đẩy khinh khí cầu bay lên như tên lửa.",
        "Khí nóng bên trong khí cầu biến đổi hóa học thành khí hydrogen có khối lượng siêu nhẹ.",
        "Đầu đốt gas tích điện dương cho khí cầu tạo lực đẩy tĩnh điện với bề mặt Trái Đất."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Nguyên lí bay của khinh khí cầu:</b> Quá trình đốt nóng không khí bên trong khoang mở ở đáy diễn ra ở áp suất khí quyển coi như không đổi (p = const).<br>• Theo định luật Charles, khi đốt nóng, không khí trong khí cầu nở ra. Vì khối lượng riêng ρ = <span class=\"fraction\"><span class=\"numerator\">m</span><span class=\"denominator\">V</span></span> nên khối lượng riêng của không khí nóng nhỏ hơn không khí lạnh bên ngoài (ρ<sub>n</sub>óng < ρ_lạnh).<br>• Theo định luật Archimedes, lực đẩy Archimedes F<sub>A</sub> = ρ_lạnh · V · g lớn hơn tổng trọng lực của khí cầu và khoang tải, giúp khinh khí cầu bay lên."
    }
  ],
  "11": [
    {
      "type": "mcq",
      "q": "Phương trình trạng thái của một lượng khí lí tưởng xác định (phương trình Clapeyron) được viết dưới dạng nào sau đây?",
      "opts": [
        "<span class=\"fraction\"><span class=\"numerator\">p₁ · V₁</span><span class=\"denominator\">T₁</span></span> = <span class=\"fraction\"><span class=\"numerator\">p₂ · V₂</span><span class=\"denominator\">T₂</span></span> = hằng số.",
        "p₁ · V₁ · T₁ = p₂ · V₂ · T₂.",
        "<span class=\"fraction\"><span class=\"numerator\">p₁ · T₁</span><span class=\"denominator\">V₁</span></span> = <span class=\"fraction\"><span class=\"numerator\">p₂ · T₂</span><span class=\"denominator\">V₂</span></span>.",
        "<span class=\"fraction\"><span class=\"numerator\">p₁</span><span class=\"denominator\">V₁ · T₁</span></span> = <span class=\"fraction\"><span class=\"numerator\">p₂</span><span class=\"denominator\">V₂ · T₂</span></span>."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Phương trình Clapeyron:</b> Đối với một khối lượng khí xác định: <span class=\"fraction\"><span class=\"numerator\">p · V</span><span class=\"denominator\">T</span></span> = const, hay <span class=\"fraction\"><span class=\"numerator\">p₁ · V₁</span><span class=\"denominator\">T₁</span></span> = <span class=\"fraction\"><span class=\"numerator\">p₂ · V₂</span><span class=\"denominator\">T₂</span></span>."
    },
    {
      "type": "mcq",
      "q": "Phương trình Clapeyron – Mendeleev biểu diễn mối quan hệ giữa áp suất p, thể tích V, nhiệt độ tuyệt đối T và số mol n của khí lí tưởng là:",
      "opts": [
        "p · V = n · R · T (với R = 8,31 J/(mol·K)).",
        "p · V = <span class=\"fraction\"><span class=\"numerator\">m</span><span class=\"denominator\">M</span></span> · k · T.",
        "p · T = n · R · V.",
        "<span class=\"fraction\"><span class=\"numerator\">p · V</span><span class=\"denominator\">T</span></span> = n · k."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Phương trình Clapeyron - Mendeleev:</b> <span class=\"math-sym\">p · V</span> = <span class=\"math-sym\">n · R · T</span> = <span class=\"fraction\"><span class=\"numerator\">m</span><span class=\"denominator\">M</span></span><span class=\"math-sym\">R · T</span>.<br>• Trong đó <span class=\"math-sym\">R ≈ 8,31</span> J/(mol·K) là hằng số khí lí tưởng."
    },
    {
      "type": "mcq",
      "q": "Trong cấp cứu y tế, một bình thép chuyên dụng có dung tích 10 lít chứa khí oxygen (O₂) ở nhiệt độ 27°C và áp suất cao 150 atm. Coi oxygen là khí lí tưởng (M = 32 g/mol, R = 0,0821 atm·L/(mol·K)), khối lượng khí oxygen chứa trong bình là:",
      "opts": [
        "Khoảng 1,95 kg.",
        "Khoảng 3,90 kg.",
        "Khoảng 0,98 kg.",
        "Khoảng 5,85 kg."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Áp dụng phương trình Clapeyron - Mendeleev:</b><br>p · V = n · R · T = <span class=\"fraction\"><span class=\"numerator\">m</span><span class=\"denominator\">M</span></span> · R · T ⟹ m = <span class=\"fraction\"><span class=\"numerator\">p · V · M</span><span class=\"denominator\">R · T</span></span>.<br>• Với p = 150 atm, V = 10 L, T = 27 + 273 = 300 K, M = 32 g/mol:<br>m = <span class=\"fraction\"><span class=\"numerator\">150 · 10 · 32</span><span class=\"denominator\">0,0821 · 300</span></span> ≈ 1949 g ≈ 1,95 kg."
    },
    {
      "type": "tf",
      "q": "Xét các trường hợp riêng và hệ quả của phương trình trạng thái khí lí tưởng. Mỗi khẳng định sau là Đúng hay Sai?",
      "stmts": [
        "Khi nhiệt độ T không đổi, phương trình trạng thái suy biến về định luật Boyle (p · V = const).",
        "Khi áp suất p không đổi, phương trình trạng thái suy biến về định luật Charles (<span class=\"fraction\"><span class=\"numerator\">V</span><span class=\"denominator\">T</span></span> = const).",
        "Khối lượng riêng ρ của một chất khí lí tưởng tỉ lệ thuận với áp suất p và tỉ lệ nghịch với nhiệt độ tuyệt đối T.",
        "Ở cùng điều kiện nhiệt độ và áp suất, các chất khí khác nhau có cùng thể tích sẽ chứa số phân tử khí hoàn toàn khác nhau."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) ĐÚNG | d) SAI",
      "exp": "• <b>Ý a: ĐÚNG.</b> Định luật Boyle là trường hợp đẳng nhiệt.<br>• <b>Ý b: ĐÚNG.</b> Định luật Charles là trường hợp đẳng áp.<br>• <b>Ý c: ĐÚNG.</b> <span class=\"math-sym\">ρ</span> = <span class=\"fraction\"><span class=\"numerator\">m</span><span class=\"denominator\">V</span></span> = <span class=\"fraction\"><span class=\"numerator\">pM</span><span class=\"denominator\">RT</span></span>.<br>• <b>Ý d: SAI.</b> Theo định luật Avogadro, cùng p, V, T thì số mol và số phân tử là <b>như nhau</b>."
    },
    {
      "type": "match",
      "q": "Hãy ghép các công thức ở Cột A với tên gọi quy chuẩn ở Cột B:",
      "colA": [
        "p<span class=\"fraction\"><span class=\"numerator\">V</span><span class=\"denominator\">T</span></span> = hằng số",
        "pV = (m/M)RT",
        "p₁ / T₁ = p₂ / T₂",
        "ρ = pM / (RT)"
      ],
      "colB": [
        "Quá trình đẳng tích (Định luật Gay-Lussac/Sác-lơ).",
        "Phương trình Clapeyron - Mendeleev.",
        "Công thức tính khối lượng riêng của chất khí lí tưởng.",
        "Phương trình trạng thái của khí lí tưởng (Clapeyron)."
      ],
      "ans": [
        3,
        1,
        0,
        2
      ],
      "correctText": "1-D, 2-B, 3-A, 4-C",
      "exp": "• 1 ghép với D (Phương trình trạng thái).<br>• 2 ghép với B (Phương trình Clapeyron - Mendeleev).<br>• 3 ghép với A (Quá trình đẳng tích).<br>• 4 ghép với C (Khối lượng riêng của khí)."
    },
    {
      "type": "drag",
      "q": "Điền từ/cụm từ thích hợp vào chỗ trống để hoàn thiện khái niệm về phương trình trạng thái:",
      "text": "Trạng thái của một lượng khí xác định được đặc trưng bởi ba thông số trạng thái: [0], thể tích và [1]. Mối liên hệ đồng thời giữa cả ba thông số này được xác định thông qua [2] của khí lí tưởng.",
      "words": [
        "áp suất",
        "nhiệt độ tuyệt đối",
        "phương trình trạng thái",
        "khối lượng",
        "năng lượng",
        "vận tốc"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "[0]: áp suất | [1]: nhiệt độ tuyệt đối | [2]: phương trình trạng thái",
      "exp": "• Ba thông số trạng thái cơ bản là <b>áp suất (p)</b>, <b>thể tích (V)</b> và <b>nhiệt độ tuyệt đối (T)</b>. Mối liên hệ được gọi là <b>phương trình trạng thái</b>."
    },
    {
      "type": "mcq",
      "q": "Nồi áp suất là một thiết bị gia dụng giúp ninh nhừ xương và nấu chín thức ăn rất nhanh chóng. Cơ chế vật lí chủ yếu giúp nồi áp suất rút ngắn thời gian nấu nướng là gì?",
      "opts": [
        "Van kín giữ thể tích không đổi; khi nhiệt độ tăng, áp suất tăng cao làm nhiệt độ sôi của nước tăng vượt quá 100°C.",
        "Nắp kín giữ nhiệt giúp thức ăn hấp thụ 100% nhiệt lượng mà không bị tỏa ra môi trường xung quanh.",
        "Áp suất hơi rất cao tác dụng lực cơ học trực tiếp bẻ gãy cấu trúc liên kết sợi của thực phẩm.",
        "Các phân tử hơi nước va chạm với vận tốc ánh sáng làm phân rã các tế bào thực phẩm nhanh hơn."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Nguyên lí nồi áp suất:</b> Khi nấu trong nồi áp suất đậy kín có gioăng cao su, thể tích không đổi (V ≈ const). Nước sôi hóa hơi làm áp suất trong nồi tăng vọt lên khoảng 1,5 - 2 atm.<br>• Nhiệt độ sôi của chất lỏng phụ thuộc thuận vào áp suất mặt thoáng: Áp suất càng cao thì nhiệt độ sôi của nước càng tăng (lên tới 115 - 120°C). Nước sôi ở nhiệt độ cao truyền nhiệt nhanh gấp nhiều lần, giúp thức ăn chín nhừ nhanh chóng và tiết kiệm tới 70% thời gian cũng như năng lượng đun nấu."
    },
    {
      "type": "mcq",
      "q": "Trước khi lên đường cao tốc vào buổi sáng se lạnh (20°C), bác tài xế đo áp suất lốp xe là 2,2 bar. Sau khi chạy tốc độ cao liên tục vào giữa trưa nắng, nhiệt độ không khí trong lốp xe tăng lên đến 60°C. Coi thể tích lốp xe dãn nở không đáng kể. Áp suất khí trong lốp lúc này là:",
      "opts": [
        "2,50 bar.",
        "2,85 bar.",
        "2,35 bar.",
        "3,10 bar."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Coi thể tích không đổi (đẳng tích): <span class=\"math-sym\">T</span><sub>1</sub> = 20 + 273 = 293 K; <span class=\"math-sym\">T</span><sub>2</sub> = 60 + 273 = 333 K.<br>• <span class=\"math-sym\">p</span><sub>2</sub> = <span class=\"math-sym\">p</span><sub>1</sub> · (<span class=\"math-sym\">T</span><sub>2</sub>/<span class=\"math-sym\">T</span><sub>1</sub>) = 2,2 × (<span class=\"fraction\"><span class=\"numerator\">333</span><span class=\"denominator\">293</span></span>) ≈ <b>2,50 bar</b>."
    },
    {
      "type": "tf",
      "svgGraph": "<svg viewBox=\"0 0 540 280\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arr11\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrowProcess\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f59e0b\"/>\n    </marker>\n  </defs>\n  <rect width=\"540\" height=\"280\" rx=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"26\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">CHU TRÌNH BIẾN ĐỔI TRẠNG THÁI KHÍ LÍ TƯỞNG (p - V)</text>\n\n  <!-- Trục tọa độ p - V -->\n  <line x1=\"60\" y1=\"230\" x2=\"490\" y2=\"230\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr11)\"/>\n  <line x1=\"60\" y1=\"230\" x2=\"60\" y2=\"35\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr11)\"/>\n  <text x=\"480\" y=\"250\" fill=\"#94a3b8\" font-size=\"13\">V (m³)</text>\n  <text x=\"35\" y=\"45\" fill=\"#94a3b8\" font-size=\"13\">p (Pa)</text>\n  <text x=\"45\" y=\"245\" fill=\"#94a3b8\" font-size=\"12\">O</text>\n\n  <!-- Tọa độ các trạng thái -->\n  <!-- Trạng thái 1: (V1=140, p1=70) -->\n  <!-- Trạng thái 2: (V2=340, p2=160) -->\n  <!-- Trạng thái 3: (V3=340, p3=70) -->\n\n  <!-- Các đường gióng -->\n  <line x1=\"60\" y1=\"70\" x2=\"140\" y2=\"70\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n  <line x1=\"60\" y1=\"160\" x2=\"340\" y2=\"160\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n  <line x1=\"140\" y1=\"230\" x2=\"140\" y2=\"70\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n  <line x1=\"340\" y1=\"230\" x2=\"340\" y2=\"70\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n\n  <text x=\"25\" y=\"75\" fill=\"#94a3b8\" font-size=\"12\">p₂</text>\n  <text x=\"25\" y=\"165\" fill=\"#94a3b8\" font-size=\"12\">p₁</text>\n  <text x=\"135\" y=\"248\" fill=\"#94a3b8\" font-size=\"12\">V₁</text>\n  <text x=\"335\" y=\"248\" fill=\"#94a3b8\" font-size=\"12\">V₂</text>\n\n  <!-- Quá trình 1 -> 2: dãn nở đẳng nhiệt T1 -->\n  <path d=\"M 140,70 Q 210,130 340,160\" fill=\"none\" stroke=\"#06b6d4\" stroke-width=\"3\"/>\n  <!-- Mũi tên chỉ chiều 1 -> 2 -->\n  <path d=\"M 230,123 L 236,127\" stroke=\"#06b6d4\" stroke-width=\"3\" marker-end=\"url(#arrowProcess)\"/>\n  <text x=\"210\" y=\"105\" fill=\"#06b6d4\" font-size=\"12\" font-weight=\"bold\">(1) → (2): Đẳng nhiệt T</text>\n\n  <!-- Quá trình 2 -> 3: làm nguội đẳng tích V2 -->\n  <line x1=\"340\" y1=\"160\" x2=\"340\" y2=\"70\" stroke=\"#f43f5e\" stroke-width=\"3\"/>\n  <path d=\"M 340,120 L 340,105\" stroke=\"#f43f5e\" stroke-width=\"3\" marker-end=\"url(#arrowProcess)\"/>\n  <text x=\"350\" y=\"120\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">(2) → (3): Đẳng tích V₂</text>\n\n  <!-- Điểm nút trạng thái -->\n  <circle cx=\"140\" cy=\"70\" r=\"6\" fill=\"#38bdf8\"/>\n  <text x=\"148\" y=\"65\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">(1) [p₂, V₁, T₁]</text>\n\n  <circle cx=\"340\" cy=\"160\" r=\"6\" fill=\"#38bdf8\"/>\n  <text x=\"350\" y=\"170\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">(2) [p₁, V₂, T₁]</text>\n\n  <circle cx=\"340\" cy=\"70\" r=\"6\" fill=\"#fbbf24\"/>\n  <text x=\"350\" y=\"65\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">(3) [p₂, V₂, T₃]</text>\n</svg>",
      "q": "Xét chu trình biến đổi từ trạng thái (1) sang (2) rồi sang (3) của một lượng khí lí tưởng trên giản đồ (p, V) như hình vẽ. Nhận định nào sau đây là Đúng hay Sai?",
      "stmts": [
        "Quá trình biến đổi từ trạng thái (1) sang trạng thái (2) là quá trình dãn nở đẳng nhiệt.",
        "Nhiệt độ ở trạng thái (3) lớn hơn nhiệt độ ở trạng thái (2) (T₃ > T₂).",
        "Quá trình biến đổi từ trạng thái (2) sang trạng thái (3) là quá trình đẳng tích.",
        "Trong quá trình (1) → (2), áp suất chất khí giảm xuống do thể tích tăng lên ở nhiệt độ không đổi."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) SAI | d) ĐÚNG",
      "exp": "• <b>Ý a: ĐÚNG.</b> Đoạn (1)-(2) là nhánh cong hyperbol đẳng nhiệt.<br>• <b>Ý b: ĐÚNG.</b> Vì ở trạng thái (3) cùng thể tích <span class=\"math-sym\">V</span><sub>2</sub> nhưng áp suất <span class=\"math-sym\">p</span><sub>2</sub> > <span class=\"math-sym\">p</span><sub>1</sub> nên <span class=\"math-sym\">T</span><sub>3</sub> > <span class=\"math-sym\">T</span><sub>2</sub>.<br>• <b>Ý c: ĐÚNG.</b> Đoạn (2)-(3) vuông góc với trục V nên <span class=\"math-sym\">V = hằng số</span> (đẳng tích).<br>• <b>Ý d: ĐÚNG.</b> Thể tích tăng từ <span class=\"math-sym\">V</span><sub>1</sub> lên <span class=\"math-sym\">V</span><sub>2</sub> làm áp suất giảm từ <span class=\"math-sym\">p</span><sub>2</sub> xuống <span class=\"math-sym\">p</span><sub>1</sub>."
    },
    {
      "type": "mcq",
      "q": "Khối lượng riêng của không khí ở điều kiện tiêu chuẩn (0°C và 1,013 · 10⁵ Pa) là 1,29 kg/m³. Ở nhiệt độ 100°C và áp suất 2,026 · 10⁵ Pa, khối lượng riêng của không khí xấp xỉ bằng:",
      "opts": [
        "1,89 kg/m³.",
        "2,58 kg/m³.",
        "1,45 kg/m³.",
        "0,95 kg/m³."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Áp dụng công thức: <span class=\"math-sym\">ρ</span> = <span class=\"fraction\"><span class=\"numerator\">pM</span><span class=\"denominator\">RT</span></span> ⇒ <span class=\"fraction\"><span class=\"numerator\">ρ₂</span><span class=\"denominator\">ρ₁</span></span> = <span class=\"fraction\"><span class=\"numerator\">p₂</span><span class=\"denominator\">p₁</span></span> · <span class=\"fraction\"><span class=\"numerator\">T₁</span><span class=\"denominator\">T₂</span></span>.<br>• <span class=\"math-sym\">ρ</span><sub>2</sub> = 1,29 × (2,<span class=\"fraction\"><span class=\"numerator\">026</span><span class=\"denominator\">1</span></span>,013) × (<span class=\"fraction\"><span class=\"numerator\">273</span><span class=\"denominator\">373</span></span>) = 1,29 × 2 × 0,732 ≈ <b>1,89 kg/m³</b>."
    }
  ],
  "12": [
    {
      "type": "mcq",
      "q": "Biểu thức nào sau đây thể hiện mối liên hệ giữa áp suất p của khí lí tưởng với mật độ phân tử n₀ và động năng tịnh tiến trung bình Ed của phân tử?",
      "opts": [
        "p = <span class=\"fraction\"><span class=\"numerator\">2</span><span class=\"denominator\">3</span></span> · n₀ · Ed.",
        "p = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">3</span></span> · n₀ · Ed.",
        "p = <span class=\"fraction\"><span class=\"numerator\">3</span><span class=\"denominator\">2</span></span> · n₀ · Ed.",
        "p = n₀ · k · Ed."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Hệ thức cơ bản:</b> <span class=\"math-sym\">p</span> = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">3</span></span><span class=\"math-sym\">n</span><sub>0</sub><span class=\"math-sym\">m</span><span class=\"math-sym\">v²</span> = <span class=\"fraction\"><span class=\"numerator\">2</span><span class=\"denominator\">3</span></span><span class=\"math-sym\">n</span><sub>0</sub>(<span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2</span></span><span class=\"math-sym\">m</span><span class=\"math-sym\">v²</span>) = <span class=\"fraction\"><span class=\"numerator\">2</span><span class=\"denominator\">3</span></span><span class=\"math-sym\">n</span><sub>0</sub><span class=\"math-sym\">E</span><sub>d</sub>."
    },
    {
      "type": "mcq",
      "q": "Động năng tịnh tiến trung bình của phân tử khí lí tưởng tỉ lệ thuận với nhiệt độ tuyệt đối T theo hệ thức:",
      "opts": [
        "Ed = <span class=\"fraction\"><span class=\"numerator\">3</span><span class=\"denominator\">2</span></span> · k · T (với k là hằng số Boltzmann).",
        "Ed = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2</span></span> · k · T.",
        "Ed = 3 · k · T.",
        "Ed = <span class=\"fraction\"><span class=\"numerator\">3</span><span class=\"denominator\">2</span></span> · R · T."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Mối quan hệ giữa động năng và nhiệt độ:</b> <span class=\"math-sym\">E</span><sub>d</sub> = <span class=\"fraction\"><span class=\"numerator\">3</span><span class=\"denominator\">2</span></span><span class=\"math-sym\">kT</span>.<br>• Trong đó <span class=\"math-sym\">k ≈ 1,38 · 10⁻²³</span> J/K là hằng số Boltzmann."
    },
    {
      "type": "mcq",
      "q": "Hằng số Boltzmann k liên hệ với hằng số khí lí tưởng R và số Avogadro NA theo biểu thức nào?",
      "opts": [
        "k = <span class=\"fraction\"><span class=\"numerator\">R</span><span class=\"denominator\">N<sub>A</sub></span></span>.",
        "k = R · N<sub>A</sub>.",
        "k = <span class=\"fraction\"><span class=\"numerator\">N<sub>A</sub></span><span class=\"denominator\">R</span></span>.",
        "k = <span class=\"fraction\"><span class=\"numerator\">R</span><span class=\"denominator\">2N<sub>A</sub></span></span>."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Định nghĩa hằng số Boltzmann:</b> <span class=\"math-sym\">k</span> = <span class=\"fraction\"><span class=\"numerator\">R</span><span class=\"denominator\">N<sub>A</sub></span></span> = <span class=\"fraction\"><span class=\"numerator\">8,31</span><span class=\"denominator\">6,022 · 10²³</span></span> ≈ 1,38 · 10⁻²³ J/K."
    },
    {
      "type": "tf",
      "q": "Khi xem xét về động năng phân tử và tốc độ chuyển động nhiệt của phân tử khí, mỗi nhận định sau là Đúng hay Sai?",
      "stmts": [
        "Động năng tịnh tiến trung bình của các phân tử chỉ phụ thuộc vào nhiệt độ tuyệt đối T, không phụ thuộc vào bản chất chất khí.",
        "Ở cùng một nhiệt độ, phân tử khí có khối lượng mol lớn hơn sẽ có tốc độ căn quân phương lớn hơn.",
        "Khi nhiệt độ tuyệt đối của khối khí tăng lên gấp 4 lần thì tốc độ căn quân phương của phân tử tăng gấp 2 lần.",
        "Tại nhiệt độ phòng (khoảng 300 K), tốc độ chuyển động nhiệt của phân tử không khí có độ lớn khoảng vài trăm mét trên giây."
      ],
      "ans": [
        true,
        false,
        true,
        true
      ],
      "correctText": "a) ĐÚNG | b) SAI | c) ĐÚNG | d) ĐÚNG",
      "exp": "• <b>Ý a: ĐÚNG.</b> <span class=\"math-sym\">E</span><sub>d</sub> = 1,5<span class=\"math-sym\">kT</span> chỉ phụ thuộc nhiệt độ <span class=\"math-sym\">T</span>.<br>• <b>Ý b: SAI.</b> Vì <span class=\"math-sym\">v</span><sub>cqp</sub> = <span class=\"fraction\"><span class=\"numerator\">3RT</span><span class=\"denominator\">M</span></span><sup><span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2</span></span></sup>, khối lượng mol <span class=\"math-sym\">M</span> càng lớn thì tốc độ càng <b>nhỏ</b>.<br>• <b>Ý c: ĐÚNG.</b> Tốc độ tỉ lệ với căn bậc hai của nhiệt độ tuyệt đối: <span class=\"math-sym\">v ∝ <span class=\"sqrt\"><span class=\"rad\">√</span><span class=\"radicand\">T</span></span></span>. Khi T tăng 4 lần thì v tăng <span class=\"sqrt\"><span class=\"rad\">√</span><span class=\"radicand\">4</span></span> = 2 lần.<br>• <b>Ý d: ĐÚNG.</b> Tốc độ căn quân phương của khí N₂ ở 300 K cỡ 500 m/s."
    },
    {
      "type": "match",
      "q": "Hãy ghép các đại lượng vật lí ở Cột A với biểu thức tương ứng ở Cột B:",
      "colA": [
        "Động năng tịnh tiến trung bình Ed",
        "Tốc độ căn quân phương vcqp",
        "Áp suất khí p theo mật độ n₀",
        "Hằng số Boltzmann k"
      ],
      "colB": [
        "<span class=\"sqrt\"><span class=\"rad\">√</span><span class=\"radicand\"><span class=\"fraction\"><span class=\"numerator\">3RT</span><span class=\"denominator\">M</span></span></span></span> hay <span class=\"sqrt\"><span class=\"rad\">√</span><span class=\"radicand\"><span class=\"fraction\"><span class=\"numerator\">3kT</span><span class=\"denominator\">m</span></span></span></span>",
        "<span class=\"fraction\"><span class=\"numerator\">3</span><span class=\"denominator\">2</span></span> · k · T",
        "<span class=\"fraction\"><span class=\"numerator\">R</span><span class=\"denominator\">N<sub>A</sub></span></span> ≈ 1,38 · 10⁻²³ J/K",
        "<span class=\"fraction\"><span class=\"numerator\">2</span><span class=\"denominator\">3</span></span> · n₀ · Ed"
      ],
      "ans": [
        1,
        0,
        3,
        2
      ],
      "correctText": "1-B, 2-A, 3-D, 4-C",
      "exp": "• 1 ghép với B (Động năng phân tử).<br>• 2 ghép với A (Tốc độ căn quân phương).<br>• 3 ghép với D (Áp suất theo động năng).<br>• 4 ghép với C (Hằng số Boltzmann)."
    },
    {
      "type": "mcq",
      "q": "Dựa vào mô hình động học phân tử chất khí, hãy giải thích tại sao khi giữ thể tích bình chứa không đổi, nếu ta tăng nhiệt độ của khối khí thì áp suất khí tác dụng lên thành bình lại tăng lên?",
      "opts": [
        "Nhiệt độ tăng làm tốc độ và động năng phân tử tăng, phân tử va chạm vào thành bình thường xuyên hơn và mạnh hơn.",
        "Nhiệt độ tăng làm số lượng phân tử khí bên trong bình tự sinh thêm nhiều hơn làm tăng mật độ.",
        "Nhiệt độ tăng làm kích thước của từng phân tử khí nở to ra chiếm nhiều không gian thể tích hơn.",
        "Nhiệt độ tăng làm lực hút tĩnh điện giữa phân tử khí với thành bình tăng lên đột ngột."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Giải thích vi mô về áp suất:</b> Áp suất chất khí tác dụng lên thành bình là kết quả của vô số va chạm của các phân tử khí vào thành bình trong mỗi giây.<br>• Khi nhiệt độ tăng, các phân tử chuyển động nhanh hơn, va chạm vào thành bình thường xuyên hơn và mạnh hơn làm tăng áp suất.<br>• Công thức p = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">3</span></span> · n₀ · m · v² cho thấy áp suất tỉ lệ với mật độ phân tử n₀ và động năng trung bình của phân tử."
    },
    {
      "type": "mcq",
      "q": "Động năng tịnh tiến trung bình của một phân tử khí ở nhiệt độ 27°C xấp xỉ bằng bao nhiêu? Lấy k = 1,38 · 10⁻²³ J/K.",
      "opts": [
        "6,21 · 10⁻²¹ J.",
        "4,14 · 10⁻²¹ J.",
        "8,28 · 10⁻²¹ J.",
        "5,58 · 10⁻²¹ J."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <span class=\"math-sym\">T</span> = 27 + 273 = 300 K.<br>• <span class=\"math-sym\">E</span><sub>d</sub> = <span class=\"fraction\"><span class=\"numerator\">3</span><span class=\"denominator\">2</span></span><span class=\"math-sym\">kT</span> = 1,5 × 1,38 · 10⁻²³ × 300 = <b>6,21 · 10⁻²¹ J</b>."
    },
    {
      "type": "mcq",
      "q": "Bầu khí quyển Trái Đất giữ lại được các khí như oxygen (O₂) và nitrogen (N₂), nhưng hầu như không giữ được các khí nhẹ như hydrogen (H₂) và helium (He). Nguyên nhân vật lí cơ bản là do:",
      "opts": [
        "Ở cùng nhiệt độ, phân tử H₂ và He có khối lượng nhỏ nên tốc độ căn quân phương rất lớn, dễ vượt tốc độ vũ trụ cấp I để thoát ly.",
        "Khí H₂ và He bị từ trường Trái Đất tạo lực từ đẩy ngược ra ngoài không gian liên hành tinh.",
        "Tầng ôzôn phản xạ hoàn toàn và chỉ cho phép khí nặng đi qua vào khí quyển.",
        "Lực hấp dẫn của Trái Đất chỉ tác dụng lên các chất khí có khối lượng phân tử lớn hơn 20 g/mol."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Tốc độ căn quân phương:</b> v<sub>rms</sub> = <span class=\"sqrt\"><span class=\"rad\">√</span><span class=\"radicand\"><span class=\"fraction\"><span class=\"numerator\">3RT</span><span class=\"denominator\">M</span></span></span></span>. Phân tử khí hydro (H₂, khối lượng mol M = 2 g/mol) có khối lượng phân tử nhẹ hơn rất nhiều so với oxy (O₂, M = 32 g/mol) và nitơ (N₂, M = 28 g/mol).<br>• Ở cùng nhiệt độ, tốc độ chuyển động nhiệt của phân tử hydro rất lớn (cỡ 1,9 km/s), lớn hơn tốc độ thoát ly của Trái Đất đối với các phân tử ở tầng cao khí quyển. Trải qua hàng tỉ năm, hầu hết các phân tử hydro nhẹ đã bay thoát khỏi trường hấp dẫn của Trái Đất vào không gian vũ trụ."
    },
    {
      "type": "tf",
      "svgGraph": "<svg viewBox=\"0 0 540 280\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arr12\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#94a3b8\"/>\n    </marker>\n  </defs>\n  <rect width=\"540\" height=\"280\" rx=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"26\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">ĐƯỜNG CONG PHÂN BỐ TỐC ĐỘ MAXWELL - BOLTZMANN</text>\n  \n  <line x1=\"50\" y1=\"230\" x2=\"490\" y2=\"230\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr12)\"/>\n  <line x1=\"50\" y1=\"230\" x2=\"50\" y2=\"35\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr12)\"/>\n  <text x=\"475\" y=\"250\" fill=\"#94a3b8\" font-size=\"13\">Tốc độ v (m/s)</text>\n  <text x=\"20\" y=\"45\" fill=\"#94a3b8\" font-size=\"13\">f(v)</text>\n  <text x=\"35\" y=\"245\" fill=\"#94a3b8\" font-size=\"12\">O</text>\n\n  <!-- Đường T1: thấp hơn về tốc độ, đỉnh cao hơn -->\n  <path d=\"M 50,230 C 80,180 120,60 160,60 C 200,60 250,190 340,225 C 380,228 440,230 470,230\" fill=\"none\" stroke=\"#06b6d4\" stroke-width=\"3\"/>\n  \n  <!-- Đường T2 -->\n  <path d=\"M 50,230 C 90,210 160,110 230,110 C 300,110 360,170 420,215 C 450,225 470,230 480,230\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"3\"/>\n\n  <!-- Điểm đỉnh T1 -->\n  <line x1=\"160\" y1=\"60\" x2=\"160\" y2=\"230\" stroke=\"#06b6d4\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/>\n  <circle cx=\"160\" cy=\"60\" r=\"5\" fill=\"#06b6d4\"/>\n  <text x=\"160\" y=\"50\" fill=\"#06b6d4\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Đỉnh T₁ (v xác suất lớn nhất)</text>\n  <text x=\"150\" y=\"248\" fill=\"#06b6d4\" font-size=\"12\" font-weight=\"bold\">v₁</text>\n\n  <!-- Điểm đỉnh T2 -->\n  <line x1=\"230\" y1=\"110\" x2=\"230\" y2=\"230\" stroke=\"#f43f5e\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/>\n  <circle cx=\"230\" cy=\"110\" r=\"5\" fill=\"#f43f5e\"/>\n  <text x=\"250\" y=\"100\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">Đỉnh T₂</text>\n  <text x=\"225\" y=\"248\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">v₂</text>\n\n  <!-- Chú thích -->\n  <rect x=\"330\" y=\"45\" width=\"180\" height=\"60\" rx=\"8\" fill=\"rgba(30,41,59,0.8)\" stroke=\"#475569\" stroke-width=\"1\"/>\n  <text x=\"340\" y=\"65\" fill=\"#06b6d4\" font-size=\"11\" font-weight=\"bold\">— Ở T₁: Nhiệt độ thấp</text>\n  <text x=\"340\" y=\"85\" fill=\"#f43f5e\" font-size=\"11\" font-weight=\"bold\">— Ở T₂: Đỉnh dịch sang phải</text>\n</svg>",
      "q": "Quan sát đường cong phân bố tốc độ phân tử Maxwell - Boltzmann ở hai nhiệt độ T₁ và T₂ như đồ thị hình bên. Nhận định nào sau đây là Đúng hay Sai?",
      "stmts": [
        "Nhiệt độ tuyệt đối T₂ lớn hơn nhiệt độ tuyệt đối T₁ (T₂ > T₁).",
        "Tốc độ có xác suất lớn nhất ở nhiệt độ T₂ lớn hơn so với ở nhiệt độ T₁ (v₂ > v₁).",
        "Diện tích giới hạn bởi mỗi đường cong phân bố và trục hoành là bằng nhau (đều bằng 1).",
        "Ở nhiệt độ cao hơn T₂, số lượng phân tử có tốc độ rất nhỏ lại chiếm tỉ lệ áp đảo."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) ĐÚNG | d) SAI",
      "exp": "• <b>Ý a: ĐÚNG.</b> Đỉnh của T₂ dịch sang phải ⇒ nhiệt độ T₂ cao hơn.<br>• <b>Ý b: ĐÚNG.</b> Tọa độ đỉnh tương ứng tốc độ xác suất lớn nhất tăng từ <span class=\"math-sym\">v</span><sub>1</sub> lên <span class=\"math-sym\">v</span><sub>2</sub>.<br>• <b>Ý c: ĐÚNG.</b> Tổng xác suất trên toàn dải tốc độ luôn bằng 100% (tích phân bằng 1).<br>• <b>Ý d: SAI.</b> Khi nhiệt độ cao, phân tử chuyển dịch sang dải tốc độ cao, số phân tử tốc độ chậm giảm đi."
    },
    {
      "type": "mcq",
      "q": "Theo mô hình động học phân tử chất khí và nhiệt động lực học cổ điển, 'Độ không tuyệt đối' (0 K, ứng với -273,15°C) có ý nghĩa vật lí sâu sắc là gì?",
      "opts": [
        "Nhiệt độ lí thuyết mà tại đó động năng tịnh tiến trung bình của các phân tử khí bằng 0, mọi chuyển động nhiệt đều ngừng lại.",
        "Nhiệt độ mà tại đó tất cả các chất khí thực đều chuyển thành chất khí lí tưởng hoàn hảo.",
        "Nhiệt độ mà tại đó khối lượng của chất khí tăng lên đến giá trị vô cùng lớn.",
        "Nhiệt độ mà tại đó nước tinh khiết bắt đầu đóng băng ở áp suất tiêu chuẩn 1 atm."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Ý nghĩa của 0 K:</b> Từ công thức E<sub>d</sub> = <span class=\"fraction\"><span class=\"numerator\">3</span><span class=\"denominator\">2</span></span> · k · T, khi nhiệt độ tuyệt đối T → 0 K, động năng chuyển động nhiệt tịnh tiến trung bình của các phân tử tiệm cận tới 0. Khi đó, về mặt lí thuyết cổ điển, mọi chuyển động nhiệt của phân tử đều dừng lại.<br>• Theo nguyên lí thứ ba của nhiệt động lực học (Định luật Nernst), không thể bằng bất kì quá trình hữu hạn nào làm hạ nhiệt độ của một hệ vật chất xuống đúng 0 K (Độ không tuyệt đối chỉ là giới hạn lí thuyết)."
    }
  ],
  "13": [
    {
      "type": "mcq",
      "q": "Trong một chu trình biến đổi khép kín (chu trình kín) của chất khí lí tưởng, sau khi đi hết một vòng kín và trở về trạng thái ban đầu thì biến thiên nội năng ΔU của khối khí bằng:",
      "opts": [
        "Bằng 0.",
        "Luôn có giá trị dương.",
        "Luôn có giá trị âm.",
        "Bằng tổng công sinh ra trong chu trình."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Nội năng là hàm của trạng thái:</b> Vì trạng thái cuối trùng với trạng thái đầu (<span class=\"math-sym\">T</span><sub>cuối</sub> = <span class=\"math-sym\">T</span><sub>đầu</sub>) nên biến thiên nội năng: <b>ΔU = 0</b>."
    },
    {
      "type": "mcq",
      "q": "Theo ý nghĩa hình học, công toàn phần A' mà khối khí sinh ra trong một chu trình kín thuận chiều kim đồng hồ trên hệ tọa độ (p, V) được xác định bằng:",
      "opts": [
        "Diện tích của hình phẳng được bao quanh bởi chu trình đó trên giản đồ (p, V).",
        "Chu vi của đường cong chu trình kín.",
        "Độ dài trục hoành của chu trình.",
        "Tích của áp suất lớn nhất và thể tích lớn nhất của chu trình."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Ý nghĩa hình học của công:</b> Công <span class=\"math-sym\">A'</span> mà khí sinh ra trong chu trình bằng diện tích hình giới hạn bởi chu trình trên giản đồ <span class=\"math-sym\">(p, V)</span>."
    },
    {
      "type": "mcq",
      "q": "Hai bình kín dung tích V₁ = 2,0 lít và V₂ = 3,0 lít chứa cùng một loại khí ở cùng nhiệt độ, áp suất ban đầu lần lượt là p₁ = 1,0 atm và p₂ = 2,0 atm. Nối hai bình bằng một ống nhỏ có khóa, mở khóa để hai bình thông nhau và giữ nhiệt độ không đổi. Áp suất của hỗn hợp khí khi cân bằng là:",
      "opts": [
        "1,6 atm.",
        "1,5 atm.",
        "1,8 atm.",
        "1,4 atm."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Bảo toàn số mol khí (nhiệt độ T không đổi): <span class=\"math-sym\">pV</span><sub>chung</sub> = <span class=\"math-sym\">p</span><sub>1</sub><span class=\"math-sym\">V</span><sub>1</sub> + <span class=\"math-sym\">p</span><sub>2</sub><span class=\"math-sym\">V</span><sub>2</sub>.<br>• <span class=\"math-sym\">p</span> = <span class=\"fraction\"><span class=\"numerator\">p₁V₁ + p₂V₂</span><span class=\"denominator\">V₁ + V₂</span></span> = <span class=\"fraction\"><span class=\"numerator\">1,0 × 2,0 + 2,0 × 3,0</span><span class=\"denominator\">2,0 + 3,0</span></span> = <span class=\"fraction\"><span class=\"numerator\">8,0</span><span class=\"denominator\">5,0</span></span> = <b>1,6 atm</b>."
    },
    {
      "type": "tf",
      "q": "Xét các đặc tính nhiệt động lực học của chu trình chất khí khép kín. Mỗi nhận định sau đây là Đúng hay Sai?",
      "stmts": [
        "Trong toàn bộ một chu trình kín, nhiệt lượng Q mà chất khí nhận được bằng công A' mà chất khí sinh ra (Q = A').",
        "Nếu chu trình biến đổi theo chiều thuận chiều kim đồng hồ trên hệ (p, V) thì công sinh ra A' > 0 (chu trình động cơ nhiệt).",
        "Nếu chu trình biến đổi theo chiều ngược chiều kim đồng hồ trên hệ (p, V) thì công nhận vào A > 0 (chu trình máy làm lạnh).",
        "Hiệu suất cực đại của một động cơ nhiệt hoạt động theo chu trình Carnot chỉ phụ thuộc vào bản chất của chất khí sử dụng làm tác nhân."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) ĐÚNG | d) SAI",
      "exp": "• <b>Ý a: ĐÚNG.</b> Vì <span class=\"math-sym\">ΔU = 0 ⇒ Q + A = 0 ⇒ Q = -A = A'</span>.<br>• <b>Ý b: ĐÚNG.</b> Công dãn nở ở áp suất cao lớn hơn công nén ở áp suất thấp nên <span class=\"math-sym\">A' > 0</span>.<br>• <b>Ý c: ĐÚNG.</b> Chu trình ngược chiều kim đồng hồ tiêu tốn công cơ học để bơm nhiệt.<br>• <b>Ý d: SAI.</b> Hiệu suất Carnot <span class=\"math-sym\">η = 1 - T₂/T₁</span> chỉ phụ thuộc nhiệt độ nguồn nóng <span class=\"math-sym\">T₁</span> và nguồn lạnh <span class=\"math-sym\">T₂</span>, không phụ thuộc vào chất khí."
    },
    {
      "type": "match",
      "q": "Hãy ghép các biểu thức tính toán nhiệt động lực học ở Cột A với nội hàm tương ứng ở Cột B:",
      "colA": [
        "A' = p · ΔV",
        "ΔU = 0",
        "p = <span class=\"fraction\"><span class=\"numerator\">p₁V₁ + p₂V₂</span><span class=\"denominator\">V₁ + V₂</span></span>",
        "Q = A'"
      ],
      "colB": [
        "Nhiệt lượng nhận bằng công sinh ra trong toàn bộ chu trình kín.",
        "Áp suất cân bằng của hệ hai bình khí thông nhau ở cùng nhiệt độ.",
        "Công sinh ra của chất khí trong quá trình dãn nở đẳng áp.",
        "Độ biến thiên nội năng của chất khí sau một chu trình kín."
      ],
      "ans": [
        2,
        3,
        1,
        0
      ],
      "correctText": "1-C, 2-D, 3-B, 4-A",
      "exp": "• 1 ghép với C (Công đẳng áp).<br>• 2 ghép với D (Biến thiên nội năng chu trình kín).<br>• 3 ghép với B (Áp suất bình thông nhau).<br>• 4 ghép với A (Cân bằng năng lượng chu trình kín)."
    },
    {
      "type": "drag",
      "q": "Điền từ/cụm từ thích hợp vào chỗ trống để giải thích cơ chế sinh công của chất khí:",
      "text": "Trong quá trình dãn nở, chất khí [0] công cho môi trường ngoài. Ngược lại, khi bị nén ép bởi ngoại lực, chất khí [1] công từ môi trường. Trong một chu trình kín sinh công hữu ích (động cơ nhiệt), công sinh ra trong giai đoạn dãn nở phải [2] công tiêu tốn trong giai đoạn nén lại.",
      "words": [
        "sinh ra",
        "nhận",
        "lớn hơn",
        "hấp thụ",
        "nhỏ hơn",
        "tiêu tán"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "[0]: sinh ra | [1]: nhận | [2]: lớn hơn",
      "exp": "• Khí nở ra: <b>sinh công</b>. Khí bị nén: <b>nhận công</b>. Để có công có ích <span class=\"math-sym\">A' > 0</span> thì công sinh ra phải <b>lớn hơn</b> công nhận vào."
    },
    {
      "type": "mcq",
      "q": "Một quả bóng thám không đo khí tượng chứa khí heli được thả từ mặt đất (p₁ = 1,0 atm, T₁ = 300 K) bay lên cao vào tầng bình lưu. Khi lên tới độ cao trên 30 km, quả bóng bị nổ tung. Nguyên nhân chính là do:",
      "opts": [
        "Càng lên cao áp suất khí quyển ngoài càng giảm mạnh, làm thể tích quả bóng dãn nở vượt giới hạn đàn hồi của vỏ bóng.",
        "Càng lên cao nhiệt độ khí quyển tăng lên hàng nghìn độ C làm khí heli bên trong bốc cháy.",
        "Gió trên tầng cao thổi với vận tốc siêu thanh cọ xát làm rách thủng màng cao su của vỏ bóng.",
        "Lực hấp dẫn của Trái Đất ở độ cao 30 km triệt tiêu hoàn toàn làm vỏ bóng tự phát nổ."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Giải thích theo Phương trình trạng thái:</b> Áp dụng <span class=\"fraction\"><span class=\"numerator\">p₁ · V₁</span><span class=\"denominator\">T₁</span></span> = <span class=\"fraction\"><span class=\"numerator\">p₂ · V₂</span><span class=\"denominator\">T₂</span></span>. Thể tích lốp xe coi như gần như không đổi (V ≈ const).<br>• Khi xe chạy đường dài với tốc độ cao, ma sát giữa lốp xe với mặt đường và lực cản sinh nhiệt lớn làm nhiệt độ không khí trong lốp tăng vọt (T tăng). Do thể tích không đổi, áp suất khí nén trong lốp tăng tỉ lệ thuận với nhiệt độ (p tăng). Nếu lốp đã cũ hoặc bị bơm quá căng từ trước, áp suất vượt quá giới hạn chịu lực của vỏ lốp sẽ dẫn tới nổ lốp rất nguy hiểm."
    },
    {
      "type": "mcq",
      "q": "Người ta dùng bơm tay có thể tích mỗi lần bơm là 100 cm³ để bơm không khí ở áp suất khí quyển 1,0 · 10⁵ Pa vào một quả bóng rổ có thể tích 2,5 lít (coi không đổi). Trước khi bơm, bóng chứa không khí ở áp suất khí quyển. Bỏ qua ma sát và coi nhiệt độ không đổi. Để áp suất khí trong bóng đạt 2,4 · 10⁵ Pa thì số lần bơm tối thiểu là:",
      "opts": [
        "35 lần.",
        "25 lần.",
        "30 lần.",
        "40 lần."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Thể tích khí ban đầu: <span class=\"math-sym\">V</span><sub>1</sub> = <span class=\"math-sym\">V</span><sub>bóng</sub> + <span class=\"math-sym\">n · V</span><sub>bơm</sub> = 2500 + <span class=\"math-sym\">n</span> × 100 (cm³), ở áp suất <span class=\"math-sym\">p</span><sub>1</sub> = 1,0 · 10⁵ Pa.<br>• Sau khi bơm: khí chứa trong bóng thể tích <span class=\"math-sym\">V</span><sub>2</sub> = 2500 cm³ ở áp suất <span class=\"math-sym\">p</span><sub>2</sub> = 2,4 · 10⁵ Pa.<br>• Định luật Boyle: <span class=\"math-sym\">p</span><sub>1</sub><span class=\"math-sym\">V</span><sub>1</sub> = <span class=\"math-sym\">p</span><sub>2</sub><span class=\"math-sym\">V</span><sub>2</sub> ⇒ 1,0 × (2500 + 100<span class=\"math-sym\">n</span>) = 2,4 × 2500 = 6000.<br>• 100<span class=\"math-sym\">n</span> = 3500 ⇒ <span class=\"math-sym\">n</span> = <b>35 lần</b>."
    },
    {
      "type": "tf",
      "svgGraph": "<svg viewBox=\"0 0 540 280\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arr13\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrLoop\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#10b981\"/>\n    </marker>\n  </defs>\n  <rect width=\"540\" height=\"280\" rx=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"26\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">CHU TRÌNH NHIỆT KHÉP KÍN TRÊN GIẢN ĐỒ (p - V)</text>\n\n  <!-- Hệ trục p - V -->\n  <line x1=\"60\" y1=\"230\" x2=\"490\" y2=\"230\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr13)\"/>\n  <line x1=\"60\" y1=\"230\" x2=\"60\" y2=\"35\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr13)\"/>\n  <text x=\"475\" y=\"250\" fill=\"#94a3b8\" font-size=\"13\">V (lít)</text>\n  <text x=\"30\" y=\"45\" fill=\"#94a3b8\" font-size=\"13\">p (bar)</text>\n  <text x=\"45\" y=\"245\" fill=\"#94a3b8\" font-size=\"12\">O</text>\n\n  <!-- Chu trình chữ nhật: 1(V1=140, p2=70) -> 2(V2=360, p2=70) -> 3(V2=360, p1=170) -> 4(V1=140, p1=170) -> 1 -->\n  <!-- Vùng diện tích công A' -->\n  <polygon points=\"140,70 360,70 360,170 140,170\" fill=\"rgba(16,185,129,0.18)\" stroke=\"none\"/>\n\n  <!-- Các cạnh chu trình -->\n  <!-- 1 -> 2: dãn nở đẳng áp p2 -->\n  <line x1=\"140\" y1=\"70\" x2=\"360\" y2=\"70\" stroke=\"#10b981\" stroke-width=\"3\"/>\n  <line x1=\"240\" y1=\"70\" x2=\"255\" y2=\"70\" stroke=\"#10b981\" stroke-width=\"3\" marker-end=\"url(#arrLoop)\"/>\n\n  <!-- 2 -> 3: giảm áp đẳng tích V2 -->\n  <line x1=\"360\" y1=\"70\" x2=\"360\" y2=\"170\" stroke=\"#10b981\" stroke-width=\"3\"/>\n  <line x1=\"360\" y1=\"110\" x2=\"360\" y2=\"125\" stroke=\"#10b981\" stroke-width=\"3\" marker-end=\"url(#arrLoop)\"/>\n\n  <!-- 3 -> 4: nén đẳng áp p1 -->\n  <line x1=\"360\" y1=\"170\" x2=\"140\" y2=\"170\" stroke=\"#10b981\" stroke-width=\"3\"/>\n  <line x1=\"260\" y1=\"170\" x2=\"245\" y2=\"170\" stroke=\"#10b981\" stroke-width=\"3\" marker-end=\"url(#arrLoop)\"/>\n\n  <!-- 4 -> 1: tăng áp đẳng tích V1 -->\n  <line x1=\"140\" y1=\"170\" x2=\"140\" y2=\"70\" stroke=\"#10b981\" stroke-width=\"3\"/>\n  <line x1=\"140\" y1=\"130\" x2=\"140\" y2=\"115\" stroke=\"#10b981\" stroke-width=\"3\" marker-end=\"url(#arrLoop)\"/>\n\n  <!-- Gióng tọa độ -->\n  <line x1=\"60\" y1=\"70\" x2=\"140\" y2=\"70\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n  <line x1=\"60\" y1=\"170\" x2=\"140\" y2=\"170\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n  <line x1=\"140\" y1=\"230\" x2=\"140\" y2=\"170\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n  <line x1=\"360\" y1=\"230\" x2=\"360\" y2=\"170\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n\n  <!-- Giá trị trục số -->\n  <text x=\"35\" y=\"75\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">3,0</text>\n  <text x=\"35\" y=\"175\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">1,0</text>\n  <text x=\"135\" y=\"248\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">2,0</text>\n  <text x=\"355\" y=\"248\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\">6,0</text>\n\n  <!-- Đỉnh -->\n  <circle cx=\"140\" cy=\"70\" r=\"5\" fill=\"#f59e0b\"/>\n  <text x=\"125\" y=\"60\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\">(1)</text>\n\n  <circle cx=\"360\" cy=\"70\" r=\"5\" fill=\"#f59e0b\"/>\n  <text x=\"368\" y=\"60\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\">(2)</text>\n\n  <circle cx=\"360\" cy=\"170\" r=\"5\" fill=\"#f59e0b\"/>\n  <text x=\"368\" y=\"185\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\">(3)</text>\n\n  <circle cx=\"140\" cy=\"170\" r=\"5\" fill=\"#f59e0b\"/>\n  <text x=\"125\" y=\"185\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\">(4)</text>\n\n  <!-- Chữ công A' -->\n  <text x=\"250\" y=\"125\" fill=\"#10b981\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Công A' = S(1234)</text>\n</svg>",
      "q": "Xét chu trình biến đổi chữ nhật (1)-(2)-(3)-(4)-(1) của một khối khí lí tưởng trên giản đồ (p, V) như hình vẽ. Cho 1 bar = 10⁵ Pa và 1 lít = 10⁻³ m³. Đánh giá tính Đúng/Sai của các mệnh đề sau:",
      "stmts": [
        "Quá trình (1) → (2) là quá trình dãn nở đẳng áp ở áp suất 3,0 bar.",
        "Nhiệt độ của khối khí đạt giá trị cực đại trong chu trình tại trạng thái (2).",
        "Công A' mà chất khí sinh ra trong một chu trình bằng 800 J.",
        "Tại trạng thái (4), nhiệt độ của chất khí thấp hơn nhiệt độ tại trạng thái (1) (T₄ < T₁)."
      ],
      "ans": [
        true,
        true,
        true,
        true
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) ĐÚNG | d) ĐÚNG",
      "exp": "• <b>Ý a: ĐÚNG.</b> Đoạn (1)-(2) nằm ngang ở mức <span class=\"math-sym\">p</span> = 3,0 bar và thể tích tăng từ 2,0 lít lên 6,0 lít.<br>• <b>Ý b: ĐÚNG.</b> Nhiệt độ <span class=\"math-sym\">T ∝ p · V</span>. Tích <span class=\"math-sym\">p · V</span> lớn nhất tại điểm (2): <span class=\"math-sym\">p · V</span> = 3,0 × 6,0 = 18 bar·L.<br>• <b>Ý c: ĐÚNG.</b> Công bằng diện tích hình chữ nhật: <span class=\"math-sym\">A'</span> = Δ<span class=\"math-sym\">p</span> × Δ<span class=\"math-sym\">V</span> = (3,0 - 1,0) · 10⁵ Pa × (6,0 - 2,0) · 10⁻³ m³ = 2 · 10⁵ × 4 · 10⁻³ = <b>800 J</b>.<br>• <b>Ý d: ĐÚNG.</b> Cùng thể tích 2,0 lít, áp suất tại (4) là 1,0 bar nhỏ hơn áp suất tại (1) là 3,0 bar nên <span class=\"math-sym\">T</span><sub>4</sub> < <span class=\"math-sym\">T</span><sub>1</sub>."
    },
    {
      "type": "mcq",
      "q": "Một xilanh nằm ngang kín hai đầu, bên trong có một pit-tông cách nhiệt chia xilanh thành hai ngăn bằng nhau, mỗi ngăn có thể tích 3,0 lít chứa khí ở áp suất 1,0 atm và 27°C. Đun nóng một ngăn lên đến 127°C và giữ nguyên ngăn kia ở 27°C. Pit-tông dịch chuyển sang phía ngăn lạnh cho đến khi áp suất hai bên bằng nhau. Thể tích ngăn nóng lúc này là:",
      "opts": [
        "3,43 lít.",
        "3,60 lít.",
        "3,25 lít.",
        "3,75 lít."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Tổng thể tích hai ngăn không đổi: <span class=\"math-sym\">V</span><sub>nóng</sub> + <span class=\"math-sym\">V</span><sub>lạnh</sub> = 6,0 lít.<br>• Khi cân bằng: áp suất hai ngăn bằng nhau <span class=\"math-sym\">p</span><sub>nóng</sub> = <span class=\"math-sym\">p</span><sub>lạnh</sub>.<br>• Số mol mỗi ngăn không đổi: <span class=\"math-sym\">n</span><sub>1</sub> = <span class=\"math-sym\">n</span><sub>2</sub> ⇒ <span class=\"fraction\"><span class=\"numerator\">V<sub>n</sub>óng</span><span class=\"denominator\">T<sub>n</sub>óng</span></span> = <span class=\"fraction\"><span class=\"numerator\">V<sub>l</sub>ạnh</span><span class=\"denominator\">T<sub>l</sub>ạnh</span></span>.<br>• <span class=\"fraction\"><span class=\"numerator\">V<sub>n</sub>óng</span><span class=\"denominator\">400</span></span> = <span class=\"fraction\"><span class=\"numerator\">6,0 - V<sub>n</sub>óng</span><span class=\"denominator\">300</span></span> ⇒ 3<span class=\"math-sym\">V</span><sub>nóng</sub> = 24 - 4<span class=\"math-sym\">V</span><sub>nóng</sub> ⇒ 7<span class=\"math-sym\">V</span><sub>nóng</sub> = 24 ⇒ <span class=\"math-sym\">V</span><sub>nóng</sub> ≈ <b>3,43 lít</b>."
    }
  ],
  "14": [
    {
      "type": "mcq",
      "q": "Từ trường là một dạng vật chất đặc biệt tồn tại trong không gian xung quanh:",
      "opts": [
        "Nam châm, các hạt mang điện chuyển động hoặc dòng điện.",
        "Chỉ xung quanh các điện tích đứng yên.",
        "Chỉ xung quanh các khối kim loại có nhiệt độ rất cao.",
        "Chỉ xung quanh lõi sắt non được nối đất."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Bản chất từ trường:</b> Từ trường là môi trường vật chất tồn tại xung quanh nam châm, xung quanh dòng điện (các điện tích chuyển động) và tác dụng lực từ lên các nam châm hoặc dòng điện khác đặt trong nó."
    },
    {
      "type": "mcq",
      "q": "Quy ước về chiều của đường sức từ ở bên ngoài thanh nam châm thẳng là:",
      "opts": [
        "Đi ra từ cực Bắc (N) và đi vào cực Nam (S).",
        "Đi ra từ cực Nam (S) và đi vào cực Bắc (N).",
        "Đồng quy về tâm của thanh nam châm.",
        "Phát xuất từ cả hai cực và phân kì ra vô cực."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Quy ước chiều đường sức từ:</b> Ở bên ngoài nam châm, đường sức từ đi ra từ cực Bắc (North) và đi vào cực Nam (South) (khẩu quyết: <i>Ra Bắc vào Nam</i>).",
      "svgGraph": "<svg viewBox=\"0 0 460 210\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Bar magnet in center -->\n  <rect x=\"170\" y=\"85\" width=\"60\" height=\"40\" fill=\"#ef4444\" stroke=\"#f87171\" stroke-width=\"1.5\" rx=\"4\"/>\n  <text x=\"200\" y=\"110\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"16\" font-weight=\"800\">N</text>\n  <rect x=\"230\" y=\"85\" width=\"60\" height=\"40\" fill=\"#3b82f6\" stroke=\"#60a5fa\" stroke-width=\"1.5\" rx=\"4\"/>\n  <text x=\"260\" y=\"110\" text-anchor=\"middle\" fill=\"#fff\" font-size=\"16\" font-weight=\"800\">S</text>\n  <!-- Field lines loops -->\n  <!-- Outer top -->\n  <path d=\"M 190,85 C 190,15 270,15 270,85\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\" stroke-dasharray=\"5,2\"/>\n  <polygon points=\"230,23 238,20 238,26\" fill=\"#38bdf8\"/>\n  <!-- Middle top -->\n  <path d=\"M 200,85 C 200,45 260,45 260,85\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n  <polygon points=\"230,48 238,45 238,51\" fill=\"#38bdf8\"/>\n  <!-- Outer bottom -->\n  <path d=\"M 190,125 C 190,195 270,195 270,125\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\" stroke-dasharray=\"5,2\"/>\n  <polygon points=\"230,187 238,184 238,190\" fill=\"#38bdf8\"/>\n  <!-- Middle bottom -->\n  <path d=\"M 200,125 C 200,165 260,165 260,125\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n  <polygon points=\"230,162 238,159 238,165\" fill=\"#38bdf8\"/>\n  <!-- Out from N -->\n  <path d=\"M 170,105 L 80,105\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n  <polygon points=\"110,105 118,101 118,109\" fill=\"#38bdf8\"/>\n  <!-- Into S -->\n  <path d=\"M 290,105 L 380,105\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n  <polygon points=\"350,105 342,101 342,109\" fill=\"#38bdf8\"/>\n  <!-- Rule caption -->\n  <text x=\"230\" y=\"202\" fill=\"#34d399\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">Quy ước: Vào cực Nam (S) - Ra cực Bắc (N)</text>\n</svg>"
    },
    {
      "type": "mcq",
      "q": "Đặc điểm nào sau đây là <b>đặc trưng phân biệt cơ bản</b> giữa đường sức từ của từ trường và đường sức điện của điện trường tĩnh?",
      "opts": [
        "Đường sức từ luôn là những đường cong khép kín hoặc vô hạn ở hai đầu.",
        "Đường sức từ luôn xuất phát từ điện tích dương và kết thúc ở điện tích âm.",
        "Các đường sức từ có thể cắt nhau tại những điểm có từ trường rất mạnh.",
        "Nơi nào từ trường càng mạnh thì các đường sức từ vẽ càng thưa."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Tính chất xoáy của từ trường:</b> Đường sức từ là những <b>đường cong khép kín</b> (từ trường là trường xoáy, không có điện tích từ riêng rẽ), khác với điện trường tĩnh có đường sức xuất phát từ điện tích dương và kết thúc ở điện tích âm."
    },
    {
      "type": "tf",
      "q": "Xét về bản chất của từ trường và các đường sức từ, mỗi nhận định sau đây là Đúng hay Sai?",
      "stmts": [
        "Qua mỗi điểm trong không gian chỉ vẽ được duy nhất một đường sức từ.",
        "Nơi nào từ trường mạnh hơn thì các đường sức từ ở đó được vẽ mau hơn (dày hơn).",
        "Từ trường đều là từ trường mà vectơ cảm ứng từ có hướng và độ lớn như nhau tại mọi điểm.",
        "Kim la bàn luôn chỉ chính xác 100% về cực Bắc địa lí của Trái Đất ở mọi nơi."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) ĐÚNG | d) SAI",
      "exp": "• <b>Ý a: ĐÚNG.</b> Các đường sức từ không bao giờ cắt nhau.<br>• <b>Ý b: ĐÚNG.</b> Mật độ đường sức biểu diễn độ mạnh yếu của từ trường.<br>• <b>Ý c: ĐÚNG.</b> Định nghĩa từ trường đều (ví dụ trong lòng nam châm chữ U hoặc trong ống dây dài mang dòng điện).<br>• <b>Ý d: SAI.</b> Trục từ trường Trái Đất lệch một góc so với trục quay địa lí (góc từ thiên), cực Bắc từ của Trái Đất thực chất nằm gần cực Nam địa lí."
    },
    {
      "type": "match",
      "q": "Hãy ghép nguồn sinh ra từ trường ở Cột A với dạng hình học đặc trưng của đường sức từ ở Cột B:",
      "colA": [
        "Dòng điện thẳng dài vô hạn",
        "Trong lòng ống dây hình trụ dài mang dòng điện",
        "Dòng điện tròn",
        "Giữa hai cực nam châm hình chữ U"
      ],
      "colB": [
        "Gần như là các đường thẳng song song cách đều nhau (từ trường đều).",
        "Các đường tròn đồng tâm nằm trên mặt phẳng vuông góc với dòng điện.",
        "Các đường thẳng song song cùng chiều cách đều nhau chạy dọc trục ống.",
        "Đi qua tâm vòng dây là một đường thẳng vuông góc với mặt phẳng vòng dây."
      ],
      "ans": [
        1,
        2,
        3,
        0
      ],
      "correctText": "1-B, 2-C, 3-D, 4-A",
      "exp": "• 1 ghép với B (Dòng điện thẳng: đường tròn đồng tâm).<br>• 2 ghép với C (Trong lòng ống dây: từ trường đều dọc trục).<br>• 3 ghép với D (Dòng điện tròn: qua tâm là đường thẳng).<br>• 4 ghép với A (Giữa hai cực nam châm chữ U là từ trường đều)."
    },
    {
      "type": "drag",
      "q": "Chọn từ thích hợp điền vào chỗ trống để làm sáng tỏ khái niệm về từ trường Trái Đất:",
      "text": "Trái Đất hoạt động như một thanh nam châm khổng lồ. Cực từ nằm ở bán cầu Bắc của Trái Đất thực chất có từ tính là [0], do đó nó [1] cực Bắc của kim la bàn chỉ về hướng Bắc địa lí. Vùng không gian xung quanh Trái Đất chịu tác dụng của từ trường này được gọi là [2], có vai trò chắn các hạt tích điện nguy hiểm từ gió Mặt Trời.",
      "words": [
        "cực Nam từ",
        "hút",
        "từ quyển",
        "cực Bắc từ",
        "đẩy",
        "khí quyển"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "[0]: cực Nam từ | [1]: hút | [2]: từ quyển",
      "exp": "• Vì hai cực khác tên hút nhau, cực Bắc của la bàn hướng về phía Bắc vì ở đó có <b>cực Nam từ</b> của Trái Đất. Vùng bao quanh gọi là <b>từ quyển</b>."
    },
    {
      "type": "mcq",
      "q": "Tương tác nào sau đây <b>không phải</b> là tương tác từ?",
      "opts": [
        "Tương tác hút nhau giữa hai quả cầu tích điện trái dấu đứng yên.",
        "Tương tác giữa hai thanh nam châm đặt gần nhau.",
        "Tương tác giữa một dây dẫn mang dòng điện và một kim nam châm.",
        "Tương tác đẩy nhau giữa hai dòng điện thẳng song song ngược chiều."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Hai điện tích đứng yên tương tác với nhau bằng <b>lực tĩnh điện (lực Coulomb)</b>, không phải lực từ."
    },
    {
      "type": "mcq",
      "q": "Để phát hiện sự tồn tại của từ trường tại một vị trí trong phòng thí nghiệm, dụng cụ thực nghiệm đơn giản và hiệu quả nhất là dùng:",
      "opts": [
        "Một kim nam châm nhỏ có thể quay tự do quanh trục thẳng đứng (nam châm thử).",
        "Một thanh kim loại bằng nhôm không nhiễm điện.",
        "Một chiếc nhiệt kế rượu.",
        "Một quả cầu tích điện đứng yên."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Nam châm thử sẽ bị lệch khỏi hướng Bắc - Nam địa lí khi đưa vào vùng có từ trường lạ."
    },
    {
      "type": "tf",
      "svgGraph": "<svg viewBox=\"0 0 540 280\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arrMag\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n  </defs>\n  <rect width=\"540\" height=\"280\" rx=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"26\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">PHỔ ĐƯỜNG SỨC TỪ CỦA THANH NAM CHÂM THẲNG</text>\n\n  <!-- Thanh nam châm thẳng ở giữa -->\n  <g transform=\"translate(180, 115)\">\n    <!-- Cực Nam (S) -->\n    <rect x=\"0\" y=\"0\" width=\"90\" height=\"50\" fill=\"#0284c7\" stroke=\"#38bdf8\" stroke-width=\"1.5\" rx=\"4\"/>\n    <text x=\"45\" y=\"32\" fill=\"#ffffff\" font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\">S (Nam)</text>\n    <!-- Cực Bắc (N) -->\n    <rect x=\"90\" y=\"0\" width=\"90\" height=\"50\" fill=\"#dc2626\" stroke=\"#f87171\" stroke-width=\"1.5\" rx=\"4\"/>\n    <text x=\"135\" y=\"32\" fill=\"#ffffff\" font-size=\"18\" font-weight=\"bold\" text-anchor=\"middle\">N (Bắc)</text>\n  </g>\n\n  <!-- Đường sức từ vòng trên -->\n  <path d=\"M 360,130 C 460,70 440,35 270,35 C 100,35 80,70 180,130\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n  <path d=\"M 330,50 L 320,48\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrMag)\"/>\n  <path d=\"M 220,45 L 210,48\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrMag)\"/>\n\n  <path d=\"M 360,140 C 510,50 490,10 270,10 C 50,10 30,50 180,140\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.5\" stroke-dasharray=\"6,3\"/>\n\n  <!-- Đường sức từ vòng dưới -->\n  <path d=\"M 360,150 C 460,210 440,245 270,245 C 100,245 80,210 180,150\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n  <path d=\"M 320,232 L 330,230\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrMag)\"/>\n  <path d=\"M 210,232 L 220,230\" stroke=\"#38bdf8\" stroke-width=\"2\" marker-end=\"url(#arrMag)\"/>\n\n  <!-- Kim nam châm thử ở phía trên -->\n  <g transform=\"translate(250, 25)\">\n    <polygon points=\"0,10 20,5 40,10 20,15\" fill=\"#64748b\"/>\n    <polygon points=\"20,5 40,10 20,15\" fill=\"#dc2626\"/>\n    <polygon points=\"0,10 20,5 20,15\" fill=\"#0284c7\"/>\n    <circle cx=\"20\" cy=\"10\" r=\"2.5\" fill=\"#f8fafc\"/>\n  </g>\n  <text x=\"270\" y=\"65\" fill=\"#94a3b8\" font-size=\"11\" text-anchor=\"middle\">Kim nam châm thử định hướng theo tiếp tuyến đường sức</text>\n\n  <!-- Chú thích quy tắc -->\n  <text x=\"270\" y=\"270\" fill=\"#facc15\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Quy tắc chiều đường sức từ: \"Ra Bắc (N) – Vào Nam (S)\"</text>\n</svg>",
      "q": "Quan sát hình vẽ mô tả phổ đường sức từ của thanh nam châm thẳng. Đánh giá tính Đúng/Sai của các mệnh đề sau:",
      "stmts": [
        "Ở bên ngoài thanh nam châm, đường sức từ đi ra từ cực N (màu đỏ) và đi vào cực S (màu xanh).",
        "Kim nam châm thử đặt tại một điểm bất kì trên đường sức từ sẽ có trục định hướng tiếp tuyến với đường sức từ tại điểm đó.",
        "Mật độ các đường sức từ ở gần hai cực của nam châm là dày nhất, chứng tỏ từ trường tại hai cực là mạnh nhất.",
        "Nếu bẻ đôi thanh nam châm này ra làm hai nửa thì ta sẽ thu được một nửa chỉ mang cực Bắc và một nửa chỉ mang cực Nam."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) ĐÚNG | d) SAI",
      "exp": "• <b>Ý a: ĐÚNG.</b> Quy ước ra Bắc (N) vào Nam (S).<br>• <b>Ý b: ĐÚNG.</b> Trục kim nam châm thử luôn trùng với tiếp tuyến đường sức từ.<br>• <b>Ý c: ĐÚNG.</b> Hai đầu cực là nơi tập trung từ trường mạnh nhất.<br>• <b>Ý d: SAI.</b> Không tồn tại đơn cực từ; khi bẻ đôi mỗi mẩu sẽ tự hình thành đủ hai cực Bắc - Nam mới."
    },
    {
      "type": "mcq",
      "q": "Hai dây dẫn thẳng song song mang dòng điện cùng chiều đặt gần nhau sẽ:",
      "opts": [
        "Hút nhau.",
        "Đẩy nhau.",
        "Không tương tác.",
        "Vừa hút vừa đẩy tuần hoàn."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Quy tắc tương tác dòng điện:</b> Hai dòng điện song song <b>cùng chiều thì hút nhau</b>, <b>ngược chiều thì đẩy nhau</b>."
    }
  ],
  "15": [
    {
      "type": "mcq",
      "q": "Độ lớn của lực từ tác dụng lên một đoạn dây dẫn thẳng có chiều dài L mang dòng điện không đổi I đặt trong từ trường đều B được tính bằng công thức:",
      "opts": [
        "F = I · B · L · sinα (với α là góc giữa dây dẫn và vectơ B).",
        "F = I · B · L · cosα.",
        "F = <span class=\"fraction\"><span class=\"numerator\">I · B</span><span class=\"denominator\">L · sinα</span></span>.",
        "F = <span class=\"fraction\"><span class=\"numerator\">B · L</span><span class=\"denominator\">I · cosα</span></span>."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Định luật Ampère:</b> <span class=\"math-sym\">F = I · B · L · sin α</span>. Lực từ đạt cực đại khi dây dẫn vuông góc với đường sức từ (α = 90°).",
      "svgGraph": "<svg viewBox=\"0 0 460 210\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <linearGradient id=\"handG\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#4f46e5\"/><stop offset=\"100%\" stop-color=\"#06b6d4\"/></linearGradient>\n  </defs>\n  <!-- Vector F (Thumb, up) -->\n  <g transform=\"translate(180, 25)\">\n    <line x1=\"50\" y1=\"120\" x2=\"50\" y2=\"20\" stroke=\"#f43f5e\" stroke-width=\"4\"/>\n    <polygon points=\"50,10 42,28 58,28\" fill=\"#f43f5e\"/>\n    <text x=\"65\" y=\"25\" fill=\"#f43f5e\" font-size=\"16\" font-weight=\"800\">F (Lực từ)</text>\n    <!-- Vector I (4 fingers, right) -->\n    <line x1=\"50\" y1=\"120\" x2=\"160\" y2=\"120\" stroke=\"#10b981\" stroke-width=\"4\"/>\n    <polygon points=\"170,120 152,112 152,128\" fill=\"#10b981\"/>\n    <text x=\"175\" y=\"125\" fill=\"#10b981\" font-size=\"16\" font-weight=\"800\">I (Dòng điện)</text>\n    <!-- Vector B (Field into palm, perspective dots) -->\n    <circle cx=\"50\" cy=\"120\" r=\"10\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"3\"/>\n    <line x1=\"43\" y1=\"113\" x2=\"57\" y2=\"127\" stroke=\"#38bdf8\" stroke-width=\"3\"/>\n    <line x1=\"57\" y1=\"113\" x2=\"43\" y2=\"127\" stroke=\"#38bdf8\" stroke-width=\"3\"/>\n    <text x=\"35\" y=\"150\" fill=\"#38bdf8\" font-size=\"15\" font-weight=\"800\">B (Cảm ứng từ đi vào lòng bàn tay ⊗)</text>\n  </g>\n  <rect x=\"25\" y=\"30\" width=\"135\" height=\"145\" rx=\"12\" fill=\"rgba(79,70,229,0.15)\" stroke=\"#818cf8\" stroke-width=\"1.5\"/>\n  <text x=\"92\" y=\"55\" fill=\"#818cf8\" font-size=\"13\" font-weight=\"800\" text-anchor=\"middle\">QUY TẮC</text>\n  <text x=\"92\" y=\"73\" fill=\"#818cf8\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">BÀN TAY TRÁI</text>\n  <text x=\"92\" y=\"105\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">• Lòng tay hứng B</text>\n  <text x=\"92\" y=\"125\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">• 4 ngón chỉ chiều I</text>\n  <text x=\"92\" y=\"145\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">• Ngón cái 90° chỉ F</text>\n</svg>"
    },
    {
      "type": "mcq",
      "q": "Đơn vị đo của cảm ứng từ B trong hệ đơn vị chuẩn SI là:",
      "opts": [
        "Tesla (T).",
        "Weber (Wb).",
        "Henry (H).",
        "Volt (V)."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Đơn vị của cảm ứng từ là <b>Tesla (ký hiệu: T)</b>. 1 T = 1 N / (A·m)."
    },
    {
      "type": "mcq",
      "q": "Một đoạn dây dẫn thẳng dài 0,2 m mang dòng điện 5,0 A đặt trong từ trường đều có cảm ứng từ B = 0,4 T. Dây dẫn vuông góc với các đường sức từ. Lực từ tác dụng lên đoạn dây dẫn có độ lớn là:",
      "opts": [
        "0,40 N.",
        "0,20 N.",
        "0,80 N.",
        "0,04 N."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Vì dây vuông góc với từ trường nên sinα = sin 90° = 1.<br>• <span class=\"math-sym\">F = I · B · L</span> = 5,0 × 0,4 × 0,2 = <b>0,40 N</b>."
    },
    {
      "type": "tf",
      "q": "Xét quy tắc bàn tay trái và đặc tính của lực từ tác dụng lên dòng điện. Mỗi khẳng định sau là Đúng hay Sai?",
      "stmts": [
        "Quy tắc bàn tay trái: Đặt bàn tay trái sao cho lòng bàn tay hứng các đường sức từ, chiều từ cổ tay đến các ngón tay chỉ chiều dòng điện thì ngón tay cái choãi ra 90° chỉ chiều của lực từ.",
        "Lực từ tác dụng lên đoạn dòng điện luôn vuông góc đồng thời với cả đoạn dây dẫn và vectơ cảm ứng từ B.",
        "Nếu đoạn dây dẫn đặt song song với các đường cảm ứng từ thì lực từ tác dụng lên nó đạt giá trị cực đại.",
        "Khi đổi chiều đồng thời cả dòng điện I và cảm ứng từ B thì chiều của lực từ tác dụng lên dây dẫn không bị thay đổi."
      ],
      "ans": [
        true,
        true,
        false,
        true
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) SAI | d) ĐÚNG",
      "exp": "• <b>Ý a: ĐÚNG.</b> Nội dung chuẩn quy tắc bàn tay trái.<br>• <b>Ý b: ĐÚNG.</b> Vectơ <span class=\"math-sym\">F ⊥ (I, B)</span>.<br>• <b>Ý c: SAI.</b> Khi song song thì <span class=\"math-sym\">α = 0° ⇒ sin α = 0 ⇒ F = 0</span> (lực từ bằng 0).<br>• <b>Ý d: ĐÚNG.</b> Đổi dấu hai lần thì tích có hướng giữ nguyên chiều."
    },
    {
      "type": "match",
      "q": "Hãy ghép ngón tay/bộ phận của bàn tay trái ở Cột A với đại lượng tương ứng trong quy tắc bàn tay trái ở Cột B:",
      "colA": [
        "Ngón tay cái choãi ra 90°",
        "Chiều từ cổ tay đến ngón tay giữa",
        "Lòng bàn tay",
        "Góc giữa ngón giữa và ngón cái"
      ],
      "colB": [
        "Hướng theo chiều của dòng điện I.",
        "Hứng các đường sức từ (hướng ngược chiều vectơ B).",
        "Chỉ chiều của lực từ tác dụng lên đoạn dòng điện.",
        "Góc vuông 90°."
      ],
      "ans": [
        2,
        0,
        1,
        3
      ],
      "correctText": "1-C, 2-A, 3-B, 4-D",
      "exp": "• 1 ghép với C (Ngón cái chỉ lực từ F).<br>• 2 ghép với A (Ngón giữa theo dòng điện I).<br>• 3 ghép với B (Lòng bàn tay hứng B).<br>• 4 ghép với D (Góc choãi 90°)."
    },
    {
      "type": "drag",
      "q": "Chọn từ thích hợp điền vào chỗ trống để hoàn thiện định nghĩa vectơ cảm ứng từ:",
      "text": "Vectơ cảm ứng từ B tại một điểm đặc trưng cho từ trường về mặt [0] lực. Vectơ B có phương trùng với [1] của đường sức từ tại điểm đó và có chiều trùng với chiều của từ trường (từ cực [2] sang cực Bắc của kim nam châm thử cân bằng tại đó).",
      "words": [
        "tác dụng",
        "tiếp tuyến",
        "Nam",
        "pháp tuyến",
        "sinh công",
        "Bắc"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "[0]: tác dụng | [1]: tiếp tuyến | [2]: Nam",
      "exp": "• B đặc trưng cho tác dụng lực, có phương tiếp tuyến với đường sức từ, chiều từ Nam sang Bắc của nam châm thử."
    },
    {
      "type": "mcq",
      "q": "Trong đời sống hằng ngày, thiết bị nào sau đây hoạt động dựa trên ứng dụng trực tiếp của lực từ tác dụng lên khung dây dẫn có dòng điện đặt trong từ trường?",
      "opts": [
        "Động cơ điện một chiều trong quạt máy, máy bơm nước và xe đạp điện.",
        "Bình thủy điện giữ nhiệt dùng trong sinh hoạt gia đình.",
        "Ấm đun nước siêu tốc bằng điện trở may-so đốt nóng.",
        "Bóng đèn sợi đốt halogen dùng để chiếu sáng trong nhà."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Ứng dụng của lực từ:</b> Động cơ điện (motor) hoạt động dựa trên tác dụng của lực từ lên các đoạn dây dẫn của khung dây mang dòng điện đặt trong từ trường.<br>• Cặp lực từ tác dụng lên hai cạnh đối diện của khung dây tạo thành một ngẫu lực từ, làm khung dây quay liên tục quanh trục của nó, chuyển hóa điện năng thành cơ năng phục vụ đời sống."
    },
    {
      "type": "mcq",
      "q": "Nguyên lí phát ra âm thanh của một chiếc loa điện động (loa thùng, tai nghe thông thường) dựa trên hiện tượng vật lí nào sau đây?",
      "opts": [
        "Lực từ tác dụng lên cuộn dây mang dòng âm tần đặt trong từ trường của nam châm, làm cuộn dây và màng loa dao động.",
        "Hiện tượng quang điện giải phóng các hạt electron tự do làm rung chuyển các phân tử không khí.",
        "Lực ma sát cơ học giữa cuộn dây và lõi thép tạo ra âm thanh truyền qua màng loa.",
        "Sự dãn nở vì nhiệt tuần hoàn của màng loa khi có dòng điện chạy qua điện trở."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Nguyên lí loa điện động:</b> Loa điện động gồm một nam châm vĩnh cửu tạo từ trường hướng tâm và một cuộn dây (cuộn âm thanh) gắn liền với màng loa đặt trong khe từ trường.<br>• Khi dòng điện xoay chiều mang tín hiệu âm tần chạy qua cuộn dây, từ trường tác dụng lực từ F<sub>t</sub>ừ lên cuộn dây làm nó dao động dọc theo trục theo phương vuông góc với đường sức từ.<br>• Cuộn dây kéo theo màng loa dao động, nén và dãn các lớp không khí xung quanh, tái tạo sóng âm truyền đến tai người nghe."
    },
    {
      "type": "tf",
      "svgGraph": "<svg viewBox=\"0 0 540 280\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arrF\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#f43f5e\"/>\n    </marker>\n    <marker id=\"arrB\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#06b6d4\"/>\n    </marker>\n    <marker id=\"arrI\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#fbbf24\"/>\n    </marker>\n  </defs>\n  <rect width=\"540\" height=\"280\" rx=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"26\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">QUY TẮC BÀN TAY TRÁI XÁC ĐỊNH LỰC TỪ</text>\n\n  <!-- Đoạn dây dẫn nằm ngang -->\n  <line x1=\"120\" y1=\"180\" x2=\"420\" y2=\"180\" stroke=\"#f59e0b\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n  <line x1=\"240\" y1=\"180\" x2=\"300\" y2=\"180\" stroke=\"#fbbf24\" stroke-width=\"4\" marker-end=\"url(#arrI)\"/>\n  <text x=\"320\" y=\"200\" fill=\"#fbbf24\" font-size=\"14\" font-weight=\"bold\">Dòng điện I</text>\n\n  <!-- Các vectơ cảm ứng từ B vuông góc đâm xuống -->\n  <g stroke=\"#06b6d4\" stroke-width=\"2.5\">\n    <line x1=\"170\" y1=\"90\" x2=\"170\" y2=\"160\" marker-end=\"url(#arrB)\"/>\n    <line x1=\"270\" y1=\"90\" x2=\"270\" y2=\"160\" marker-end=\"url(#arrB)\"/>\n    <line x1=\"370\" y1=\"90\" x2=\"370\" y2=\"160\" marker-end=\"url(#arrB)\"/>\n  </g>\n  <text x=\"285\" y=\"110\" fill=\"#06b6d4\" font-size=\"14\" font-weight=\"bold\">Từ trường B</text>\n\n  <!-- Vectơ lực từ F hướng ra ngoài (góc chiếu 3D hướng chéo lên) -->\n  <line x1=\"270\" y1=\"180\" x2=\"270\" y2=\"70\" stroke=\"#f43f5e\" stroke-width=\"3.5\" marker-end=\"url(#arrF)\"/>\n  <text x=\"285\" y=\"75\" fill=\"#f43f5e\" font-size=\"16\" font-weight=\"bold\">Lực từ F = I·B·L·sinα</text>\n\n  <!-- Hộp mô tả bàn tay trái -->\n  <rect x=\"60\" y=\"215\" width=\"420\" height=\"50\" rx=\"8\" fill=\"rgba(30,41,59,0.85)\" stroke=\"#475569\" stroke-width=\"1\"/>\n  <text x=\"70\" y=\"235\" fill=\"#cbd5e1\" font-size=\"11\">• <b>Lòng bàn tay:</b> Hứng các đường sức từ B.</text>\n  <text x=\"70\" y=\"252\" fill=\"#cbd5e1\" font-size=\"11\">• <b>Chiều cổ tay đến ngón giữa:</b> Hướng theo dòng điện I.</text>\n  <text x=\"280\" y=\"252\" fill=\"#f43f5e\" font-size=\"11\" font-weight=\"bold\">• <b>Ngón cái choãi 90°:</b> Chỉ chiều lực từ F.</text>\n</svg>",
      "q": "Quan sát hình vẽ mô tả đoạn dây dẫn mang dòng điện trong từ trường đều và quy tắc bàn tay trái. Đánh giá tính Đúng/Sai của các mệnh đề sau:",
      "stmts": [
        "Theo hình vẽ, dòng điện I chạy từ trái sang phải và cảm ứng từ B hướng thẳng đứng từ trên xuống dưới.",
        "Lực từ F tác dụng lên đoạn dây dẫn hướng thẳng đứng từ dưới lên trên.",
        "Nếu đồng thời tăng cường độ dòng điện lên 2 lần và giảm cảm ứng từ đi 2 lần thì độ lớn của lực từ không đổi.",
        "Nếu xoay đoạn dây dẫn sao cho nó song song với phương thẳng đứng của cảm ứng từ B thì lực từ đạt cực đại."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) ĐÚNG | d) SAI",
      "exp": "• <b>Ý a: ĐÚNG.</b> Trục dây nằm ngang, chiều dòng điện sang phải, mũi tên B hướng xuống.<br>• <b>Ý b: ĐÚNG.</b> Đặt tay trái hứng B (lòng bàn tay ngửa lên), 4 ngón sang phải thì ngón cái chỉ lên trên.<br>• <b>Ý c: ĐÚNG.</b> <span class=\"math-sym\">F = (2I) · <span class=\"fraction\"><span class=\"numerator\">B</span><span class=\"denominator\">2</span></span> · L = I · B · L</span> (không đổi).<br>• <b>Ý d: SAI.</b> Khi song song thì <span class=\"math-sym\">α = 0 ⇒ F = 0</span>."
    },
    {
      "type": "mcq",
      "q": "Tàu đệm từ trường (Maglev) có thể di chuyển với vận tốc cực cao (trên 500 km/h) mà vẫn rất êm ái. Đặc điểm vật lí cốt lõi giúp tàu đạt được vận tốc này là:",
      "opts": [
        "Lực từ giữa nam châm siêu dẫn nâng thân tàu lơ lửng trên đường ray, triệt tiêu hoàn toàn ma sát lăn cơ học.",
        "Tàu được trang bị động cơ phản lực đốt cháy nhiên liệu hạt nhân ở đuôi tàu.",
        "Đường ray của tàu được bọc kín và hút chân không tuyệt đối làm giảm lực cản không khí về 0.",
        "Trọng lực của Trái Đất tác dụng lên đoàn tàu bị triệt tiêu hoàn toàn khi tàu đạt tốc độ cao."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Ứng dụng của lực từ trong tàu đệm từ Maglev:</b> Hệ thống nam châm điện siêu dẫn đặt trên thân tàu và đường ray tạo ra lực từ cực mạnh cùng dấu để đẩy tàu nâng bổng lên cách mặt ray khoảng 10 - 15 mm.<br>• Nhờ không có sự tiếp xúc cơ học trực tiếp giữa bánh xe và ray, lực ma sát lăn bị triệt tiêu hoàn toàn, chỉ còn lực cản của không khí.<br>• Điều này giúp tàu Maglev vận hành êm ái, giảm thiểu tiếng ồn và đạt tốc độ siêu cao vượt trội (từ 400 đến trên 600 km/h) mà các đoàn tàu bánh sắt truyền thống khó đạt được."
    }
  ],
  "16": [
    {
      "type": "mcq",
      "q": "Từ thông Φ xuyên qua diện tích S của một khung dây phẳng đặt trong từ trường đều B được xác định bởi công thức:",
      "opts": [
        "Φ = B · S · cosα (với α là góc giữa vectơ cảm ứng từ B và vectơ pháp tuyến n của khung dây).",
        "Φ = B · S · sinα.",
        "Φ = <span class=\"fraction\"><span class=\"numerator\">B</span><span class=\"denominator\">S · cosα</span></span>.",
        "Φ = I · B · S."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Định nghĩa từ thông:</b> <span class=\"math-sym\">Φ = B · S · cos α</span>.<br>• Trong đó <span class=\"math-sym\">α = (n, B)</span>. Từ thông có đơn vị là <b>Weber (Wb)</b>."
    },
    {
      "type": "mcq",
      "q": "Điều kiện cần và đủ để xuất hiện dòng điện cảm ứng trong một mạch kín là:",
      "opts": [
        "Từ thông qua diện tích giới hạn bởi mạch kín phải biến thiên theo thời gian.",
        "Mạch kín phải được đặt trong một từ trường có độ lớn cực đại không đổi.",
        "Khung dây phải được làm bằng chất liệu siêu dẫn.",
        "Từ trường gửi qua mạch kín phải có các đường sức từ hoàn toàn song song."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Hiện tượng cảm ứng điện từ:</b> Dòng điện cảm ứng chỉ xuất hiện trong mạch kín <b>khi và chỉ khi từ thông qua mạch biến thiên</b> theo thời gian."
    },
    {
      "type": "mcq",
      "q": "Theo <b>Định luật Lenz</b>, dòng điện cảm ứng xuất hiện trong mạch kín có chiều sao cho:",
      "opts": [
        "Từ trường do nó sinh ra có tác dụng chống lại sự biến thiên của từ thông ban đầu gửi qua mạch kín.",
        "Làm cho từ thông qua mạch luôn luôn tăng lên cực đại.",
        "Làm cho khung dây quay theo chiều kim đồng hồ trong mọi trường hợp.",
        "Từ trường cảm ứng luôn luôn cùng chiều với từ trường ban đầu."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Định luật Lenz:</b> Thể hiện tính bảo toàn năng lượng và chống lại nguyên nhân sinh ra nó: Nếu từ thông ban đầu tăng thì từ trường cảm ứng sẽ ngược chiều để chống tăng; nếu từ thông giảm thì từ trường cảm ứng sẽ cùng chiều để chống giảm."
    },
    {
      "type": "tf",
      "q": "Xét các quy tắc và định luật về hiện tượng cảm ứng điện từ. Mỗi nhận định sau là Đúng hay Sai?",
      "stmts": [
        "Độ lớn của suất điện động cảm ứng trong mạch kín tỉ lệ với tốc độ biến thiên của từ thông qua mạch đó (ec = -<span class=\"fraction\"><span class=\"numerator\">ΔΦ</span><span class=\"denominator\">Δt</span></span>).",
        "Từ thông qua mặt phẳng khung dây đạt giá trị cực đại khi mặt phẳng khung đặt song song với các đường sức từ.",
        "Khi đưa cực Bắc của thanh nam châm lại gần một vòng nhôm kín thì vòng nhôm sẽ bị đẩy ra xa.",
        "Hiện tượng tự cảm là một trường hợp đặc biệt của hiện tượng cảm ứng điện từ xảy ra trong chính mạch có dòng điện biến thiên."
      ],
      "ans": [
        true,
        false,
        true,
        true
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) ĐÚNG | d) ĐÚNG",
      "exp": "• <b>Ý a: ĐÚNG.</b> Định luật Faraday về suất điện động cảm ứng.<br>• <b>Ý b: SAI.</b> Khi mặt phẳng khung song song với B thì pháp tuyến n vuông góc với B ⇒ α = 90° ⇒ cosα = 0 ⇒ Φ = 0 (từ thông bằng 0, không phải cực đại).<br>• <b>Ý c: ĐÚNG.</b> Theo định luật Lenz, khi nam châm lại gần (từ thông tăng), vòng nhôm xuất hiện dòng điện tạo từ trường ngược chiều đẩy nam châm (chống lại sự lại gần).<br>• <b>Ý d: ĐÚNG.</b> Đây là bản chất của hiện tượng tự cảm."
    },
    {
      "type": "match",
      "q": "Hãy ghép các đại lượng/định luật ở Cột A với đơn vị hoặc nội hàm tương ứng ở Cột B:",
      "colA": [
        "Từ thông Φ",
        "Suất điện động cảm ứng ec",
        "Định luật Lenz",
        "Tốc độ biến thiên từ thông"
      ],
      "colB": [
        "Đơn vị là Weber trên giây (Wb/s) hay Volt (V).",
        "Đơn vị đo là Weber (Wb) trong hệ SI.",
        "Xác định chiều của dòng điện cảm ứng xuất hiện trong mạch kín.",
        "Có đơn vị là Volt (V), tính bằng -<span class=\"fraction\"><span class=\"numerator\">ΔΦ</span><span class=\"denominator\">Δt</span></span>."
      ],
      "ans": [
        1,
        3,
        2,
        0
      ],
      "correctText": "1-B, 2-D, 3-C, 4-A",
      "exp": "• 1 ghép với B (Từ thông đơn vị Wb).<br>• 2 ghép với D (Suất điện động đơn vị V).<br>• 3 ghép với C (Định luật Lenz xác định chiều).<br>• 4 ghép với A (Tốc độ biến thiên Wb/s)."
    },
    {
      "type": "drag",
      "q": "Chọn từ thích hợp điền vào chỗ trống để làm sáng tỏ định luật Faraday:",
      "text": "Độ lớn của suất điện động cảm ứng xuất hiện trong một mạch kín tỉ lệ thuận với [0] của từ thông gửi qua diện tích giới hạn bởi mạch đó. Dấu trừ trong biểu thức của định luật Faraday thể hiện sự phù hợp với [1], phản ánh tính chất [2] nguyên nhân sinh ra nó.",
      "words": [
        "tốc độ biến thiên",
        "định luật Lenz",
        "chống lại",
        "độ lớn tuyệt đối",
        "hỗ trợ",
        "định luật Ohm"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "[0]: tốc độ biến thiên | [1]: định luật Lenz | [2]: chống lại",
      "exp": "• Biểu thức <span class=\"math-sym\">e</span><sub>c</sub> = <span class=\"fraction\"><span class=\"numerator\">-ΔΦ</span><span class=\"denominator\">Δt</span></span>. Dấu trừ thể hiện <b>định luật Lenz</b> chống lại sự biến thiên."
    },
    {
      "type": "mcq",
      "q": "Một khung dây phẳng có diện tích 20 cm² gồm 100 vòng dây đặt trong từ trường đều có vectơ B vuông góc với mặt phẳng khung. Trong khoảng thời gian 0,02 s, cảm ứng từ giảm đều từ 0,5 T về 0,1 T. Độ lớn của suất điện động cảm ứng xuất hiện trong khung dây là:",
      "opts": [
        "4,0 V.",
        "2,0 V.",
        "8,0 V.",
        "0,4 V."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Vectơ B vuông góc mặt phẳng khung ⇒ cos 0° = 1.<br>• <span class=\"math-sym\">|e</span><sub>c</sub><span class=\"math-sym\">| = N · S ·</span> <span class=\"fraction\"><span class=\"numerator\">|ΔB|</span><span class=\"denominator\">Δt</span></span> = 100 × 20 · 10⁻⁴ × <span class=\"fraction\"><span class=\"numerator\">0,5 - 0,1</span><span class=\"denominator\">0,02</span></span> = 0,2 × 20 = <b>4,0 V</b>."
    },
    {
      "type": "mcq",
      "q": "Trong hệ thống giao thông hiện đại, phanh điện từ sử dụng dòng điện Fu-cô (Foucault) được trang bị phổ biến trên các đoàn tàu cao tốc (như Shinkansen, TGV). Ưu điểm nổi bật của loại phanh này so với phanh ma sát cơ học là:",
      "opts": [
        "Quá trình hãm phanh êm ái ở tốc độ cao, không mòn đĩa phanh và không phát sinh tia lửa hay bụi ma sát độc hại.",
        "Phanh điện từ có thể dừng đoàn tàu tức thì chỉ trong 0,01 giây mà hoàn toàn không gây gia tốc quán tính.",
        "Phanh điện từ tự động tăng công suất phát điện của động cơ kéo đoàn tàu trong khi hãm.",
        "Phanh điện từ vận hành mà không cần bất kì từ trường nào tác dụng lên đĩa kim loại dẫn điện."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Ứng dụng dòng điện Fu-cô:</b> Khi phanh điện từ hoạt động, một từ trường mạnh được đặt xuyên qua đĩa kim loại gắn với trục bánh xe (hoặc ray dẫn).<br>• Sự quay của đĩa kim loại trong từ trường làm từ thông biến thiên, sinh ra dòng điện xoay tròn Foucault bên trong khối kim loại. Theo định luật Lenz, lực từ tác dụng lên các dòng điện này luôn chống lại nguyên nhân sinh ra nó (chống lại chuyển động quay), tạo ra mômen hãm xe dừng lại mà không hề có sự cọ xát mài mòn cơ học."
    },
    {
      "type": "tf",
      "svgGraph": "<svg viewBox=\"0 0 540 280\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arr16\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#94a3b8\"/>\n    </marker>\n  </defs>\n  <rect width=\"540\" height=\"280\" rx=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"26\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">ĐỒ THỊ TỪ THÔNG Φ(t) &amp; SUẤT ĐIỆN ĐỘNG CẢM ỨNG ec(t)</text>\n\n  <!-- Đồ thị 1: Phi(t) -->\n  <g transform=\"translate(40, 40)\">\n    <line x1=\"20\" y1=\"90\" x2=\"210\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"1.5\" marker-end=\"url(#arr16)\"/>\n    <line x1=\"20\" y1=\"90\" x2=\"20\" y2=\"15\" stroke=\"#94a3b8\" stroke-width=\"1.5\" marker-end=\"url(#arr16)\"/>\n    <text x=\"200\" y=\"105\" fill=\"#94a3b8\" font-size=\"11\">t (s)</text>\n    <text x=\"5\" y=\"20\" fill=\"#38bdf8\" font-size=\"11\">Φ (Wb)</text>\n\n    <!-- Đường Phi tăng tuyến tính rồi đi ngang -->\n    <line x1=\"20\" y1=\"90\" x2=\"100\" y2=\"30\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n    <line x1=\"100\" y1=\"30\" x2=\"190\" y2=\"30\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n\n    <line x1=\"100\" y1=\"30\" x2=\"100\" y2=\"90\" stroke=\"#475569\" stroke-width=\"1\" stroke-dasharray=\"3,3\"/>\n    <text x=\"15\" y=\"102\" fill=\"#94a3b8\" font-size=\"10\">0</text>\n    <text x=\"95\" y=\"102\" fill=\"#94a3b8\" font-size=\"10\">t₁</text>\n    <text x=\"185\" y=\"102\" fill=\"#94a3b8\" font-size=\"10\">t₂</text>\n    <text x=\"2\" y=\"35\" fill=\"#38bdf8\" font-size=\"10\">Φ₀</text>\n\n    <text x=\"105\" y=\"125\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Từ thông tăng rồi không đổi</text>\n  </g>\n\n  <!-- Đồ thị 2: ec(t) -->\n  <g transform=\"translate(290, 40)\">\n    <line x1=\"20\" y1=\"60\" x2=\"210\" y2=\"60\" stroke=\"#94a3b8\" stroke-width=\"1.5\" marker-end=\"url(#arr16)\"/>\n    <line x1=\"20\" y1=\"100\" x2=\"20\" y2=\"15\" stroke=\"#94a3b8\" stroke-width=\"1.5\" marker-end=\"url(#arr16)\"/>\n    <text x=\"200\" y=\"75\" fill=\"#94a3b8\" font-size=\"11\">t (s)</text>\n    <text x=\"5\" y=\"20\" fill=\"#f43f5e\" font-size=\"11\">ec (V)</text>\n\n    <!-- Giai đoạn 1: ec âm không đổi; Giai đoạn 2: ec = 0 -->\n    <line x1=\"20\" y1=\"85\" x2=\"100\" y2=\"85\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n    <line x1=\"100\" y1=\"85\" x2=\"100\" y2=\"60\" stroke=\"#f43f5e\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"/>\n    <line x1=\"100\" y1=\"60\" x2=\"190\" y2=\"60\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n\n    <text x=\"95\" y=\"55\" fill=\"#94a3b8\" font-size=\"10\">t₁</text>\n    <text x=\"185\" y=\"55\" fill=\"#94a3b8\" font-size=\"10\">t₂</text>\n    <text x=\"2\" y=\"90\" fill=\"#f43f5e\" font-size=\"10\">-E₀</text>\n\n    <text x=\"105\" y=\"125\" fill=\"#f43f5e\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">ec = -ΔΦ/Δt (xung bậc thang)</text>\n  </g>\n\n  <!-- Kết luận định luật Lenz -->\n  <rect x=\"50\" y=\"200\" width=\"440\" height=\"58\" rx=\"8\" fill=\"rgba(30,41,59,0.85)\" stroke=\"#475569\" stroke-width=\"1\"/>\n  <text x=\"65\" y=\"222\" fill=\"#facc15\" font-size=\"12\" font-weight=\"bold\">• Định luật Lenz:</text>\n  <text x=\"165\" y=\"222\" fill=\"#cbd5e1\" font-size=\"12\">Dòng điện cảm ứng có chiều sao cho từ trường do nó sinh ra</text>\n  <text x=\"65\" y=\"242\" fill=\"#cbd5e1\" font-size=\"12\">có tác dụng <b>chống lại sự biến thiên của từ thông</b> ban đầu gửi qua mạch.</text>\n</svg>",
      "q": "Quan sát đồ thị từ thông Φ(t) và suất điện động cảm ứng ec(t) như hình bên. Đánh giá tính Đúng/Sai của các mệnh đề sau:",
      "stmts": [
        "Trong khoảng thời gian từ 0 đến t₁, từ thông tăng đều theo hàm bậc nhất nên suất điện động cảm ứng ec có giá trị âm không đổi.",
        "Trong khoảng thời gian từ t₁ đến t₂, từ thông giữ nguyên không đổi nên suất điện động cảm ứng ec bằng 0.",
        "Nếu thời gian tăng từ thông từ 0 đến t₁ bị rút ngắn một nửa thì độ lớn suất điện động cảm ứng sẽ tăng gấp đôi.",
        "Khi từ thông đạt giá trị cực đại Φ₀ ở thời điểm t₁ thì suất điện động cảm ứng cũng đạt giá trị cực đại."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) ĐÚNG | d) SAI",
      "exp": "• <b>Ý a: ĐÚNG.</b> Đạo hàm bậc nhất của hàm tuyến tính là hằng số, có dấu trừ theo định luật Faraday.<br>• <b>Ý b: ĐÚNG.</b> <span class=\"math-sym\">ΔΦ = 0 ⇒ e</span><sub>c</sub> = 0.<br>• <b>Ý c: ĐÚNG.</b> Tốc độ biến thiên tăng gấp đôi thì độ lớn <span class=\"math-sym\">e</span><sub>c</sub> tăng gấp đôi.<br>• <b>Ý d: SAI.</b> Tại <span class=\"math-sym\">t</span><sub>1</sub> từ thông đạt cực đại và không đổi nên đạo hàm bằng 0, suất điện động bằng 0."
    },
    {
      "type": "mcq",
      "q": "Khi đưa một thanh nam châm dịch chuyển ra xa một cuộn dây dẫn kín, dòng điện cảm ứng xuất hiện trong cuộn dây sẽ có chiều sinh ra từ trường nhằm mục đích:",
      "opts": [
        "Hút thanh nam châm lại gần cuộn dây (chống lại sự dịch chuyển ra xa).",
        "Đẩy thanh nam châm ra xa nhanh hơn nữa.",
        "Triệt tiêu hoàn toàn từ trường của chính thanh nam châm.",
        "Làm nóng cuộn dây đến khi nóng chảy."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Theo định luật Lenz:</b> Dòng điện cảm ứng luôn sinh ra lực từ chống lại chuyển động tương đối. Khi nam châm ra xa, nó sẽ hút lại để ngăn cản sự chuyển động ra xa đó."
    }
  ],
  "17": [
    {
      "type": "mcq",
      "q": "Nguyên tắc hoạt động của máy phát điện xoay chiều một pha dựa trên hiện tượng vật lí nào?",
      "opts": [
        "Hiện tượng cảm ứng điện từ.",
        "Hiện tượng tự cảm.",
        "Hiện tượng tỏa nhiệt Joule - Lenz.",
        "Hiện tượng quang điện ngoài."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Nguyên tắc:</b> Máy phát điện xoay chiều hoạt động dựa trên <b>hiện tượng cảm ứng điện từ</b>: khi từ thông qua cuộn dây biến thiên tuần hoàn (do roto quay), trong cuộn dây xuất hiện suất điện động xoay chiều."
    },
    {
      "type": "mcq",
      "q": "Mối quan hệ giữa giá trị hiệu dụng U và giá trị cực đại (biên độ) U₀ của điện áp xoay chiều hình sin là:",
      "opts": [
        "U = <span class=\"fraction\"><span class=\"numerator\">U₀</span><span class=\"denominator\"><span class=\"sqrt\"><span class=\"rad\">√</span><span class=\"radicand\">2</span></span></span></span>.",
        "U = U₀ · <span class=\"sqrt\"><span class=\"rad\">√</span><span class=\"radicand\">2</span></span>.",
        "U = 2 · U₀.",
        "U = <span class=\"fraction\"><span class=\"numerator\">U₀</span><span class=\"denominator\">2</span></span>."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Giá trị hiệu dụng:</b> <span class=\"math-sym\">U</span> = <span class=\"fraction\"><span class=\"numerator\">U₀</span><span class=\"denominator\"><span class=\"sqrt\"><span class=\"rad\">√</span><span class=\"radicand\">2</span></span></span></span> ≈ 0,707 <span class=\"math-sym\">U</span><sub>0</sub>."
    },
    {
      "type": "mcq",
      "q": "Điện áp xoay chiều của mạng điện sinh hoạt dân dụng tại Việt Nam có giá trị hiệu dụng 220 V và tần số 50 Hz. Giá trị cực đại của điện áp này xấp xỉ bằng:",
      "opts": [
        "311 V.",
        "220 V.",
        "440 V.",
        "155 V."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <span class=\"math-sym\">U</span><sub>0</sub> = <span class=\"math-sym\">U · <span class=\"sqrt\"><span class=\"rad\">√</span><span class=\"radicand\">2</span></span></span> = 220 × 1,414 ≈ <b>311 V</b>."
    },
    {
      "type": "tf",
      "q": "Xét cấu tạo và hoạt động của máy phát điện xoay chiều. Mỗi phát biểu sau là Đúng hay Sai?",
      "stmts": [
        "Máy phát điện xoay chiều gồm hai bộ phận chính là phần cảm (tạo ra từ trường) và phần ứng (tạo ra suất điện động cảm ứng).",
        "Bộ phận đứng yên được gọi là stato, bộ phận quay quanh trục được gọi là roto.",
        "Tần số của dòng điện xoay chiều do máy phát có p cặp cực và roto quay với tốc độ n (vòng/s) sinh ra là f = n · p.",
        "Các đồng hồ đo điện đa năng hiện số (VOM) khi đo dòng điện xoay chiều sẽ chỉ giá trị cực đại của dòng điện."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) ĐÚNG | d) SAI",
      "exp": "• <b>Ý a: ĐÚNG.</b> Phần cảm tạo từ trường, phần ứng sinh dòng điện.<br>• <b>Ý b: ĐÚNG.</b> Định nghĩa stato (tĩnh) và roto (quay).<br>• <b>Ý c: ĐÚNG.</b> Công thức chuẩn: <span class=\"math-sym\">f = n · p</span> (với n tính bằng vòng/giây).<br>• <b>Ý d: SAI.</b> Các dụng cụ đo vôn kế, ampe kế nhiệt luôn chỉ <b>giá trị hiệu dụng</b>."
    },
    {
      "type": "match",
      "q": "Hãy ghép các thông số/khái niệm ở Cột A với bản chất ở Cột B:",
      "colA": [
        "Phần cảm",
        "Phần ứng",
        "f = n · p",
        "Giá trị hiệu dụng"
      ],
      "colB": [
        "Bộ phận chứa các cuộn dây sinh ra suất điện động cảm ứng.",
        "Công thức tính tần số dòng điện xoay chiều (n: vòng/s, p: số cặp cực).",
        "Đại lượng đo bằng tác dụng nhiệt tương đương với dòng điện không đổi.",
        "Bộ phận sinh ra từ trường (nam châm vĩnh cửu hoặc nam châm điện)."
      ],
      "ans": [
        3,
        0,
        1,
        2
      ],
      "correctText": "1-D, 2-A, 3-B, 4-C",
      "exp": "• 1 ghép với D (Phần cảm tạo từ trường).<br>• 2 ghép với A (Phần ứng tạo suất điện động).<br>• 3 ghép với B (Công thức tần số f = np).<br>• 4 ghép với C (Định nghĩa giá trị hiệu dụng qua tác dụng nhiệt)."
    },
    {
      "type": "drag",
      "q": "Chọn từ thích hợp điền vào chỗ trống để làm sáng tỏ ý nghĩa của giá trị hiệu dụng:",
      "text": "Giá trị hiệu dụng của dòng điện xoay chiều có giá trị bằng cường độ của một dòng điện [0] mà khi đi qua cùng một điện trở trong cùng một khoảng thời gian sẽ tỏa ra một nhiệt lượng [1]. Để tính công suất nhiệt trung bình, ta sử dụng biểu thức P = [2].",
      "words": [
        "không đổi",
        "hoàn toàn bằng nhau",
        "R · I²",
        "biến thiên",
        "lớn gấp đôi",
        "R · I₀²"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "[0]: không đổi | [1]: hoàn toàn bằng nhau | [2]: R · I²",
      "exp": "• Định nghĩa giá trị hiệu dụng dựa vào <b>tác dụng nhiệt tương đương</b> với dòng điện không đổi: <span class=\"math-sym\">P = R · I²</span> (với I là cường độ hiệu dụng)."
    },
    {
      "type": "mcq",
      "q": "Một máy phát điện xoay chiều một pha có roto gồm 4 cặp cực (p = 4). Để máy phát ra dòng điện có tần số chuẩn 50 Hz thì roto phải quay với tốc độ là:",
      "opts": [
        "750 vòng/phút (12,5 vòng/s).",
        "1500 vòng/phút.",
        "3000 vòng/phút.",
        "600 vòng/phút."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <span class=\"math-sym\">f = n · p</span> ⇒ <span class=\"math-sym\">n = <span class=\"fraction\"><span class=\"numerator\">f</span><span class=\"denominator\">p</span></span></span> = <span class=\"fraction\"><span class=\"numerator\">50</span><span class=\"denominator\">4</span></span> = 12,5 vòng/s.<br>• Tính theo vòng/phút: <span class=\"math-sym\">N</span> = 12,5 × 60 = <b>750 vòng/phút</b>."
    },
    {
      "type": "mcq",
      "q": "Đinamô (dynamo) gắn ở bánh xe đạp dùng để thắp sáng bóng đèn khi đạp xe vào ban đêm. Hoạt động của đinamô xe đạp dựa trên nguyên tắc vật lí nào sau đây?",
      "opts": [
        "Bánh xe quay làm nam châm quay theo trước cuộn dây cố định, làm từ thông qua cuộn dây biến thiên tạo suất điện động cảm ứng.",
        "Bánh xe cọ xát với núm xoay sinh ra hiện tượng nhiễm điện do ma sát truyền điện vào bóng đèn.",
        "Pin hóa học tích hợp bên trong đinamô tự động phát điện khi phát hiện xe chuyển động.",
        "Nhiệt lượng sinh ra do ma sát ở vành bánh xe được chuyển hóa trực tiếp thành quang năng phát sáng."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Cấu tạo và hoạt động của đinamô xe đạp:</b> Đinamô xe đạp là một máy phát điện xoay chiều cỡ nhỏ. Phần cảm là nam châm vĩnh cửu gắn với núm xoay tì vào lốp xe; phần ứng là cuộn dây quấn quanh lõi sắt non cố định trên khung xe.<br>• Khi bánh xe quay, nam châm quay theo làm từ thông Φ(t) qua cuộn dây biến thiên tuần hoàn: Φ(t) = B · S · cos(ωt).<br>• Theo định luật Faraday, trong cuộn dây xuất hiện suất điện động cảm ứng xoay chiều e<sub>c</sub> = -dΦ/dt = ω · B · S · sin(ωt), cung cấp dòng điện làm sáng đèn xe đạp khi đi trong đêm tối."
    },
    {
      "type": "tf",
      "svgGraph": "<svg viewBox=\"0 0 540 280\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arr17\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#94a3b8\"/>\n    </marker>\n  </defs>\n  <rect width=\"540\" height=\"280\" rx=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"26\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">ĐỒ THỊ DAO ĐỘNG HÌNH SIN CỦA ĐIỆN ÁP XOAY CHIỀU</text>\n\n  <!-- Hệ trục u(t) -->\n  <line x1=\"50\" y1=\"140\" x2=\"490\" y2=\"140\" stroke=\"#94a3b8\" stroke-width=\"1.8\" marker-end=\"url(#arr17)\"/>\n  <line x1=\"70\" y1=\"240\" x2=\"70\" y2=\"40\" stroke=\"#94a3b8\" stroke-width=\"1.8\" marker-end=\"url(#arr17)\"/>\n  <text x=\"475\" y=\"160\" fill=\"#94a3b8\" font-size=\"12\">Thời gian t (s)</text>\n  <text x=\"25\" y=\"45\" fill=\"#38bdf8\" font-size=\"13\">u (V)</text>\n  <text x=\"55\" y=\"155\" fill=\"#94a3b8\" font-size=\"12\">O</text>\n\n  <!-- Đường sóng sin u = U0 cos(wt) -->\n  <path d=\"M 70,70 C 120,70 120,210 170,210 C 220,210 220,70 270,70 C 320,70 320,210 370,210 C 420,210 420,70 470,70\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"3\"/>\n\n  <!-- Gióng biên độ U0 và -U0 -->\n  <line x1=\"70\" y1=\"70\" x2=\"470\" y2=\"70\" stroke=\"#475569\" stroke-width=\"1\" stroke-dasharray=\"4,4\"/>\n  <line x1=\"70\" y1=\"210\" x2=\"470\" y2=\"210\" stroke=\"#475569\" stroke-width=\"1\" stroke-dasharray=\"4,4\"/>\n  <text x=\"35\" y=\"75\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">+U₀</text>\n  <text x=\"35\" y=\"215\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">-U₀</text>\n\n  <!-- Mức hiệu dụng U = U0 / sqrt(2) -->\n  <line x1=\"70\" y1=\"90\" x2=\"470\" y2=\"90\" stroke=\"#f59e0b\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <text x=\"20\" y=\"95\" fill=\"#f59e0b\" font-size=\"11\">U = U₀/<span class=\"sqrt\"><span class=\"rad\">√</span><span class=\"radicand\">2</span></span></text>\n\n  <!-- Đánh dấu chu kỳ T -->\n  <line x1=\"270\" y1=\"70\" x2=\"270\" y2=\"140\" stroke=\"#475569\" stroke-width=\"1\" stroke-dasharray=\"3,3\"/>\n  <text x=\"265\" y=\"158\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">T</text>\n\n  <line x1=\"470\" y1=\"70\" x2=\"470\" y2=\"140\" stroke=\"#475569\" stroke-width=\"1\" stroke-dasharray=\"3,3\"/>\n  <text x=\"460\" y=\"158\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">2T</text>\n\n  <text x=\"270\" y=\"260\" fill=\"#facc15\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Điện áp tức thời: u = U₀·cos(ωt + φ) • Giá trị hiệu dụng: U = U₀ / <span class=\"sqrt\"><span class=\"rad\">√</span><span class=\"radicand\">2</span></span></text>\n</svg>",
      "q": "Quan sát đồ thị biến thiên điều hòa của điện áp xoay chiều u(t) hình bên. Đánh giá tính Đúng/Sai của các mệnh đề sau:",
      "stmts": [
        "Tại thời điểm t = 0, điện áp đạt giá trị cực đại tức thời u = +U₀.",
        "Khoảng thời gian ngắn nhất giữa hai lần liên tiếp điện áp tức thời đạt giá trị cực đại +U₀ chính là một chu kỳ T của dòng điện.",
        "Giá trị hiệu dụng U biểu diễn trên đồ thị luôn lớn hơn giá trị cực đại U₀.",
        "Trong một chu kỳ T, dòng điện xoay chiều đổi chiều chuyển động đúng 2 lần."
      ],
      "ans": [
        true,
        true,
        false,
        true
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) SAI | d) ĐÚNG",
      "exp": "• <b>Ý a: ĐÚNG.</b> Đồ thị bắt đầu từ đỉnh <span class=\"math-sym\">u(0) = +U₀</span>.<br>• <b>Ý b: ĐÚNG.</b> Định nghĩa chu kỳ T.<br>• <b>Ý c: SAI.</b> <span class=\"math-sym\">U = U₀ / <span class=\"sqrt\"><span class=\"rad\">√</span><span class=\"radicand\">2</span></span> ≈ 0,707 U₀ < U₀</span>.<br>• <b>Ý d: ĐÚNG.</b> Đổi chiều tại các thời điểm qua vị trí cân bằng (u = 0)."
    },
    {
      "type": "mcq",
      "q": "Trong hệ thống truyền tải điện lưới quốc gia và các nhà máy công nghiệp, người ta sử dụng phổ biến dòng điện xoay chiều ba pha thay vì dòng một pha chủ yếu là vì:",
      "opts": [
        "Tiết kiệm dây dẫn khi truyền tải điện năng đi xa và dễ dàng tạo ra từ trường quay để vận hành động cơ không đồng bộ 3 pha.",
        "Dòng điện xoay chiều 3 pha có điện áp thấp hơn nên hoàn toàn không gây nguy hiểm điện giật cho con người.",
        "Dòng điện 3 pha không bị tiêu hao năng lượng do tỏa nhiệt Joule trên đường dây truyền tải.",
        "Dòng 3 pha chỉ truyền tải điện theo một chiều duy nhất mà không đổi chiều như dòng 1 pha."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Ưu điểm vượt trội của dòng xoay chiều 3 pha:</b><br>1. <i>Tiết kiệm dây dẫn:</i> Truyền tải điện năng bằng dòng 3 pha tiết kiệm dây dẫn đáng kể so với dòng 1 pha có cùng công suất.<br>2. <i>Tạo từ trường quay:</i> Dòng điện xoay chiều 3 pha chạy vào ba cuộn dây đặt lệch nhau 120° trên stato sẽ tạo ra từ trường quay đồng bộ cực kì mạnh mẽ và ổn định, làm quay rôto của động cơ không đồng bộ 3 pha (loại động cơ chiếm trên 85% tổng công suất động cơ điện trong công nghiệp)."
    }
  ],
  "18": [
    {
      "type": "mcq",
      "q": "Dòng điện Foucault (dòng điện xoáy) là:",
      "opts": [
        "Dòng điện cảm ứng xuất hiện trong khối vật dẫn kim loại khi khối vật dẫn đó đặt trong từ trường biến thiên hoặc chuyển động cắt đường sức từ.",
        "Dòng điện xoay chiều một pha trong lưới điện quốc gia.",
        "Dòng chuyển dời của các hạt mang điện trong chất bán dẫn tinh khiết.",
        "Dòng điện một chiều phát ra từ các tấm pin Mặt Trời."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Định nghĩa dòng Foucault:</b> Là dòng điện cảm ứng khép kín sinh ra trong <b>khối vật dẫn kim loại</b> khi có sự biến thiên từ thông, gây ra tác dụng nhiệt mạnh hoặc lực cản từ."
    },
    {
      "type": "mcq",
      "q": "Để giảm thiểu tác hại của dòng điện Foucault làm nóng và gây hao phí năng lượng trong lõi thép của máy biến áp và động cơ điện, người ta thường:",
      "opts": [
        "Ghép lõi thép từ nhiều lá thép kĩ thuật mỏng có phủ sơn cách điện xếp khép kín song song với đường sức từ.",
        "Đúc lõi thép thành một khối kim loại dày nguyên khối bằng đồng nguyên chất.",
        "Tăng cường độ dòng điện đi qua các cuộn dây lên mức tối đa.",
        "Hút chân không hoàn toàn bên trong vỏ máy."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Khi chia lõi thép thành các lá mỏng cách điện, mạch dòng điện xoáy bị chia nhỏ và điện trở tăng lên rất lớn, làm dòng Foucault giảm xuống tối thiểu, giảm hao phí do tỏa nhiệt."
    },
    {
      "type": "mcq",
      "q": "Một máy biến áp lí tưởng có số vòng dây cuộn sơ cấp là N₁ = 2200 vòng và cuộn thứ cấp là N₂ = 110 vòng. Khi đặt vào hai đầu cuộn sơ cấp điện áp xoay chiều có giá trị hiệu dụng U₁ = 220 V thì điện áp hiệu dụng ở hai đầu cuộn thứ cấp để hở là:",
      "opts": [
        "11 V.",
        "22 V.",
        "44 V.",
        "110 V."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Áp dụng hệ thức biến áp: <span class=\"fraction\"><span class=\"numerator\">U₂</span><span class=\"denominator\">U₁</span></span> = <span class=\"fraction\"><span class=\"numerator\">N₂</span><span class=\"denominator\">N₁</span></span>.<br>• <span class=\"math-sym\">U</span><sub>2</sub> = <span class=\"math-sym\">U</span><sub>1</sub> · <span class=\"fraction\"><span class=\"numerator\">N₂</span><span class=\"denominator\">N₁</span></span> = 220 × <span class=\"fraction\"><span class=\"numerator\">110</span><span class=\"denominator\">2200</span></span> = <b>11 V</b>."
    },
    {
      "type": "tf",
      "q": "Xét các đặc điểm và ứng dụng của máy biến áp và dòng điện Foucault. Mỗi nhận định sau đây là Đúng hay Sai?",
      "stmts": [
        "Máy biến áp là thiết bị có khả năng biến đổi điện áp của dòng điện xoay chiều mà không làm thay đổi tần số của dòng điện.",
        "Nếu số vòng dây cuộn thứ cấp lớn hơn cuộn sơ cấp (N₂ > N₁) thì máy biến áp là máy tăng áp (U₂ > U₁).",
        "Máy biến áp có thể dùng để biến đổi điện áp của dòng điện một chiều không đổi phát ra từ acquy.",
        "Bếp từ hoạt động dựa trên tác dụng nhiệt của dòng điện Foucault chạy trong đáy nồi bằng kim loại có từ tính."
      ],
      "ans": [
        true,
        true,
        false,
        true
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) SAI | d) ĐÚNG",
      "exp": "• <b>Ý a: ĐÚNG.</b> Định nghĩa máy biến áp; tần số f luôn không đổi.<br>• <b>Ý b: ĐÚNG.</b> <span class=\"math-sym\">U₂/U₁ = N₂/N₁ > 1 ⇒ U₂ > U₁</span>.<br>• <b>Ý c: SAI.</b> Dòng một chiều không đổi có từ thông không đổi (ΔΦ = 0), không gây cảm ứng điện từ nên máy biến áp không hoạt động được.<br>• <b>Ý d: ĐÚNG.</b> Từ trường biến thiên tần số cao tạo dòng Foucault sinh nhiệt trực tiếp tại đáy nồi."
    },
    {
      "type": "match",
      "q": "Hãy ghép thiết bị/ứng dụng ở Cột A với nguyên lí hoạt động tương ứng ở Cột B:",
      "colA": [
        "Bếp từ (bếp điện cảm ứng)",
        "Phanh điện từ trên tàu cao tốc",
        "Máy biến áp",
        "Công tơ điện cơ"
      ],
      "colB": [
        "Tác dụng cản trở chuyển động (lực hãm từ) của dòng Foucault trong đĩa kim loại.",
        "Biến đổi điện áp xoay chiều dựa trên cảm ứng điện từ qua lõi thép chung.",
        "Tác dụng nhiệt của dòng Foucault cảm ứng trong đáy nồi kim loại nấu chín thức ăn.",
        "Đĩa nhôm quay nhờ tương tác của dòng Foucault với từ trường quay."
      ],
      "ans": [
        2,
        0,
        1,
        3
      ],
      "correctText": "1-C, 2-A, 3-B, 4-D",
      "exp": "• 1 ghép với C (Bếp từ sinh nhiệt qua Foucault).<br>• 2 ghép với A (Phanh điện từ dùng lực hãm Foucault).<br>• 3 ghép với B (Máy biến áp dùng cảm ứng điện từ).<br>• 4 ghép với D (Công tơ điện dùng đĩa nhôm Foucault)."
    },
    {
      "type": "drag",
      "q": "Chọn từ thích hợp điền vào chỗ trống để giải thích bài toán truyền tải điện năng đi xa:",
      "text": "Trong quá trình truyền tải điện năng đi xa, công suất hao phí do tỏa nhiệt trên đường dây tỉ lệ nghịch với [0] của điện áp truyền tải. Do đó, để giảm hao phí truyền tải đi 100 lần, trước khi truyền đi ta cần dùng máy [1] để nâng điện áp lên [2] lần.",
      "words": [
        "bình phương",
        "tăng áp",
        "10",
        "căn bậc hai",
        "hạ áp",
        "100"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "[0]: bình phương | [1]: tăng áp | [2]: 10",
      "exp": "• Công thức hao phí: Δ<span class=\"math-sym\">P = P²R / (U² cos²φ)</span>. Hao phí tỉ lệ nghịch với <b>bình phương</b> điện áp. Để giảm 100 lần, ta dùng máy <b>tăng áp</b> tăng điện áp lên <b>10</b> lần."
    },
    {
      "type": "mcq",
      "q": "Một máy biến áp lí tưởng có tỉ số số vòng dây <span class=\"fraction\"><span class=\"numerator\">N₁</span><span class=\"denominator\">N₂</span></span> = 5. Cuộn thứ cấp được nối với một bóng đèn sợi đốt tiêu thụ công suất 44 W ở điện áp 22 V. Cường độ dòng điện hiệu dụng chạy trong cuộn sơ cấp là:",
      "opts": [
        "0,4 A.",
        "2,0 A.",
        "10 A.",
        "0,08 A."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Cường độ dòng thứ cấp: <span class=\"math-sym\">I</span><sub>2</sub> = <span class=\"math-sym\">P / U</span><sub>2</sub> = <span class=\"fraction\"><span class=\"numerator\">44</span><span class=\"denominator\">22</span></span> = 2 A.<br>• Biến áp lí tưởng: <span class=\"fraction\"><span class=\"numerator\">I₁</span><span class=\"denominator\">I₂</span></span> = <span class=\"fraction\"><span class=\"numerator\">N₂</span><span class=\"denominator\">N₁</span></span> = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">5</span></span>.<br>• <span class=\"math-sym\">I</span><sub>1</sub> = <span class=\"math-sym\">I</span><sub>2</sub> / 5 = <span class=\"fraction\"><span class=\"numerator\">2</span><span class=\"denominator\">5</span></span> = <b>0,4 A</b>."
    },
    {
      "type": "mcq",
      "q": "Người ta cần truyền tải một công suất điện 1,0 MW từ nhà máy thủy điện đến nơi tiêu thụ bằng đường dây có điện trở tổng cộng R = 20 Ω. Nếu điện áp ở đầu đường dây truyền tải là 50 kV và hệ số công suất cosφ = 1 thì công suất hao phí do tỏa nhiệt trên đường dây là:",
      "opts": [
        "8,0 kW.",
        "4,0 kW.",
        "16 kW.",
        "2,0 kW."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Δ<span class=\"math-sym\">P</span> = <span class=\"fraction\"><span class=\"numerator\">P² · R</span><span class=\"denominator\">U²</span></span> = <span class=\"fraction\"><span class=\"numerator\">(1,0 · 10⁶)² × 20</span><span class=\"denominator\">(50 · 10³)²</span></span> = <span class=\"fraction\"><span class=\"numerator\">2 · 10¹³</span><span class=\"denominator\">2,5 · 10⁹</span></span> = 8000 W = <b>8,0 kW</b>."
    },
    {
      "type": "tf",
      "svgGraph": "<svg viewBox=\"0 0 540 280\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"540\" height=\"280\" rx=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"26\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">SƠ ĐỒ NGUYÊN LÍ MÁY BIẾN ÁP (LÕI THÉP KHÉP KÍN)</text>\n\n  <!-- Lõi thép biến áp khép kín -->\n  <rect x=\"130\" y=\"55\" width=\"280\" height=\"150\" rx=\"10\" fill=\"#334155\" stroke=\"#94a3b8\" stroke-width=\"2.5\"/>\n  <!-- Cửa sổ lõi thép -->\n  <rect x=\"200\" y=\"90\" width=\"140\" height=\"80\" rx=\"4\" fill=\"#0f172a\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n\n  <!-- Cuộn sơ cấp N1 bên trái -->\n  <g fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"4\">\n    <ellipse cx=\"165\" cy=\"95\" rx=\"20\" ry=\"8\"/>\n    <ellipse cx=\"165\" cy=\"110\" rx=\"20\" ry=\"8\"/>\n    <ellipse cx=\"165\" cy=\"125\" rx=\"20\" ry=\"8\"/>\n    <ellipse cx=\"165\" cy=\"140\" rx=\"20\" ry=\"8\"/>\n    <ellipse cx=\"165\" cy=\"155\" rx=\"20\" ry=\"8\"/>\n  </g>\n  <!-- Dây vào sơ cấp -->\n  <line x1=\"80\" y1=\"95\" x2=\"145\" y2=\"95\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n  <line x1=\"80\" y1=\"155\" x2=\"145\" y2=\"155\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n  <circle cx=\"75\" cy=\"95\" r=\"4\" fill=\"#f59e0b\"/>\n  <circle cx=\"75\" cy=\"155\" r=\"4\" fill=\"#f59e0b\"/>\n  <text x=\"50\" y=\"130\" fill=\"#f59e0b\" font-size=\"12\" font-weight=\"bold\">U₁, N₁</text>\n  <text x=\"135\" y=\"180\" fill=\"#f59e0b\" font-size=\"11\" font-weight=\"bold\">Cuộn sơ cấp</text>\n\n  <!-- Cuộn thứ cấp N2 bên phải -->\n  <g fill=\"none\" stroke=\"#10b981\" stroke-width=\"4\">\n    <ellipse cx=\"375\" cy=\"85\" rx=\"20\" ry=\"7\"/>\n    <ellipse cx=\"375\" cy=\"98\" rx=\"20\" ry=\"7\"/>\n    <ellipse cx=\"375\" cy=\"111\" rx=\"20\" ry=\"7\"/>\n    <ellipse cx=\"375\" cy=\"124\" rx=\"20\" ry=\"7\"/>\n    <ellipse cx=\"375\" cy=\"137\" rx=\"20\" ry=\"7\"/>\n    <ellipse cx=\"375\" cy=\"150\" rx=\"20\" ry=\"7\"/>\n    <ellipse cx=\"375\" cy=\"163\" rx=\"20\" ry=\"7\"/>\n  </g>\n  <!-- Dây ra thứ cấp -->\n  <line x1=\"395\" y1=\"85\" x2=\"460\" y2=\"85\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n  <line x1=\"395\" y1=\"163\" x2=\"460\" y2=\"163\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n  <circle cx=\"465\" cy=\"85\" r=\"4\" fill=\"#10b981\"/>\n  <circle cx=\"465\" cy=\"163\" r=\"4\" fill=\"#10b981\"/>\n  <text x=\"480\" y=\"130\" fill=\"#10b981\" font-size=\"12\" font-weight=\"bold\">U₂, N₂</text>\n  <text x=\"350\" y=\"180\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\">Cuộn thứ cấp</text>\n\n  <!-- Từ thông khép kín trong lõi -->\n  <rect x=\"180\" y=\"75\" width=\"180\" height=\"110\" rx=\"6\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"1.5\" stroke-dasharray=\"5,4\"/>\n  <text x=\"270\" y=\"132\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Từ thông Φ(t)</text>\n\n  <!-- Công thức máy biến áp -->\n  <rect x=\"70\" y=\"215\" width=\"400\" height=\"50\" rx=\"8\" fill=\"rgba(30,41,59,0.85)\" stroke=\"#475569\" stroke-width=\"1\"/>\n  <text x=\"270\" y=\"245\" fill=\"#facc15\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">Hệ thức biến áp lí tưởng: U₁ / U₂ = N₁ / N₂ = I₂ / I₁</text>\n</svg>",
      "q": "Quan sát sơ đồ cấu tạo và hoạt động của máy biến áp hình bên. Đánh giá tính Đúng/Sai của các mệnh đề sau:",
      "stmts": [
        "Từ thông do dòng điện xoay chiều trong cuộn sơ cấp sinh ra hầu như khép kín hoàn toàn bên trong lõi thép dẫn từ.",
        "Theo hình vẽ, số vòng dây cuộn thứ cấp N₂ nhiều hơn cuộn sơ cấp N₁ nên đây là máy hạ áp.",
        "Hệ thức <span class=\"fraction\"><span class=\"numerator\">U₁</span><span class=\"denominator\">U₂</span></span> = <span class=\"fraction\"><span class=\"numerator\">N₁</span><span class=\"denominator\">N₂</span></span> nghiệm đúng chính xác khi máy biến áp hoạt động ở chế độ lí tưởng (không có hao phí từ tản và nhiệt tỏa).",
        "Ở máy biến áp lí tưởng, nếu điện áp thứ cấp tăng lên k lần thì cường độ dòng điện thứ cấp sẽ giảm đi k lần so với sơ cấp."
      ],
      "ans": [
        true,
        false,
        true,
        true
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) ĐÚNG | d) ĐÚNG",
      "exp": "• <b>Ý a: ĐÚNG.</b> Lõi thép khép kín tập trung dẫn đường sức từ.<br>• <b>Ý b: SAI.</b> <span class=\"math-sym\">N₂ > N₁ ⇒ U₂ > U₁</span> (đây là máy <b>tăng áp</b>).<br>• <b>Ý c: ĐÚNG.</b> Công thức máy biến áp lí tưởng.<br>• <b>Ý d: ĐÚNG.</b> Do bảo toàn công suất <span class=\"math-sym\">P₁ = P₂ ⇒ U₁ · I₁ = U₂ · I₂</span>."
    },
    {
      "type": "mcq",
      "q": "Tại sao các thiết bị phanh điện từ trên xe tải lớn hoặc tàu hỏa chạy đệm từ trường lại không bao giờ bị mòn cơ học như phanh má phanh ma sát truyền thống?",
      "opts": [
        "Vì lực hãm sinh ra hoàn toàn do tương tác từ trường giữa dòng điện Foucault cảm ứng và nam châm mà không cần hai bề mặt tiếp xúc cọ xát trực tiếp.",
        "Vì nhiệt độ làm bốc hơi toàn bộ bề mặt kim loại trước khi chạm vào nhau.",
        "Vì nam châm đẩy xe bay lên không trung.",
        "Vì dòng Foucault làm nguội dầu bôi trơn thành chất siêu rắn."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Ưu điểm vượt trội của phanh điện từ:</b> Lực hãm là lực tương tác từ trường tác dụng từ xa lên dòng xoáy Foucault, không có tiếp xúc cọ xát cơ học nên <b>không bị mòn đĩa phanh và không phát sinh bụi bẩn</b>."
    }
  ],
  "19": [
    {
      "type": "mcq",
      "q": "Theo luận điểm nổi tiếng của James Clerk Maxwell, mối quan hệ mật thiết giữa điện trường và từ trường biến thiên là:",
      "opts": [
        "Một từ trường biến thiên theo thời gian sinh ra một điện trường xoáy, và ngược lại một điện trường biến thiên theo thời gian sinh ra một từ trường.",
        "Điện trường biến thiên chỉ sinh ra các hạt electron tự do.",
        "Từ trường biến thiên chỉ xuất hiện khi có dây dẫn kim loại dẫn điện.",
        "Điện trường và từ trường tồn tại hoàn toàn độc lập, không bao giờ có thể tương hỗ sinh ra nhau."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Thuyết điện từ trường Maxwell:</b> Điện trường biến thiên và từ trường biến thiên là hai mặt thống nhất của một thực thể vật lí duy nhất gọi là <b>điện từ trường</b>.",
      "svgGraph": "<svg viewBox=\"0 0 460 210\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Axis v (Propagating axis x) -->\n  <line x1=\"40\" y1=\"105\" x2=\"420\" y2=\"105\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n  <polygon points=\"425,105 413,99 413,111\" fill=\"#94a3b8\"/>\n  <text x=\"430\" y=\"110\" fill=\"#94a3b8\" font-size=\"13\" font-weight=\"800\">v</text>\n  <!-- E wave (Vertical, Red/Pink) -->\n  <path d=\"M 60,105 Q 110,25 160,105 Q 210,185 260,105 Q 310,25 360,105\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n  <text x=\"110\" y=\"30\" fill=\"#f43f5e\" font-size=\"14\" font-weight=\"800\">E (Điện trường)</text>\n  <!-- E vectors -->\n  <line x1=\"110\" y1=\"105\" x2=\"110\" y2=\"35\" stroke=\"#f43f5e\" stroke-width=\"1.5\"/><polygon points=\"110,30 106,40 114,40\" fill=\"#f43f5e\"/>\n  <line x1=\"210\" y1=\"105\" x2=\"210\" y2=\"175\" stroke=\"#f43f5e\" stroke-width=\"1.5\"/><polygon points=\"210,180 206,170 214,170\" fill=\"#f43f5e\"/>\n  <!-- B wave (Horizontal perspective, Cyan/Blue) -->\n  <path d=\"M 60,105 Q 110,145 160,105 Q 210,65 260,105 Q 310,145 360,105\" fill=\"none\" stroke=\"#06b6d4\" stroke-width=\"2.5\" stroke-dasharray=\"4,2\"/>\n  <text x=\"210\" y=\"55\" fill=\"#06b6d4\" font-size=\"14\" font-weight=\"800\">B (Từ trường)</text>\n  <!-- Caption -->\n  <text x=\"230\" y=\"198\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">Sóng điện từ là sóng ngang: E ⊥ B ⊥ v và cùng pha dao động</text>\n</svg>"
    },
    {
      "type": "mcq",
      "q": "Sóng điện từ là:",
      "opts": [
        "Điện từ trường lan truyền trong không gian dưới dạng sóng.",
        "Sóng cơ học lan truyền nhờ sự dao động của các phân tử môi trường.",
        "Chỉ là dòng các hạt proton chuyển động trong chân không.",
        "Dòng các hạt neutron thoát ra từ lò phản ứng hạt nhân."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Định nghĩa sóng điện từ:</b> Là sự lan truyền của điện từ trường trong không gian theo thời gian."
    },
    {
      "type": "mcq",
      "q": "Đặc điểm nào sau đây là <b>đúng</b> khi nói về sóng điện từ?",
      "opts": [
        "Sóng điện từ là sóng ngang, lan truyền được trong chân không với tốc độ bằng tốc độ ánh sáng c ≈ 3 · 10⁸ m/s.",
        "Sóng điện từ là sóng dọc, không thể lan truyền trong môi trường chân không.",
        "Vectơ cường độ điện trường E và vectơ cảm ứng từ B luôn dao động vuông pha với nhau.",
        "Tốc độ truyền sóng điện từ trong môi trường điện môi luôn lớn hơn tốc độ truyền trong chân không."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Đặc điểm sóng điện từ:</b> Là sóng ngang (<span class=\"math-sym\">E ⊥ B ⊥ v</span>), truyền được trong chân không với tốc độ cực đại <span class=\"math-sym\">c ≈ 3 · 10⁸</span> m/s. Tại mỗi điểm, <span class=\"math-sym\">E</span> và <span class=\"math-sym\">B</span> luôn <b>dao động đồng pha</b>."
    },
    {
      "type": "tf",
      "q": "Xét tính chất và thang sóng điện từ. Mỗi nhận định sau đây là Đúng hay Sai?",
      "stmts": [
        "Sóng điện từ mang năng lượng tỉ lệ với lũy thừa bậc 4 của tần số sóng.",
        "Tại mỗi điểm trên phương truyền sóng, vectơ cường độ điện trường E và vectơ cảm ứng từ B luôn biến thiên cùng tần số và cùng pha với nhau.",
        "Sắp xếp theo thứ tự bước sóng giảm dần: Sóng vô tuyến → Tia hồng ngoại → Ánh sáng nhìn thấy → Tia tử ngoại → Tia X → Tia gamma.",
        "Sóng điện từ không có các tính chất phản xạ, khúc xạ và giao thoa như sóng ánh sáng."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) ĐÚNG | d) SAI",
      "exp": "• <b>Ý a: ĐÚNG.</b> Năng lượng bức xạ <span class=\"math-sym\">W ∝ f⁴</span>.<br>• <b>Ý b: ĐÚNG.</b> <span class=\"math-sym\">E</span> và <span class=\"math-sym\">B</span> luôn đồng pha (đạt cực đại cùng lúc, triệt tiêu cùng lúc).<br>• <b>Ý c: ĐÚNG.</b> Đây là thứ tự chuẩn của thang sóng điện từ theo bước sóng giảm dần (tần số tăng dần).<br>• <b>Ý d: SAI.</b> Bản thân ánh sáng chính là sóng điện từ nên có đầy đủ phản xạ, khúc xạ, giao thoa, nhiễu xạ."
    },
    {
      "type": "match",
      "q": "Hãy ghép các vùng sóng trong thang sóng điện từ ở Cột A với ứng dụng thực tiễn điển hình ở Cột B:",
      "colA": [
        "Sóng vô tuyến (Radio)",
        "Tia hồng ngoại",
        "Tia tử ngoại (UV)",
        "Tia X (Röntgen)"
      ],
      "colB": [
        "Tiệt trùng thực phẩm, dụng cụ y tế và phát hiện vết nứt bề mặt kim loại.",
        "Chiếu điện, chụp X-quang chẩn đoán hình ảnh xương trong y tế.",
        "Truyền thông tin liên lạc không dây (điện thoại di động, Wifi, phát thanh, truyền hình).",
        "Dùng trong thiết bị điều khiển từ xa (remote), sưởi ấm và camera hồng ngoại ban đêm."
      ],
      "ans": [
        2,
        3,
        0,
        1
      ],
      "correctText": "1-C, 2-D, 3-A, 4-B",
      "exp": "• 1 ghép với C (Sóng vô tuyến: viễn thông, wifi).<br>• 2 ghép với D (Tia hồng ngoại: remote, camera nhiệt).<br>• 3 ghép với A (Tia UV: tiệt trùng, diệt khuẩn).<br>• 4 ghép với B (Tia X: chụp X-quang y tế)."
    },
    {
      "type": "drag",
      "q": "Điền từ thích hợp vào chỗ trống để làm sáng tỏ cấu trúc của sóng điện từ:",
      "text": "Sóng điện từ là [0] vì các vectơ cường độ điện trường E và cảm ứng từ B luôn vuông góc với phương truyền sóng. Ba vectơ E, B và vận tốc truyền sóng v tạo thành một [1]. Khi lan truyền qua mặt phân cách giữa hai môi trường, sóng điện từ tuân theo các quy luật [2] và khúc xạ tương tự như ánh sáng.",
      "words": [
        "sóng ngang",
        "tam diện thuận",
        "phản xạ",
        "sóng dọc",
        "tam diện nghịch",
        "nhiệt động"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "[0]: sóng ngang | [1]: tam diện thuận | [2]: phản xạ",
      "exp": "• Sóng điện từ là <b>sóng ngang</b>; ba vectơ <span class=\"math-sym\">(E, B, v)</span> lập thành một <b>tam diện thuận</b>; có đầy đủ tính chất <b>phản xạ</b>, khúc xạ."
    },
    {
      "type": "mcq",
      "q": "Một sóng điện từ truyền hình phát sóng với tần số f = 100 MHz trong chân không. Biết tốc độ ánh sáng c = 3 · 10⁸ m/s. Bước sóng của sóng điện từ này là:",
      "opts": [
        "3,0 m.",
        "0,3 m.",
        "30 m.",
        "300 m."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <span class=\"math-sym\">λ = <span class=\"fraction\"><span class=\"numerator\">c</span><span class=\"denominator\">f</span></span></span> = <span class=\"fraction\"><span class=\"numerator\">3 · 10⁸</span><span class=\"denominator\">100 · 10⁶</span></span> = <b>3,0 m</b>."
    },
    {
      "type": "mcq",
      "q": "Lò vi sóng là thiết bị làm nóng và nấu chín thức ăn rất nhanh chóng trong gia đình. Cơ chế vật lí chủ yếu giúp lò vi sóng làm nóng thực phẩm là gì?",
      "opts": [
        "Dùng sóng điện từ tần số khoảng 2,45 GHz làm các phân tử nước phân cực trong thực phẩm dao động mạnh, chuyển năng lượng thành nhiệt.",
        "Dùng dòng điện Fu-cô chạy trực tiếp qua thực phẩm để nung nóng tương tự nguyên lí bếp từ.",
        "Chiếu chùm tia tử ngoại (UV) năng lượng cao làm biến tính nhiệt các protein trong thức ăn.",
        "Dùng nhiệt lượng tỏa ra từ thanh đốt điện trở may-so hồng ngoại gắn trên nóc lò."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Cơ chế vật lí của lò vi sóng:</b> Nước là phân tử phân cực (có cực âm và cực dương). Sóng vi sóng phát ra có tần số 2,45 GHz làm điện trường dao động đảo chiều 2,45 tỉ lần mỗi giây.<br>• Dưới tác dụng của điện trường xoay chiều này, các phân tử nước trong thức ăn liên tục quay đổi hướng với tần số cực cao, cọ xát mãnh liệt vào nhau sinh ra nhiệt lượng lớn từ sâu bên trong khối thức ăn.<br>• Nhờ vậy, thức ăn được làm nóng cực nhanh và chín đều từ trong ra ngoài, tiết kiệm năng lượng hơn nhiều so với việc truyền nhiệt bề mặt của bếp gas hay lò nướng thông thường."
    },
    {
      "type": "tf",
      "svgGraph": "<svg viewBox=\"0 0 540 280\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arr19\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#94a3b8\"/>\n    </marker>\n    <marker id=\"arrWave\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n  </defs>\n  <rect width=\"540\" height=\"280\" rx=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"26\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">MÔ HÌNH KHÔNG GIAN 3D CỦA SÓNG ĐIỆN TỪ (E ⊥ B ⊥ v)</text>\n\n  <!-- Trục tọa độ 3D -->\n  <!-- Trục truyền sóng z (nằm ngang sang phải) -->\n  <line x1=\"60\" y1=\"150\" x2=\"490\" y2=\"150\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr19)\"/>\n  <text x=\"475\" y=\"170\" fill=\"#94a3b8\" font-size=\"13\">Trục z (v)</text>\n  \n  <!-- Trục x (điện trường E thẳng đứng) -->\n  <line x1=\"80\" y1=\"230\" x2=\"80\" y2=\"50\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr19)\"/>\n  <text x=\"65\" y=\"60\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">E</text>\n\n  <!-- Trục y (từ trường B chéo góc) -->\n  <line x1=\"120\" y1=\"180\" x2=\"40\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr19)\"/>\n  <text x=\"35\" y=\"115\" fill=\"#06b6d4\" font-size=\"13\" font-weight=\"bold\">B</text>\n\n  <!-- Dao động điện trường E (mặt phẳng đứng - màu đỏ/hồng) -->\n  <path d=\"M 80,150 C 130,70 150,70 200,150 C 250,230 270,230 320,150 C 370,70 390,70 440,150\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"2.5\"/>\n  <!-- Các mũi tên E dựng đứng -->\n  <line x1=\"140\" y1=\"150\" x2=\"140\" y2=\"90\" stroke=\"#f43f5e\" stroke-width=\"1.8\" marker-end=\"url(#arrWave)\"/>\n  <line x1=\"260\" y1=\"150\" x2=\"260\" y2=\"210\" stroke=\"#f43f5e\" stroke-width=\"1.8\" marker-end=\"url(#arrWave)\"/>\n  <line x1=\"380\" y1=\"150\" x2=\"380\" y2=\"90\" stroke=\"#f43f5e\" stroke-width=\"1.8\" marker-end=\"url(#arrWave)\"/>\n\n  <!-- Dao động từ trường B (mặt phẳng nằm ngang/nghiêng - màu lục/lam) -->\n  <path d=\"M 80,150 C 120,175 160,175 200,150 C 240,125 280,125 320,150 C 360,175 400,175 440,150\" fill=\"none\" stroke=\"#06b6d4\" stroke-width=\"2.5\"/>\n  <!-- Các mũi tên B nằm xiên ngang -->\n  <line x1=\"140\" y1=\"150\" x2=\"160\" y2=\"168\" stroke=\"#06b6d4\" stroke-width=\"1.8\" marker-end=\"url(#arrWave)\"/>\n  <line x1=\"260\" y1=\"150\" x2=\"240\" y2=\"132\" stroke=\"#06b6d4\" stroke-width=\"1.8\" marker-end=\"url(#arrWave)\"/>\n  <line x1=\"380\" y1=\"150\" x2=\"400\" y2=\"168\" stroke=\"#06b6d4\" stroke-width=\"1.8\" marker-end=\"url(#arrWave)\"/>\n\n  <!-- Bước sóng lambda -->\n  <line x1=\"80\" y1=\"40\" x2=\"320\" y2=\"40\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n  <line x1=\"80\" y1=\"35\" x2=\"80\" y2=\"45\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n  <line x1=\"320\" y1=\"35\" x2=\"320\" y2=\"45\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n  <text x=\"200\" y=\"36\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Bước sóng λ = c / f</text>\n\n  <!-- Chú thích -->\n  <text x=\"270\" y=\"260\" fill=\"#facc15\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Sóng ngang: Vectơ E ⊥ Vectơ B ⊥ Phương truyền sóng v (Tốc độ ánh sáng c ≈ 3·10⁸ m/s)</text>\n</svg>",
      "q": "Quan sát mô hình không gian 3D của sóng điện từ lan truyền dọc theo trục z như hình vẽ. Đánh giá tính Đúng/Sai của các nhận định sau:",
      "stmts": [
        "Vectơ cường độ điện trường E dao động trong mặt phẳng thẳng đứng xOz.",
        "Vectơ cảm ứng từ B dao động trong mặt phẳng nằm ngang yOz.",
        "Khoảng cách giữa hai điểm gần nhau nhất trên trục truyền sóng z mà dao động tại đó cùng pha chính là một bước sóng λ.",
        "Nếu che chắn bằng một lồng lưới kim loại khép kín (lồng Faraday) thì sóng điện từ vẫn có thể tự do xuyên qua như truyền trong không khí."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) ĐÚNG | d) SAI",
      "exp": "• <b>Ý a: ĐÚNG.</b> Dao động theo phương trục x vuông góc phương truyền sóng z.<br>• <b>Ý b: ĐÚNG.</b> Dao động theo phương trục y vuông góc cả x và z.<br>• <b>Ý c: ĐÚNG.</b> Định nghĩa bước sóng.<br>• <b>Ý d: SAI.</b> Lồng kim loại dẫn điện (lồng Faraday) chắn hoàn toàn sóng điện từ (nguyên lí khi đi thang máy sóng điện thoại bị mất)."
    },
    {
      "type": "mcq",
      "q": "Sóng wifi gia đình thường hoạt động ở hai dải tần số 2,4 GHz và 5 GHz. Các sóng này thuộc loại bức xạ nào trong thang sóng điện từ?",
      "opts": [
        "Sóng vô tuyến cực ngắn (vi sóng - microwaves).",
        "Bức xạ tia hồng ngoại (infrared).",
        "Bức xạ tia tử ngoại (ultraviolet).",
        "Bức xạ tia X (X-rays)."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Phân loại sóng vô tuyến:</b> Bước sóng của wifi ở tần số f = 2,4 GHz là λ = <span class=\"fraction\"><span class=\"numerator\">c</span><span class=\"denominator\">f</span></span> = <span class=\"fraction\"><span class=\"numerator\">3 · 10⁸</span><span class=\"denominator\">2,4 · 10⁹</span></span> ≈ 0,125 m = 12,5 cm.<br>• Bước sóng này nằm trong dải từ 1 mm đến 1 m, thuộc vùng sóng vi ba (vi sóng) của sóng vô tuyến cực ngắn. Sóng cực ngắn mang lượng thông tin rất lớn, truyền thẳng tốt, thích hợp cho truyền dẫn mạng không dây wifi, thông tin vệ tinh và mạng di động 4G/5G."
    }
  ],
  "20": [
    {
      "type": "mcq",
      "q": "Một thanh kim loại chiều dài L chuyển động với vận tốc không đổi v vuông góc với các đường sức từ của một từ trường đều có cảm ứng từ B. Độ lớn của suất điện động cảm ứng xuất hiện giữa hai đầu thanh là:",
      "opts": [
        "ec = B · L · v.",
        "ec = <span class=\"fraction\"><span class=\"numerator\">B · v</span><span class=\"denominator\">L</span></span>.",
        "ec = <span class=\"fraction\"><span class=\"numerator\">B · L</span><span class=\"denominator\">v</span></span>.",
        "ec = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">2</span></span> · B · v² · L."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Suất điện động chuyển động:</b> Khi đoạn dây cắt đường sức từ với góc vuông: <span class=\"math-sym\">e</span><sub>c</sub> = <span class=\"math-sym\">B · v · L</span>."
    },
    {
      "type": "mcq",
      "q": "Một thanh dẫn điện dài 0,5 m chuyển động đều với tốc độ 4,0 m/s trong mặt phẳng vuông góc với từ trường đều B = 0,25 T. Suất điện động cảm ứng xuất hiện giữa hai đầu thanh là:",
      "opts": [
        "0,50 V.",
        "0,25 V.",
        "1,00 V.",
        "0,125 V."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <span class=\"math-sym\">e</span><sub>c</sub> = <span class=\"math-sym\">B · v · L</span> = 0,25 × 4,0 × 0,5 = <b>0,50 V</b>."
    },
    {
      "type": "mcq",
      "q": "Một khung dây phẳng tròn bán kính r = 10 cm gồm 50 vòng dây quay đều quanh một đường kính nằm trong từ trường đều B = 0,1 T với tốc độ góc ω = 100 rad/s. Trục quay vuông góc với vectơ B. Suất điện động cực đại sinh ra trong khung dây là:",
      "opts": [
        "15,7 V (5π V).",
        "31,4 V (10π V).",
        "7,85 V.",
        "5,0 V."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Diện tích một vòng: <span class=\"math-sym\">S = πr²</span> = π × 0,1² = 0,01π m².<br>• <span class=\"math-sym\">E</span><sub>0</sub> = <span class=\"math-sym\">ω · N · B · S</span> = 100 × 50 × 0,1 × (0,01π) = 5π ≈ <b>15,7 V</b>."
    },
    {
      "type": "tf",
      "q": "Xét bài toán thanh kim loại trượt trên hai thanh ray kim loại song song không ma sát nối với điện trở R trong từ trường đều thẳng đứng. Mỗi nhận định sau đây là Đúng hay Sai?",
      "stmts": [
        "Dòng điện cảm ứng xuất hiện trong mạch chạy qua thanh kim loại làm xuất hiện lực từ cản trở chuyển động của thanh (chống lại nguyên nhân sinh ra nó).",
        "Để thanh chuyển động thẳng đều với vận tốc không đổi v, ngoại lực kéo thanh phải có độ lớn bằng đúng độ lớn của lực từ cản trở.",
        "Toàn bộ công cơ học do ngoại lực sinh ra để duy trì chuyển động thẳng đều của thanh được chuyển hóa thành nhiệt lượng tỏa ra trên điện trở R.",
        "Nếu tăng điện trở R của mạch lên 2 lần thì độ lớn suất điện động cảm ứng giữa hai đầu thanh cũng tăng lên 2 lần."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) ĐÚNG | d) SAI",
      "exp": "• <b>Ý a: ĐÚNG.</b> Lực từ có tác dụng hãm chuyển động theo định luật Lenz.<br>• <b>Ý b: ĐÚNG.</b> Chuyển động thẳng đều thì hợp lực bằng 0 ⇒ <span class=\"math-sym\">F</span><sub>kéo</sub> = <span class=\"math-sym\">F</span><sub>từ</sub>.<br>• <b>Ý c: ĐÚNG.</b> Định luật bảo toàn năng lượng: công cơ học chuyển hoá hoàn toàn thành điện năng rồi toả nhiệt trên R.<br>• <b>Ý d: SAI.</b> Suất điện động <span class=\"math-sym\">e</span><sub>c</sub> = <span class=\"math-sym\">B · v · L</span> hoàn toàn độc lập với điện trở <span class=\"math-sym\">R</span>."
    },
    {
      "type": "match",
      "q": "Hãy ghép các bài toán/hiện tượng từ trường ở Cột A với công thức giải tương ứng ở Cột B:",
      "colA": [
        "Đoạn dây mang dòng điện cân bằng trong từ trường",
        "Thanh ray trượt sinh suất điện động",
        "Công suất hao phí truyền tải điện năng",
        "Khung dây quay tạo suất điện động cực đại"
      ],
      "colB": [
        "ΔP = <span class=\"fraction\"><span class=\"numerator\">P² · R</span><span class=\"denominator\">U² · cos²φ</span></span>",
        "E₀ = ω · N · B · S",
        "I · B · L · sinα = m · g",
        "ec = B · v · L · sinθ"
      ],
      "ans": [
        2,
        3,
        0,
        1
      ],
      "correctText": "1-C, 2-D, 3-A, 4-B",
      "exp": "• 1 ghép với C (Lực từ cân bằng trọng lực).<br>• 2 ghép với D (Suất điện động chuyển động).<br>• 3 ghép với A (Hao phí truyền tải điện).<br>• 4 ghép với B (Suất điện động xoay chiều cực đại)."
    },
    {
      "type": "drag",
      "q": "Chọn từ thích hợp điền vào chỗ trống để hoàn thiện bài toán năng lượng cảm ứng điện từ:",
      "text": "Khi thanh kim loại trượt đều trên ray trong từ trường, công của ngoại lực kéo thanh trong khoảng thời gian Δt bằng [0] do dòng điện cảm ứng sinh ra trong mạch. Hiện tượng này là một minh chứng thực nghiệm sắc bén khẳng định [1] được nghiệm đúng hoàn toàn trong [2].",
      "words": [
        "nhiệt lượng tỏa ra",
        "định luật bảo toàn năng lượng",
        "hiện tượng cảm ứng điện từ",
        "thế năng hấp dẫn",
        "định luật vạn vật hấp dẫn",
        "sự biến thiên entropy"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "[0]: nhiệt lượng tỏa ra | [1]: định luật bảo toàn năng lượng | [2]: hiện tượng cảm ứng điện từ",
      "exp": "• Công ngoại lực bằng <b>nhiệt lượng tỏa ra</b>, minh chứng sự bảo toàn năng lượng trong <b>hiện tượng cảm ứng điện từ</b>."
    },
    {
      "type": "mcq",
      "q": "Một thanh kim loại MN dài 20 cm, khối lượng 40 g đặt trên hai thanh ray nằm ngang nhẵn trong từ trường đều thẳng đứng B = 0,5 T. Nối hai ray với nguồn điện không đổi. Để thanh chuyển động sang phải với gia tốc a = 2,5 m/s² thì cường độ dòng điện chạy qua thanh MN phải là:",
      "opts": [
        "1,0 A.",
        "2,0 A.",
        "0,5 A.",
        "4,0 A."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Lực từ gây gia tốc cho thanh: <span class=\"math-sym\">F = m · a</span> = 0,04 × 2,5 = 0,1 N.<br>• Mà <span class=\"math-sym\">F = I · B · L</span> ⇒ <span class=\"math-sym\">I = F / (B · L)</span> = 0,1 / (0,5 × 0,2) = <b>1,0 A</b>."
    },
    {
      "type": "mcq",
      "q": "Tại một trạm phát điện, người ta muốn giảm công suất hao phí do tỏa nhiệt trên đường dây truyền tải đi 64 lần mà vẫn giữ nguyên công suất truyền đi và hệ số công suất. Cần phải điều chỉnh tỉ số điện áp ở máy biến áp tăng áp như thế nào?",
      "opts": [
        "Tăng điện áp trước khi truyền tải lên 8 lần.",
        "Tăng điện áp trước khi truyền tải lên 64 lần.",
        "Giảm điện áp trước khi truyền tải đi 8 lần.",
        "Tăng điện áp trước khi truyền tải lên 16 lần."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Vì hao phí tỉ lệ nghịch với <span class=\"math-sym\">U²</span>: <span class=\"fraction\"><span class=\"numerator\">ΔP₁</span><span class=\"denominator\">ΔP₂</span></span> = <span class=\"fraction\"><span class=\"numerator\">U₂²</span><span class=\"denominator\">U₁²</span></span> = 64 ⇒ <span class=\"fraction\"><span class=\"numerator\">U₂</span><span class=\"denominator\">U₁</span></span> = <span class=\"sqrt\"><span class=\"rad\">√</span><span class=\"radicand\">64</span></span> = <b>8 lần</b>."
    },
    {
      "type": "tf",
      "svgGraph": "<svg viewBox=\"0 0 540 280\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arr20\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#38bdf8\"/>\n    </marker>\n    <marker id=\"arrVel\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#10b981\"/>\n    </marker>\n  </defs>\n  <rect width=\"540\" height=\"280\" rx=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"26\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">BÀI TOÁN THANH KIM LOẠI TRƯỢT TRÊN RAY TRONG TỪ TRƯỜNG</text>\n\n  <!-- Hai thanh ray song song -->\n  <line x1=\"80\" y1=\"90\" x2=\"460\" y2=\"90\" stroke=\"#94a3b8\" stroke-width=\"4\"/>\n  <line x1=\"80\" y1=\"200\" x2=\"460\" y2=\"200\" stroke=\"#94a3b8\" stroke-width=\"4\"/>\n\n  <!-- Điện trở R nối giữa 2 ray bên trái -->\n  <line x1=\"80\" y1=\"90\" x2=\"80\" y2=\"120\" stroke=\"#94a3b8\" stroke-width=\"3\"/>\n  <rect x=\"70\" y=\"120\" width=\"20\" height=\"50\" fill=\"#334155\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n  <text x=\"50\" y=\"150\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"bold\">R</text>\n  <line x1=\"80\" y1=\"170\" x2=\"80\" y2=\"200\" stroke=\"#94a3b8\" stroke-width=\"3\"/>\n\n  <!-- Kí hiệu từ trường B đâm vuông góc vào mặt phẳng (dấu nhân x) -->\n  <g fill=\"#06b6d4\" font-size=\"16\" font-family=\"monospace\" font-weight=\"bold\">\n    <text x=\"130\" y=\"130\">⊗</text> <text x=\"130\" y=\"175\">⊗</text>\n    <text x=\"180\" y=\"130\">⊗</text> <text x=\"180\" y=\"175\">⊗</text>\n    <text x=\"230\" y=\"130\">⊗</text> <text x=\"230\" y=\"175\">⊗</text>\n    <text x=\"350\" y=\"130\">⊗</text> <text x=\"350\" y=\"175\">⊗</text>\n    <text x=\"410\" y=\"130\">⊗</text> <text x=\"410\" y=\"175\">⊗</text>\n  </g>\n  <text x=\"230\" y=\"70\" fill=\"#06b6d4\" font-size=\"13\" font-weight=\"bold\">Từ trường đều B (hướng vào)</text>\n\n  <!-- Thanh kim loại MN nằm ngang di chuyển -->\n  <rect x=\"280\" y=\"80\" width=\"16\" height=\"130\" rx=\"4\" fill=\"#fbbf24\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n  <text x=\"282\" y=\"75\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">M</text>\n  <text x=\"282\" y=\"225\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\">N</text>\n\n  <!-- Vận tốc v kéo sang phải -->\n  <line x1=\"296\" y1=\"145\" x2=\"360\" y2=\"145\" stroke=\"#10b981\" stroke-width=\"3\" marker-end=\"url(#arrVel)\"/>\n  <text x=\"340\" y=\"135\" fill=\"#10b981\" font-size=\"13\" font-weight=\"bold\">v</text>\n\n  <!-- Chiều dòng điện I cảm ứng từ N lên M -->\n  <line x1=\"288\" y1=\"170\" x2=\"288\" y2=\"120\" stroke=\"#f43f5e\" stroke-width=\"2.5\" marker-end=\"url(#arr20)\"/>\n  <text x=\"260\" y=\"145\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">I<tspan baseline-shift=\"sub\" font-size=\"70%\">c</tspan></text>\n\n  <!-- Chú thích công thức -->\n  <text x=\"270\" y=\"260\" fill=\"#facc15\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Suất điện động cảm ứng: |ec| = B·v·L • Lực cản từ: F<tspan baseline-shift=\"sub\" font-size=\"70%\">từ</tspan> = I<tspan baseline-shift=\"sub\" font-size=\"70%\">c</tspan>·B·L</text>\n</svg>",
      "q": "Xét sơ đồ thí nghiệm thanh kim loại MN trượt trên hai thanh ray trong từ trường đều như hình vẽ. Đánh giá tính Đúng/Sai của các mệnh đề sau:",
      "stmts": [
        "Khi thanh MN trượt sang phải với vận tốc v, diện tích mạch kín tăng làm từ thông qua mạch tăng lên.",
        "Theo định luật Lenz, dòng điện cảm ứng Ic có chiều chạy từ N lên M qua thanh MN để sinh ra từ trường cảm ứng ngược chiều chống lại sự tăng của từ thông.",
        "Độ lớn lực từ cản trở chuyển động của thanh được tính bằng công thức F<sub>t</sub>ừ = <span class=\"fraction\"><span class=\"numerator\">B² · L² · v</span><span class=\"denominator\">R</span></span>.",
        "Nếu đổi chiều của từ trường B hướng thẳng đứng từ dưới lên trên và vẫn kéo thanh sang phải thì chiều dòng điện cảm ứng không đổi."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) ĐÚNG | d) SAI",
      "exp": "• <b>Ý a: ĐÚNG.</b> Diện tích mạch tăng ⇒ từ thông tăng.<br>• <b>Ý b: ĐÚNG.</b> Từ trường cảm ứng phải hướng ra ngoài (chống tăng) ⇒ dòng điện chạy từ N lên M.<br>• <b>Ý c: ĐÚNG.</b> <span class=\"math-sym\">F</span><sub>từ</sub> = <span class=\"math-sym\">I</span><sub>c</sub><span class=\"math-sym\">BL</span> = (<span class=\"math-sym\">e</span><sub>c</sub>/<span class=\"math-sym\">R</span>)<span class=\"math-sym\">BL</span> = (<span class=\"math-sym\"><span class=\"fraction\"><span class=\"numerator\">B · v · L</span><span class=\"denominator\">R</span></span></span>)<span class=\"math-sym\">BL</span> = <span class=\"math-sym\"><span class=\"fraction\"><span class=\"numerator\">B² · L² · v</span><span class=\"denominator\">R</span></span></span>.<br>• <b>Ý d: SAI.</b> Khi đảo chiều B thì chiều dòng cảm ứng sẽ đảo chiều ngược lại (từ M xuống N)."
    },
    {
      "type": "mcq",
      "q": "Một máy biến áp có số vòng cuộn sơ cấp là 1000 vòng, cuộn thứ cấp là 200 vòng. Cuộn sơ cấp mắc vào điện áp xoay chiều hiệu dụng 220 V. Mạch thứ cấp tiêu thụ dòng điện hiệu dụng 5 A. Hiệu suất của máy biến áp đạt 90%. Cường độ dòng điện hiệu dụng ở cuộn sơ cấp là:",
      "opts": [
        "1,11 A.",
        "1,00 A.",
        "0,90 A.",
        "1,25 A."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Điện áp thứ cấp: <span class=\"math-sym\">U</span><sub>2</sub> = <span class=\"math-sym\">U</span><sub>1</sub> × (<span class=\"fraction\"><span class=\"numerator\">200</span><span class=\"denominator\">1000</span></span>) = 44 V.<br>• Công suất thứ cấp: <span class=\"math-sym\">P</span><sub>2</sub> = <span class=\"math-sym\">U</span><sub>2</sub> · <span class=\"math-sym\">I</span><sub>2</sub> = 44 × 5 = 220 W.<br>• Hiệu suất: <span class=\"math-sym\">H = P₂ / P₁</span> = 0,90 ⇒ <span class=\"math-sym\">P</span><sub>1</sub> = <span class=\"fraction\"><span class=\"numerator\">220</span><span class=\"denominator\">0</span></span>,90 ≈ 244,4 W.<br>• Cường độ dòng sơ cấp: <span class=\"math-sym\">I</span><sub>1</sub> = <span class=\"math-sym\">P</span><sub>1</sub> / <span class=\"math-sym\">U</span><sub>1</sub> = 244,<span class=\"fraction\"><span class=\"numerator\">4</span><span class=\"denominator\">220</span></span> ≈ <b>1,11 A</b>."
    }
  ],
  "21": [
    {
      "type": "mcq",
      "q": "Hạt nhân nguyên tử được cấu tạo từ các hạt cơ bản nào sau đây?",
      "opts": [
        "Các proton mang điện tích dương và các neutron không mang điện (gọi chung là nucleon).",
        "Các electron mang điện tích âm và các proton mang điện tích dương.",
        "Chỉ gồm các hạt neutron liên kết lại với nhau.",
        "Các hạt electron chuyển động với tốc độ ánh sáng xung quanh tâm."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Cấu tạo hạt nhân:</b> Hạt nhân nguyên tử được tạo thành từ <b>proton (mang điện tích +e)</b> và <b>neutron (không mang điện)</b>, gọi chung là các <b>nucleon</b>.",
      "svgGraph": "<svg viewBox=\"0 0 460 210\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <radialGradient id=\"pGrad\" cx=\"35%\" cy=\"35%\" r=\"65%\"><stop offset=\"0%\" stop-color=\"#fb7185\"/><stop offset=\"100%\" stop-color=\"#e11d48\"/></radialGradient>\n    <radialGradient id=\"nGrad\" cx=\"35%\" cy=\"35%\" r=\"65%\"><stop offset=\"0%\" stop-color=\"#60a5fa\"/><stop offset=\"100%\" stop-color=\"#2563eb\"/></radialGradient>\n    <radialGradient id=\"eGrad\" cx=\"35%\" cy=\"35%\" r=\"65%\"><stop offset=\"0%\" stop-color=\"#fef08a\"/><stop offset=\"100%\" stop-color=\"#eab308\"/></radialGradient>\n  </defs>\n  <!-- Electron orbits -->\n  <ellipse cx=\"230\" cy=\"105\" rx=\"160\" ry=\"50\" fill=\"none\" stroke=\"rgba(255,255,255,0.15)\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n  <ellipse cx=\"230\" cy=\"105\" rx=\"90\" ry=\"75\" fill=\"none\" stroke=\"rgba(255,255,255,0.15)\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\" transform=\"rotate(45 230 105)\"/>\n  <!-- Electrons -->\n  <circle cx=\"70\" cy=\"105\" r=\"5\" fill=\"url(#eGrad)\"><animate attributeName=\"opacity\" values=\"0.6;1;0.6\" dur=\"2s\" repeatCount=\"indefinite\"/></circle>\n  <circle cx=\"390\" cy=\"105\" r=\"5\" fill=\"url(#eGrad)\"/>\n  <!-- Nucleus Glow Container -->\n  <circle cx=\"230\" cy=\"105\" r=\"45\" fill=\"rgba(147,51,234,0.15)\" stroke=\"#a855f7\" stroke-width=\"1.5\"/>\n  <!-- Nucleons cluster -->\n  <g>\n    <!-- Protons -->\n    <circle cx=\"220\" cy=\"95\" r=\"10\" fill=\"url(#pGrad)\"/><text x=\"220\" y=\"98\" fill=\"#fff\" font-size=\"10\" font-weight=\"800\" text-anchor=\"middle\">+</text>\n    <circle cx=\"238\" cy=\"115\" r=\"10\" fill=\"url(#pGrad)\"/><text x=\"238\" y=\"118\" fill=\"#fff\" font-size=\"10\" font-weight=\"800\" text-anchor=\"middle\">+</text>\n    <circle cx=\"215\" cy=\"118\" r=\"10\" fill=\"url(#pGrad)\"/><text x=\"215\" y=\"121\" fill=\"#fff\" font-size=\"10\" font-weight=\"800\" text-anchor=\"middle\">+</text>\n    <!-- Neutrons -->\n    <circle cx=\"238\" cy=\"92\" r=\"10\" fill=\"url(#nGrad)\"/><text x=\"238\" y=\"95\" fill=\"#fff\" font-size=\"9\" font-weight=\"800\" text-anchor=\"middle\">n</text>\n    <circle cx=\"222\" cy=\"110\" r=\"10\" fill=\"url(#nGrad)\"/><text x=\"222\" y=\"113\" fill=\"#fff\" font-size=\"9\" font-weight=\"800\" text-anchor=\"middle\">n</text>\n    <circle cx=\"245\" cy=\"108\" r=\"10\" fill=\"url(#nGrad)\"/><text x=\"245\" y=\"111\" fill=\"#fff\" font-size=\"9\" font-weight=\"800\" text-anchor=\"middle\">n</text>\n  </g>\n  <!-- Legend -->\n  <rect x=\"25\" y=\"20\" width=\"130\" height=\"75\" rx=\"8\" fill=\"rgba(15,23,42,0.85)\" stroke=\"rgba(255,255,255,0.12)\"/>\n  <circle cx=\"45\" cy=\"40\" r=\"7\" fill=\"url(#pGrad)\"/><text x=\"60\" y=\"44\" fill=\"#fb7185\" font-size=\"11\" font-weight=\"700\">Proton (Z, +e)</text>\n  <circle cx=\"45\" cy=\"60\" r=\"7\" fill=\"url(#nGrad)\"/><text x=\"60\" y=\"64\" fill=\"#60a5fa\" font-size=\"11\" font-weight=\"700\">Neutron (N, 0)</text>\n  <circle cx=\"45\" cy=\"80\" r=\"5\" fill=\"url(#eGrad)\"/><text x=\"60\" y=\"84\" fill=\"#fde047\" font-size=\"11\" font-weight=\"700\">Electron (-e)</text>\n  <!-- Caption -->\n  <text x=\"230\" y=\"198\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"700\" text-anchor=\"middle\">Mô hình cấu tạo hạt nhân (Số khối A = Z + N)</text>\n</svg>"
    },
    {
      "type": "mcq",
      "q": "Hạt nhân nguyên tử nhôm có ký hiệu là ²⁷₁₃Al. Số lượng proton, neutron và số khối A của hạt nhân này lần lượt là:",
      "opts": [
        "13 proton, 14 neutron và số khối A = 27.",
        "13 proton, 27 neutron và số khối A = 14.",
        "14 proton, 13 neutron và số khối A = 27.",
        "27 proton, 13 neutron và số khối A = 14."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Kí hiệu <span class=\"math-sym\"><sup>A</sup><sub>Z</sub>X</span>:<br>• Số proton: <span class=\"math-sym\">Z</span> = 13.<br>• Số khối: <span class=\"math-sym\">A</span> = 27.<br>• Số neutron: <span class=\"math-sym\">N = A - Z</span> = 27 - 13 = 14."
    },
    {
      "type": "mcq",
      "q": "Các nguyên tử được gọi là <b>đồng vị</b> của nhau khi hạt nhân của chúng có:",
      "opts": [
        "Cùng số proton Z nhưng khác số neutron N (dẫn tới số khối A khác nhau).",
        "Cùng số neutron N nhưng khác số proton Z.",
        "Cùng số khối A nhưng khác số proton Z.",
        "Cùng khối lượng nhưng tính chất hóa học hoàn toàn khác nhau."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Định nghĩa đồng vị:</b> Các nguyên tử có <b>cùng số proton Z</b> (cùng vị trí trong bảng tuần hoàn hóa học) nhưng có <b>số neutron N khác nhau</b>."
    },
    {
      "type": "tf",
      "q": "Xét các đặc trưng kích thước và năng lượng của hạt nhân nguyên tử. Mỗi nhận định sau đây là Đúng hay Sai?",
      "stmts": [
        "Bán kính của hạt nhân nguyên tử tỉ lệ thuận với căn bậc ba của số khối A (R ≈ 1,2 · 10⁻¹⁵ · A^(<span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">3</span></span>) m).",
        "Kích thước của hạt nhân nguyên tử nhỏ hơn kích thước của toàn bộ nguyên tử khoảng 10.000 đến 100.000 lần.",
        "Đơn vị khối lượng nguyên tử u được định nghĩa bằng đúng khối lượng của một nguyên tử cacbon ¹²₆C tự do.",
        "Theo hệ thức Einstein, một vật có khối lượng nghỉ m luôn mang một năng lượng nghỉ tương ứng là E = m · c²."
      ],
      "ans": [
        true,
        true,
        false,
        true
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) SAI | d) ĐÚNG",
      "exp": "• <b>Ý a: ĐÚNG.</b> Công thức bán kính hạt nhân thực nghiệm.<br>• <b>Ý b: ĐÚNG.</b> Hạt nhân cỡ <span class=\"math-sym\">10⁻¹⁵</span> m, nguyên tử cỡ <span class=\"math-sym\">10⁻¹⁰</span> m.<br>• <b>Ý c: SAI.</b> 1 u bằng <b><span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">12</span></span></b> khối lượng nguyên tử cacbon ¹²₆C.<br>• <b>Ý d: ĐÚNG.</b> Hệ thức tương đương khối lượng - năng lượng của Einstein."
    },
    {
      "type": "match",
      "q": "Hãy ghép các đại lượng ở Cột A với giá trị xấp xỉ chuẩn mực ở Cột B:",
      "colA": [
        "Khối lượng của 1 đơn vị u tính theo kg",
        "Năng lượng tương đương của 1 u tính theo MeV",
        "Điện tích nguyên tố e",
        "Khối lượng của hạt proton mp"
      ],
      "colB": [
        "1,602 · 10⁻¹⁹ C",
        "1,66055 · 10⁻²⁷ kg",
        "931,5 MeV/c²",
        "1,00728 u"
      ],
      "ans": [
        1,
        2,
        0,
        3
      ],
      "correctText": "1-B, 2-C, 3-A, 4-D",
      "exp": "• 1 ghép với B (1 u theo kg).<br>• 2 ghép với C (1 u theo MeV).<br>• 3 ghép với A (Điện tích e).<br>• 4 ghép với D (Khối lượng proton theo u)."
    },
    {
      "type": "drag",
      "q": "Điền từ thích hợp vào chỗ trống để làm sáng tỏ cấu trúc hạt nhân:",
      "text": "Số lượng [0] trong hạt nhân quyết định điện tích của hạt nhân và vị trí của nguyên tố trong bảng hệ thống tuần hoàn hóa học. Tổng số proton và [1] được gọi là số khối A. Hầu hết khối lượng của toàn bộ nguyên tử tập trung ở [2] do khối lượng các electron ở lớp vỏ là không đáng kể.",
      "words": [
        "proton",
        "neutron",
        "hạt nhân",
        "electron",
        "mạng tinh thể",
        "quang phổ"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "[0]: proton | [1]: neutron | [2]: hạt nhân",
      "exp": "• Số <b>proton</b> quyết định số hiệu nguyên tử Z; tổng proton và <b>neutron</b> là số khối A; khối lượng nguyên tử tập trung chủ yếu ở <b>hạt nhân</b>."
    },
    {
      "type": "mcq",
      "q": "Kĩ thuật chụp cắt lớp phát xạ positron (PET scan) là một công nghệ chẩn đoán y tế tiên tiến giúp phát hiện sớm các tế bào ung thư. Kĩ thuật này sử dụng loại chất nào đưa vào cơ thể bệnh nhân?",
      "opts": [
        "Dược chất phóng xạ chứa đồng vị phóng xạ phát hạt positron (tia β⁺, như ¹⁸₉F).",
        "Nam châm vĩnh cửu siêu nhỏ gắn định vị vào tế bào hồng cầu.",
        "Khối lượng kim loại chì ²⁰⁶₈₂Pb có khả năng cản tia bức xạ ngoài.",
        "Khí hiếm phóng xạ radon hít trực tiếp qua đường hô hấp."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Ứng dụng y học hạt nhân (PET Scan):</b> Bệnh nhân được tiêm một lượng nhỏ dược chất chứa đồng vị phát hạt positron β⁺ (như ¹⁸₉F gắn vào glucose).<br>• Tế bào ung thư phát triển mạnh tiêu thụ nhiều glucose sẽ tập trung nhiều đồng vị này. Hạt positron phát ra khi phân rã gặp ngay electron trong mô sẽ xảy ra hiện tượng hủy cặp (e⁺ + e⁻ → 2γ), tạo ra 2 photon tia gamma bay ngược chiều nhau (180°). Hệ thống máy dò PET ghi lại các tia gamma này để dựng hình ảnh 3D vị trí khối u với độ chính xác cao."
    },
    {
      "type": "mcq",
      "q": "Bán kính hạt nhân nguyên tử có kích thước cực nhỏ (cỡ 10⁻¹⁵ m) nhưng lại tập trung tới hơn 99,9% khối lượng của toàn bộ nguyên tử. Mật độ khối lượng của vật chất hạt nhân xấp xỉ khoảng bao nhiêu?",
      "opts": [
        "Khoảng 10¹⁷ kg/m³ (một giọt vật chất hạt nhân thể tích 1 cm³ có khối lượng lên tới hàng trăm triệu tấn).",
        "Khoảng 1000 kg/m³ tương đương với khối lượng riêng của nước nguyên chất.",
        "Khoảng 10⁴ kg/m³ tương đương với khối lượng riêng của kim loại chì và vàng.",
        "Khoảng 10⁻¹⁷ kg/m³ vì các hạt vi mô có khối lượng vô cùng nhỏ bé."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Mật độ khối lượng hạt nhân:</b> Thể tích hạt nhân V = <span class=\"fraction\"><span class=\"numerator\">4</span><span class=\"denominator\">3</span></span> · π · R³ ≈ 7,2 · 10⁻⁴⁵ · A m³.<br>• Khối lượng hạt nhân m ≈ A · 1,66 · 10⁻²⁷ kg.<br>• Mật độ khối lượng ρ = <span class=\"fraction\"><span class=\"numerator\">m</span><span class=\"denominator\">V</span></span> ≈ <span class=\"fraction\"><span class=\"numerator\">1,66 · 10⁻²⁷</span><span class=\"denominator\">7,2 · 10⁻⁴⁵</span></span> ≈ 2,3 · 10¹⁷ kg/m³.<br>• Con số khổng lồ này cho thấy vật chất hạt nhân đặc khít một cách phi thường (tương đương mật độ vật chất bên trong các ngôi sao neutron trong vũ trụ)."
    },
    {
      "type": "tf",
      "svgGraph": "<svg viewBox=\"0 0 540 280\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <radialGradient id=\"protGrad\" cx=\"35%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#f87171\"/>\n      <stop offset=\"100%\" stop-color=\"#b91c1c\"/>\n    </radialGradient>\n    <radialGradient id=\"neutGrad\" cx=\"35%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#94a3b8\"/>\n      <stop offset=\"100%\" stop-color=\"#475569\"/>\n    </radialGradient>\n  </defs>\n  <rect width=\"540\" height=\"280\" rx=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"26\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">MÔ HÌNH CẤU TRÚC HẠT NHÂN NGUYÊN TỬ (PROTON &amp; NEUTRON)</text>\n\n  <!-- Vùng hạt nhân trung tâm -->\n  <circle cx=\"210\" cy=\"140\" r=\"75\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2\" stroke-dasharray=\"6,4\"/>\n  <text x=\"210\" y=\"55\" fill=\"#38bdf8\" font-size=\"11\" text-anchor=\"middle\">Bán kính R ≈ 1,2·10⁻¹⁵·A^(1/3) m</text>\n\n  <!-- Các nucleon -->\n  <!-- Hàng sau -->\n  <circle cx=\"185\" cy=\"115\" r=\"16\" fill=\"url(#neutGrad)\"/>\n  <text x=\"185\" y=\"120\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">n</text>\n\n  <circle cx=\"235\" cy=\"115\" r=\"16\" fill=\"url(#protGrad)\"/>\n  <text x=\"235\" y=\"120\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">p⁺</text>\n\n  <circle cx=\"210\" cy=\"95\" r=\"16\" fill=\"url(#neutGrad)\"/>\n  <text x=\"210\" y=\"100\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">n</text>\n\n  <!-- Hàng giữa -->\n  <circle cx=\"165\" cy=\"145\" r=\"16\" fill=\"url(#protGrad)\"/>\n  <text x=\"165\" y=\"150\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">p⁺</text>\n\n  <circle cx=\"210\" cy=\"140\" r=\"17\" fill=\"url(#neutGrad)\"/>\n  <text x=\"210\" y=\"145\" fill=\"#f8fafc\" font-size=\"13\" font-weight=\"bold\" text-anchor=\"middle\">n</text>\n\n  <circle cx=\"255\" cy=\"145\" r=\"16\" fill=\"url(#protGrad)\"/>\n  <text x=\"255\" y=\"150\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">p⁺</text>\n\n  <!-- Hàng trước -->\n  <circle cx=\"185\" cy=\"165\" r=\"16\" fill=\"url(#neutGrad)\"/>\n  <text x=\"185\" y=\"170\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">n</text>\n\n  <circle cx=\"235\" cy=\"165\" r=\"16\" fill=\"url(#protGrad)\"/>\n  <text x=\"235\" y=\"170\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">p⁺</text>\n\n  <!-- Bảng ký hiệu hạt nhân bên phải -->\n  <g transform=\"translate(330, 70)\">\n    <rect x=\"0\" y=\"0\" width=\"180\" height=\"140\" rx=\"10\" fill=\"rgba(30,41,59,0.9)\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n    <text x=\"90\" y=\"30\" fill=\"#fbbf24\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">KÍ HIỆU HẠT NHÂN</text>\n    <text x=\"90\" y=\"80\" fill=\"#38bdf8\" font-size=\"34\" font-weight=\"800\" text-anchor=\"middle\">X</text>\n    <text x=\"55\" y=\"65\" fill=\"#f43f5e\" font-size=\"18\" font-weight=\"bold\">A</text>\n    <text x=\"55\" y=\"95\" fill=\"#10b981\" font-size=\"18\" font-weight=\"bold\">Z</text>\n    <text x=\"15\" y=\"115\" fill=\"#cbd5e1\" font-size=\"10\">• A = Z + N (Số khối)</text>\n    <text x=\"15\" y=\"130\" fill=\"#cbd5e1\" font-size=\"10\">• Z: Số proton (Điện tích)</text>\n  </g>\n\n  <!-- Chú thích chân -->\n  <text x=\"270\" y=\"255\" fill=\"#facc15\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Đơn vị khối lượng nguyên tử: 1 u ≈ 1,66055·10⁻²⁷ kg ≈ 931,5 MeV/c²</text>\n</svg>",
      "q": "Dựa vào sơ đồ mô hình cấu trúc hạt nhân nguyên tử hình bên. Đánh giá tính Đúng/Sai của các nhận định sau:",
      "stmts": [
        "Các proton (p⁺) tích điện dương nằm rất gần nhau trong hạt nhân chịu lực đẩy tĩnh điện Coulomb rất mạnh.",
        "Để hạt nhân tồn tại bền vững, giữa các nucleon phải có lực hút hạt nhân (lực tương tác mạnh) thắng được lực đẩy tĩnh điện.",
        "Lực hạt nhân có bản chất là lực hấp dẫn giữa các nucleon.",
        "Lực hạt nhân là lực tương tác có bán kính tác dụng rất ngắn, chỉ có tác dụng trong phạm vi kích thước hạt nhân (khoảng 10⁻¹⁵ m)."
      ],
      "ans": [
        true,
        true,
        false,
        true
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) SAI | d) ĐÚNG",
      "exp": "• <b>Ý a: ĐÚNG.</b> Ở khoảng cách cực ngắn, lực đẩy Coulomb giữa các proton là cực kì lớn.<br>• <b>Ý b: ĐÚNG.</b> Lực hạt nhân là lực liên kết giữ các nucleon lại với nhau.<br>• <b>Ý c: SAI.</b> Lực hạt nhân là <b>lực tương tác mạnh</b>, hoàn toàn không phải lực hấp dẫn hay lực điện từ.<br>• <b>Ý d: ĐÚNG.</b> Ngoài phạm vi <span class=\"math-sym\">10⁻¹⁵</span> m, lực hạt nhân giảm nhanh chóng về 0."
    },
    {
      "type": "mcq",
      "q": "Trong tự nhiên, nguyên tố carbon có các đồng vị bền là ¹²₆C, ¹³₆C và đồng vị phóng xạ ¹⁴₆C (chu kì bán rã 5730 năm). Khẳng định nào sau đây là đúng khi nói về các đồng vị này?",
      "opts": [
        "Chúng có cùng tính chất hóa học vì cùng có 6 electron lớp vỏ, nhưng khác nhau về độ bền vững hạt nhân.",
        "Chúng có tính chất hóa học hoàn toàn khác nhau vì số lượng neutron quyết định khả năng liên kết phân tử.",
        "Cả ba đồng vị đều tự phát phân rã phóng xạ với cùng tốc độ và chu kì bán rã.",
        "Đồng vị ¹⁴₆C có 8 proton và 6 neutron nằm trong hạt nhân nguyên tử."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Đặc điểm của đồng vị:</b> Các đồng vị của cùng một nguyên tố có cùng số hiệu nguyên tử Z = 6 (cùng số proton và cùng số electron lớp ngoài), do đó chúng có cấu hình electron giống hệt nhau và thể hiện các tính chất hóa học hoàn toàn như nhau.<br>• Tuy nhiên, vì có số neutron N khác nhau (N<sub>C12</sub> = 6, N<sub>C13</sub> = 7, N<sub>C14</sub> = 8) nên khối lượng và độ bền vững hạt nhân của chúng khác nhau: ¹²C, ¹³C bền vững vĩnh cửu, trong khi ¹⁴C không bền và phân rã phóng xạ β⁻."
    }
  ],
  "22": [
    {
      "type": "mcq",
      "q": "Độ hụt khối Δm của hạt nhân nguyên tử <sup>A</sup><sub>Z</sub>X được xác định bởi công thức nào sau đây?",
      "opts": [
        "Δm = [Z · mp + (A - Z) · mn] - mX.",
        "Δm = mX - [Z · mp + (A - Z) · mn].",
        "Δm = A · mp - mX.",
        "Δm = Z · mp + A · mn."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Định nghĩa độ hụt khối:</b> Khối lượng của hạt nhân luôn nhỏ hơn tổng khối lượng của các nucleon tự do tạo nên nó: <span class=\"math-sym\">Δm = [Z · m<sub>p</sub> + (A - Z) · m<sub>n</sub>] - m<sub>X</sub> > 0</span>."
    },
    {
      "type": "mcq",
      "q": "Đại lượng vật lí nào sau đây đặc trưng trực tiếp cho <b>mức độ bền vững</b> của hạt nhân nguyên tử?",
      "opts": [
        "Năng lượng liên kết riêng (E<sub>lkr</sub> = <span class=\"fraction\"><span class=\"numerator\">E<sub>lk</sub></span><span class=\"denominator\">A</span></span>).",
        "Năng lượng liên kết toàn phần (Elk).",
        "Độ hụt khối của hạt nhân (Δm).",
        "Số lượng neutron trong hạt nhân."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Quy tắc bền vững:</b> Năng lượng liên kết toàn phần tỉ lệ với số nucleon, nhưng <b>năng lượng liên kết riêng (<span class=\"math-sym\">E</span><sub>lkr</sub> = <span class=\"math-sym\">E</span><sub>lk</sub> / <span class=\"math-sym\">A</span>)</b> mới là đại lượng đặc trưng cho độ bền vững của hạt nhân (càng lớn thì hạt nhân càng bền)."
    },
    {
      "type": "mcq",
      "q": "Nguồn gốc năng lượng khổng lồ giúp Mặt Trời và các vì sao trong vũ trụ tỏa sáng và bức xạ nhiệt liên tục hàng tỉ năm qua đến từ loại phản ứng nào sau đây?",
      "opts": [
        "Phản ứng nhiệt hạch (tổng hợp các hạt nhân hydro nhẹ thành hạt nhân heli ở nhiệt độ và áp suất cực cao).",
        "Phản ứng phân hạch dây chuyền của các đồng vị urani và thori bên trong lòng Mặt Trời.",
        "Quá trình phân rã phóng xạ tự nhiên của các quặng khoáng chất kim loại nặng ở tâm Mặt Trời.",
        "Phản ứng oxy hóa cháy của khí hydro và carbon dưới áp suất khí quyển Mặt Trời."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Năng lượng Mặt Trời từ Phản ứng nhiệt hạch:</b> Ở vùng tâm của Mặt Trời có nhiệt độ khoảng 15 triệu Kelvin và áp suất hàng trăm tỉ atm.<br>• Dưới điều kiện siêu nhiệt này, các hạt nhân hydro (¹₁H) có động năng cực lớn vượt qua lực đẩy Coulomb tĩnh điện, kết hợp với nhau trong chuỗi phản ứng nhiệt hạch tạo thành hạt nhân heli (⁴₂He) và giải phóng nguồn năng lượng bức xạ khổng lồ khoảng 26,7 MeV cho mỗi hạt heli tạo thành."
    },
    {
      "type": "tf",
      "q": "Xét các định luật bảo toàn trong phản ứng hạt nhân. Mỗi nhận định sau đây là Đúng hay Sai?",
      "stmts": [
        "Trong mọi phản ứng hạt nhân luôn có sự bảo toàn điện tích (Z) và bảo toàn số khối (A).",
        "Trong phản ứng hạt nhân luôn luôn bảo toàn tổng khối lượng nghỉ của các hạt.",
        "Định luật bảo toàn động lượng toàn phần luôn được nghiệm đúng trong phản ứng hạt nhân.",
        "Nếu tổng khối lượng nghỉ của các hạt trước phản ứng lớn hơn tổng khối lượng nghỉ của các hạt sau phản ứng thì phản ứng đó là phản ứng tỏa năng lượng."
      ],
      "ans": [
        true,
        false,
        true,
        true
      ],
      "correctText": "a) ĐÚNG | b) SAI | c) ĐÚNG | d) ĐÚNG",
      "exp": "• <b>Ý a: ĐÚNG.</b> Bảo toàn số nucleon A và điện tích Z.<br>• <b>Ý b: SAI.</b> Không có định luật bảo toàn khối lượng nghỉ trong hạt nhân (khối lượng nghỉ chuyển thành động năng hoặc năng lượng photon).<br>• <b>Ý c: ĐÚNG.</b> Bảo toàn động lượng là định luật phổ quát.<br>• <b>Ý d: ĐÚNG.</b> <span class=\"math-sym\">ΔE = (m</span><sub>trước</sub> - <span class=\"math-sym\">m</span><sub>sau</sub>)<span class=\"math-sym\">c² > 0</span> (tỏa năng lượng)."
    },
    {
      "type": "match",
      "q": "Hãy ghép khái niệm ở Cột A với biểu thức tương ứng ở Cột B:",
      "colA": [
        "Năng lượng liên kết Elk",
        "Năng lượng liên kết riêng Elkr",
        "Năng lượng tỏa ra của phản ứng hạt nhân",
        "Độ hụt khối Δm"
      ],
      "colB": [
        "<span class=\"fraction\"><span class=\"numerator\">Δm · c²</span><span class=\"denominator\">A</span></span>",
        "(mtrước - msau) · c²",
        "[Z·mp + (A - Z)·mn] - mX",
        "Δm · c²"
      ],
      "ans": [
        3,
        0,
        1,
        2
      ],
      "correctText": "1-D, 2-A, 3-B, 4-C",
      "exp": "• 1 ghép với D (Năng lượng liên kết toàn phần).<br>• 2 ghép với A (Năng lượng liên kết riêng).<br>• 3 ghép với B (Năng lượng tỏa phản ứng).<br>• 4 ghép với C (Độ hụt khối)."
    },
    {
      "type": "drag",
      "q": "Chọn từ thích hợp điền vào chỗ trống để làm sáng tỏ bản chất phản ứng hạt nhân:",
      "text": "Lực hạt nhân là lực tương tác [0] liên kết các nucleon trong hạt nhân. Trong một phản ứng hạt nhân tỏa năng lượng, tổng độ hụt khối của các hạt nhân sinh ra sau phản ứng [1] tổng độ hụt khối của các hạt nhân trước phản ứng, đồng thời các hạt nhân sản phẩm có xu hướng [2] hơn.",
      "words": [
        "mạnh",
        "lớn hơn",
        "bền vững",
        "điện từ",
        "nhỏ hơn",
        "kém bền"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "[0]: mạnh | [1]: lớn hơn | [2]: bền vững",
      "exp": "• Lực hạt nhân là tương tác <b>mạnh</b>. Khi tỏa năng lượng, độ hụt khối sau <b>lớn hơn</b> độ hụt khối trước và sản phẩm sinh ra <b>bền vững</b> hơn."
    },
    {
      "type": "mcq",
      "q": "Cho khối lượng hạt nhân ⁴₂He là 4,0015 u; mp = 1,00728 u; mn = 1,00866 u. Lấy 1 u = 931,5 MeV/c². Năng lượng liên kết riêng của hạt nhân ⁴₂He là:",
      "opts": [
        "7,07 MeV/nucleon.",
        "28,3 MeV/nucleon.",
        "14,1 MeV/nucleon.",
        "3,53 MeV/nucleon."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Độ hụt khối: <span class=\"math-sym\">Δm</span> = 2 × 1,00728 + 2 × 1,00866 - 4,0015 = 0,03038 u.<br>• Năng lượng liên kết: <span class=\"math-sym\">E</span><sub>lk</sub> = 0,03038 × 931,5 ≈ 28,30 MeV.<br>• Năng lượng liên kết riêng: <span class=\"math-sym\">E</span><sub>lkr</sub> = 28,<span class=\"fraction\"><span class=\"numerator\">30</span><span class=\"denominator\">4</span></span> ≈ <b>7,07 MeV/nucleon</b>."
    },
    {
      "type": "mcq",
      "q": "Trên đường cong năng lượng liên kết riêng theo số khối A, các hạt nhân có số khối trong khoảng 50 < A < 70 (đặc biệt là sắt ⁵⁶₂₆Fe) có năng lượng liên kết riêng đạt cực đại (khoảng 8,8 MeV/nucleon). Ý nghĩa vật lí của đặc điểm này là gì?",
      "opts": [
        "Hạt nhân ⁵⁶₂₆Fe bền vững nhất trong tự nhiên, khó bị phá vỡ nhất, là 'điểm dừng' của quá trình nhiệt hạch trong các ngôi sao già.",
        "Hạt nhân ⁵⁶₂₆Fe kém bền vững nhất và rất dễ dàng tự phát nổ phân hạch ở điều kiện thường.",
        "Hạt nhân sắt có khả năng tự phát nổ nhiệt hạch để sinh ra các nguyên tố nhẹ hơn như hydro.",
        "Năng lượng liên kết của toàn bộ hạt nhân sắt nhỏ hơn năng lượng liên kết của một hạt proton đơn lẻ."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Độ bền vững của hạt nhân:</b> Năng lượng liên kết riêng E<sub>lkr</sub> = <span class=\"fraction\"><span class=\"numerator\">E<sub>lk</sub></span><span class=\"denominator\">A</span></span> đặc trưng cho mức độ bền vững của hạt nhân: E<sub>lkr</sub> càng lớn thì hạt nhân càng bền chặt.<br>• Với giá trị cực đại ≈ 8,8 MeV/nucleon, hạt nhân sắt ⁵⁶₂₆Fe là một trong những hạt nhân bền vững nhất trong vũ trụ. Các phản ứng nhiệt hạch trong lõi các ngôi sao chỉ có thể sinh năng lượng đến khi tạo ra sắt thì dừng lại; để tạo ra các nguyên tố nặng hơn sắt cần năng lượng từ các vụ nổ siêu tân tinh (supernova)."
    },
    {
      "type": "tf",
      "svgGraph": "<svg viewBox=\"0 0 540 280\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arr22\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#94a3b8\"/>\n    </marker>\n  </defs>\n  <rect width=\"540\" height=\"280\" rx=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"26\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">ĐƯỜNG CONG NĂNG LƯỢNG LIÊN KẾT RIÊNG THEO SỐ KHỐI A</text>\n\n  <!-- Hệ trục Elkr theo A -->\n  <line x1=\"50\" y1=\"230\" x2=\"490\" y2=\"230\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr22)\"/>\n  <line x1=\"50\" y1=\"230\" x2=\"50\" y2=\"35\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr22)\"/>\n  <text x=\"475\" y=\"250\" fill=\"#94a3b8\" font-size=\"13\">Số khối A</text>\n  <text x=\"15\" y=\"45\" fill=\"#38bdf8\" font-size=\"12\">Elkr (MeV/nu)</text>\n  <text x=\"35\" y=\"245\" fill=\"#94a3b8\" font-size=\"12\">0</text>\n\n  <!-- Vùng hạt nhân bền vững nhất quanh Fe (A = 50 - 70) -->\n  <rect x=\"140\" y=\"50\" width=\"80\" height=\"180\" fill=\"rgba(16,185,129,0.15)\" stroke=\"none\"/>\n  <text x=\"180\" y=\"70\" fill=\"#10b981\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Vùng bền vững nhất</text>\n\n  <!-- Đường cong Elkr -->\n  <!-- Bắt đầu từ dơteri (A=2) ~ 1.1 MeV, lên He (A=4) ~ 7.1 MeV, đạt đỉnh Fe (A=56) ~ 8.8 MeV, giảm dần tới U (A=238) ~ 7.6 MeV -->\n  <path d=\"M 55,215 Q 70,100 80,105 Q 100,120 130,65 Q 180,55 240,65 Q 350,90 470,95\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"3\"/>\n\n  <!-- Điểm Fe-56 đỉnh cực đại -->\n  <circle cx=\"180\" cy=\"55\" r=\"5\" fill=\"#f43f5e\"/>\n  <line x1=\"180\" y1=\"55\" x2=\"180\" y2=\"230\" stroke=\"#f43f5e\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <text x=\"180\" y=\"45\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">⁵⁶₂₆Fe (~8,8 MeV)</text>\n  <text x=\"175\" y=\"248\" fill=\"#f43f5e\" font-size=\"11\" font-weight=\"bold\">56</text>\n\n  <!-- Điểm U-238 -->\n  <circle cx=\"470\" cy=\"95\" r=\"5\" fill=\"#fbbf24\"/>\n  <line x1=\"470\" y1=\"95\" x2=\"470\" y2=\"230\" stroke=\"#fbbf24\" stroke-width=\"1.2\" stroke-dasharray=\"3,3\"/>\n  <text x=\"470\" y=\"85\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">²³⁸U (~7,6 MeV)</text>\n  <text x=\"460\" y=\"248\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\">238</text>\n\n  <!-- Điểm He-4 -->\n  <circle cx=\"80\" cy=\"105\" r=\"4.5\" fill=\"#38bdf8\"/>\n  <text x=\"80\" y=\"95\" fill=\"#38bdf8\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">⁴He</text>\n  <text x=\"75\" y=\"248\" fill=\"#94a3b8\" font-size=\"11\">4</text>\n\n  <!-- Ghi chú phân hạch & nhiệt hạch -->\n  <text x=\"90\" y=\"160\" fill=\"#06b6d4\" font-size=\"11\" font-weight=\"bold\">← Nhiệt hạch (tổng hợp hạt nhẹ)</text>\n  <text x=\"310\" y=\"140\" fill=\"#fbbf24\" font-size=\"11\" font-weight=\"bold\">Phân hạch (vỡ hạt nặng) →</text>\n</svg>",
      "q": "Quan sát đường cong năng lượng liên kết riêng Elkr theo số khối A hình bên. Đánh giá tính Đúng/Sai của các nhận định sau:",
      "stmts": [
        "Các hạt nhân ở hai đầu đồ thị (rất nhẹ như H và rất nặng như U) đều có năng lượng liên kết riêng nhỏ hơn các hạt nhân ở vùng giữa.",
        "Hạt nhân sắt ⁵⁶₂₆Fe ở vị trí đỉnh cao nhất của đồ thị nên là một trong những hạt nhân bền vững nhất trong tự nhiên.",
        "Quá trình phân hạch hạt nhân urani ²³⁸U và nhiệt hạch hạt nhân hiđrô đều tạo ra các hạt nhân mới có năng lượng liên kết riêng lớn hơn nên đều tỏa năng lượng.",
        "Năng lượng liên kết của hạt nhân ²³⁸U nhỏ hơn năng lượng liên kết của hạt nhân ⁵⁶Fe."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) ĐÚNG | d) SAI",
      "exp": "• <b>Ý a: ĐÚNG.</b> Đồ thị hình chuông lệch, hai đầu thấp hơn đỉnh giữa.<br>• <b>Ý b: ĐÚNG.</b> Fe-56 có <span class=\"math-sym\">E</span><sub>lkr</sub> cực đại ≈ 8,8 MeV/nu.<br>• <b>Ý c: ĐÚNG.</b> Cả hai phản ứng đều chuyển dịch về phía vùng hạt nhân bền hơn nên đều toả năng lượng cực lớn.<br>• <b>Ý d: SAI.</b> Năng lượng liên kết toàn phần <span class=\"math-sym\">E</span><sub>lk</sub> = <span class=\"math-sym\">A · E</span><sub>lkr</sub>. U-238 có <span class=\"math-sym\">E</span><sub>lk</sub> ≈ 238 × 7,6 ≈ 1800 MeV lớn hơn nhiều so với Fe-56 (<span class=\"math-sym\">E</span><sub>lk</sub> ≈ 56 × 8,8 ≈ 490 MeV)."
    },
    {
      "type": "mcq",
      "q": "Vũ khí hạt nhân bao gồm bom nguyên tử (bom A) và bom nhiệt hạch (bom H hay bom khinh khí). Sự khác biệt cốt lõi về nguyên lí giải phóng năng lượng giữa hai loại vũ khí này là gì?",
      "opts": [
        "Bom A dựa trên phân hạch dây chuyền hạt nhân nặng (²³⁵U), bom H dựa trên nhiệt hạch hạt nhân hydro được kích hoạt bởi bom A.",
        "Bom nguyên tử không phát ra phóng xạ nguy hiểm, còn bom nhiệt hạch chỉ phát ra sóng âm thanh xung kích.",
        "Bom nhiệt hạch chỉ dùng thuốc nổ hóa học TNT thông thường nén khí để tạo ra áp suất cao.",
        "Bom nguyên tử giải phóng năng lượng lớn hơn bom nhiệt hạch hàng nghìn lần với cùng khối lượng."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Cơ chế của bom hạt nhân:</b><br>1. <i>Bom nguyên tử (Bom A):</i> Dựa trên phản ứng phân hạch dây chuyền không điều khiển của các hạt nhân nặng (²³⁵U hoặc ²³⁹Pu) khi đạt khối lượng tới hạn.<br>2. <i>Bom nhiệt hạch (Bom H):</i> Dựa trên phản ứng tổng hợp hạt nhân các đồng vị hydro (²₁H + ³₁H → ⁴₂He + ¹₀n). Để đạt nhiệt độ hàng chục triệu độ kích hoạt phản ứng nhiệt hạch, người ta phải dùng một quả bom phân hạch (bom A) làm ngòi nổ. Bom H có sức tàn phá lớn gấp hàng trăm đến hàng nghìn lần bom A."
    }
  ],
  "23": [
    {
      "type": "mcq",
      "q": "Hiện tượng phóng xạ là quá trình biến đổi hạt nhân có đặc điểm bản chất nào sau đây?",
      "opts": [
        "Quá trình tự phát của một hạt nhân không bền vững tự phân rã, giải phóng các tia bức xạ và biến đổi thành hạt nhân khác.",
        "Hiện tượng hạt nhân bị kích thích phát quang khi bị chiếu ánh sáng tử ngoại.",
        "Quá trình hai hạt nhân nhẹ va chạm kết hợp thành hạt nhân nặng hơn ở nhiệt độ cao.",
        "Hiện tượng bắn phá hạt nhân bằng chùm electron năng lượng cao trong máy gia tốc."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Bản chất hiện tượng phóng xạ:</b> Là quá trình <b>tự phát và ngẫu nhiên</b> từ bên trong hạt nhân, hoàn toàn không phụ thuộc vào các điều kiện môi trường bên ngoài như nhiệt độ, áp suất hay liên kết hóa học.",
      "svgGraph": "<svg viewBox=\"0 0 460 210\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Radioactive source Lead box -->\n  <rect x=\"30\" y=\"80\" width=\"50\" height=\"50\" fill=\"#475569\" stroke=\"#94a3b8\" stroke-width=\"2\" rx=\"4\"/>\n  <rect x=\"65\" y=\"100\" width=\"20\" height=\"10\" fill=\"#0f172a\"/>\n  <circle cx=\"50\" cy=\"105\" r=\"8\" fill=\"#f59e0b\"/>\n  <text x=\"55\" y=\"145\" fill=\"#cbd5e1\" font-size=\"10\" text-anchor=\"middle\">Nguồn phóng xạ</text>\n  <!-- Capacitor plates -->\n  <!-- Positive plate (top) -->\n  <rect x=\"130\" y=\"25\" width=\"200\" height=\"12\" fill=\"#ef4444\" rx=\"3\"/>\n  <text x=\"230\" y=\"20\" fill=\"#ef4444\" font-size=\"12\" font-weight=\"800\" text-anchor=\"middle\">BẢN CỰC DƯƠNG (+)</text>\n  <!-- Negative plate (bottom) -->\n  <rect x=\"130\" y=\"165\" width=\"200\" height=\"12\" fill=\"#3b82f6\" rx=\"3\"/>\n  <text x=\"230\" y=\"192\" fill=\"#3b82f6\" font-size=\"12\" font-weight=\"800\" text-anchor=\"middle\">BẢN CỰC ÂM (-)</text>\n  <!-- Radiation rays -->\n  <!-- Beta- (curves towards positive plate) -->\n  <path d=\"M 80,105 Q 160,105 240,45\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2.5\"/>\n  <polygon points=\"245,42 233,43 238,51\" fill=\"#f59e0b\"/>\n  <text x=\"255\" y=\"45\" fill=\"#f59e0b\" font-size=\"13\" font-weight=\"800\">Tia β⁻ (lệch nhiều về +)</text>\n  <!-- Gamma (straight line, not deflected) -->\n  <line x1=\"80\" y1=\"105\" x2=\"360\" y2=\"105\" stroke=\"#10b981\" stroke-width=\"2.5\" stroke-dasharray=\"5,2\"/>\n  <polygon points=\"368,105 356,99 356,111\" fill=\"#10b981\"/>\n  <text x=\"375\" y=\"109\" fill=\"#10b981\" font-size=\"13\" font-weight=\"800\">Tia γ (không lệch)</text>\n  <!-- Alpha (curves gently towards negative plate) -->\n  <path d=\"M 80,105 Q 180,105 260,155\" fill=\"none\" stroke=\"#06b6d4\" stroke-width=\"3\"/>\n  <polygon points=\"266,159 254,153 259,161\" fill=\"#06b6d4\"/>\n  <text x=\"275\" y=\"163\" fill=\"#06b6d4\" font-size=\"13\" font-weight=\"800\">Tia α (lệch ít về -)</text>\n</svg>"
    },
    {
      "type": "mcq",
      "q": "Tia phóng xạ nào sau đây có bản chất là sóng điện từ có bước sóng cực ngắn (mang năng lượng photon rất cao và có khả năng đâm xuyên mạnh nhất)?",
      "opts": [
        "Tia gamma (γ).",
        "Tia alpha (α).",
        "Tia bêta trừ (β⁻).",
        "Tia bêta cộng (β⁺)."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Tia gamma (γ)</b> là sóng điện từ có bước sóng cực ngắn (dưới 10⁻¹¹ m), không mang điện tích, đâm xuyên cực kì mạnh (có thể xuyên qua lớp chì dày hàng chục cm)."
    },
    {
      "type": "mcq",
      "q": "Chu kỳ bán rã T của một chất phóng xạ là khoảng thời gian để:",
      "opts": [
        "Một nửa số lượng hạt nhân của chất phóng xạ đó bị phân rã biến đổi thành chất khác.",
        "Toàn bộ khối lượng chất phóng xạ bị tiêu hủy hoàn toàn.",
        "Độ phóng xạ của chất tăng lên gấp đôi.",
        "Khối lượng chất phóng xạ giảm đi <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">4</span></span>."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Định nghĩa chu kỳ bán rã T:</b> Là khoảng thời gian mà sau đó số hạt nhân phóng xạ (hoặc độ phóng xạ) giảm đi <b>một nửa (còn lại 50%)</b>."
    },
    {
      "type": "tf",
      "q": "Xét các tia phóng xạ và định luật phân rã phóng xạ. Mỗi nhận định sau đây là Đúng hay Sai?",
      "stmts": [
        "Tia alpha (α) thực chất là dòng các hạt nhân heli ⁴₂He, có khả năng ion hóa chất khí rất mạnh nhưng khả năng đâm xuyên kém (bị chặn bởi tờ giấy dày).",
        "Tia bêta trừ (β⁻) là dòng các electron (⁰₋₁e) phóng ra từ lớp vỏ electron của nguyên tử.",
        "Hằng số phóng xạ λ liên hệ với chu kỳ bán rã T theo công thức λ = <span class=\"fraction\"><span class=\"numerator\">ln 2</span><span class=\"denominator\">T</span></span> ≈ <span class=\"fraction\"><span class=\"numerator\">0,693</span><span class=\"denominator\">T</span></span>.",
        "Phương pháp định tuổi bằng đồng vị phóng xạ cacbon ¹⁴₆C (chu kỳ bán rã khoảng 5730 năm) được ứng dụng rộng rãi trong khảo cổ học để xác định niên đại cổ vật hữu cơ."
      ],
      "ans": [
        true,
        false,
        true,
        true
      ],
      "correctText": "a) ĐÚNG | b) SAI | c) ĐÚNG | d) ĐÚNG",
      "exp": "• <b>Ý a: ĐÚNG.</b> Bản chất tia alpha.<br>• <b>Ý b: SAI.</b> Tia β⁻ phóng ra <b>từ bên trong hạt nhân</b> do quá trình biến đổi neutron thành proton (<span class=\"math-sym\">n → p + e⁻ + ν_e</span>), không phải từ lớp vỏ electron.<br>• <b>Ý c: ĐÚNG.</b> Công thức <span class=\"math-sym\">λ = <span class=\"fraction\"><span class=\"numerator\">ln 2</span><span class=\"denominator\">T</span></span></span>.<br>• <b>Ý d: ĐÚNG.</b> Ứng dụng định tuổi bằng C-14 trong khảo cổ."
    },
    {
      "type": "match",
      "q": "Hãy ghép các tia phóng xạ ở Cột A với bản chất vật lí chuẩn xác ở Cột B:",
      "colA": [
        "Tia alpha (α)",
        "Tia bêta trừ (β⁻)",
        "Tia bêta cộng (β⁺)",
        "Tia gamma (γ)"
      ],
      "colB": [
        "Sóng điện từ có bước sóng cực ngắn mang năng lượng rất cao.",
        "Dòng các hạt pozitron (electron dương ⁰₁e).",
        "Dòng các hạt nhân heli ⁴₂He mang điện tích +2e.",
        "Dòng các hạt electron thông thường (⁰₋₁e) phóng ra từ hạt nhân."
      ],
      "ans": [
        2,
        3,
        1,
        0
      ],
      "correctText": "1-C, 2-D, 3-B, 4-A",
      "exp": "• 1 ghép với C (Tia α là hạt nhân He).<br>• 2 ghép với D (Tia β⁻ là hạt electron).<br>• 3 ghép với B (Tia β⁺ là hạt pozitron).<br>• 4 ghép với A (Tia γ là photon sóng điện từ)."
    },
    {
      "type": "drag",
      "q": "Điền từ thích hợp vào chỗ trống để làm sáng tỏ quy luật phân rã phóng xạ:",
      "text": "Số hạt nhân phóng xạ còn lại sau thời gian t tuân theo định luật hàm mũ N(t) = N₀ · 2<sup>-<span class=\"fraction\" style=\"font-size:0.75em;\"><span class=\"numerator\">t</span><span class=\"denominator\">T</span></span></sup>. Sau thời gian bằng [0] chu kỳ bán rã thì khối lượng chất phóng xạ còn lại đúng bằng <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">8</span></span> khối lượng ban đầu. Độ phóng xạ H đặc trưng cho số phân rã trong 1 giây, có đơn vị SI là [1] (1 phân rã/giây) hoặc đơn vị truyền thống [2].",
      "words": [
        "3",
        "Becquerel (Bq)",
        "Curie (Ci)",
        "2",
        "Tesla",
        "Weber"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "[0]: 3 | [1]: Becquerel (Bq) | [2]: Curie (Ci)",
      "exp": "• Sau <span class=\"math-sym\">t = 3T</span> thì <span class=\"math-sym\">N = N₀ / 2³ = N₀ / 8</span>. Đơn vị độ phóng xạ là <b>Bq</b> (SI) hoặc <b>Ci</b> (1 Ci = 3,7 · 10¹⁰ Bq)."
    },
    {
      "type": "mcq",
      "q": "Một chất phóng xạ có chu kỳ bán rã là 14 ngày. Ban đầu có 80 mg chất đó. Khối lượng chất phóng xạ còn lại sau 42 ngày là:",
      "opts": [
        "10 mg.",
        "20 mg.",
        "40 mg.",
        "5 mg."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Số chu kỳ bán rã đã trôi qua: <span class=\"math-sym\">k = <span class=\"fraction\"><span class=\"numerator\">t</span><span class=\"denominator\">T</span></span></span> = <span class=\"fraction\"><span class=\"numerator\">42</span><span class=\"denominator\">14</span></span> = 3 chu kỳ.<br>• Khối lượng còn lại: <span class=\"math-sym\">m = <span class=\"fraction\"><span class=\"numerator\">m₀</span><span class=\"denominator\">2³</span></span></span> = <span class=\"fraction\"><span class=\"numerator\">80</span><span class=\"denominator\">8</span></span> = <b>10 mg</b>."
    },
    {
      "type": "mcq",
      "q": "Hạt nhân poloni ²¹⁰₈₄Po phóng xạ alpha và biến đổi thành hạt nhân chì Pb bền vững theo phương trình: ²¹⁰₈₄Po → ⁴₂He + <sup>A</sup><sub>Z</sub>Pb. Kí hiệu của hạt nhân chì sinh ra là:",
      "opts": [
        "²⁰⁶₈₂Pb.",
        "²⁰⁸₈₂Pb.",
        "²¹⁴₈₆Pb.",
        "²⁰⁶₈₀Pb."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Bảo toàn số khối: <span class=\"math-sym\">A</span> = 210 - 4 = 206.<br>• Bảo toàn điện tích: <span class=\"math-sym\">Z</span> = 84 - 2 = 82.<br>• Hạt nhân tạo thành là <b>²⁰⁶₈₂Pb</b>."
    },
    {
      "type": "tf",
      "svgGraph": "<svg viewBox=\"0 0 540 280\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arr23\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#94a3b8\"/>\n    </marker>\n  </defs>\n  <rect width=\"540\" height=\"280\" rx=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"26\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">ĐỒ THỊ ĐỊNH LUẬT PHÂN RÃ PHÓNG XẠ N(t) = N₀ · 2^(-t/T)</text>\n\n  <!-- Hệ trục N theo t -->\n  <line x1=\"60\" y1=\"230\" x2=\"490\" y2=\"230\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr23)\"/>\n  <line x1=\"60\" y1=\"230\" x2=\"60\" y2=\"35\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr23)\"/>\n  <text x=\"475\" y=\"250\" fill=\"#94a3b8\" font-size=\"13\">Thời gian t</text>\n  <text x=\"25\" y=\"45\" fill=\"#38bdf8\" font-size=\"12\">Số hạt N(t)</text>\n  <text x=\"45\" y=\"245\" fill=\"#94a3b8\" font-size=\"12\">0</text>\n\n  <!-- Đường cong hàm mũ phân rã N(t) -->\n  <!-- t=0: N=N0(200); t=T: N=N0/2(100); t=2T: N=N0/4(50); t=3T: N=N0/8(25); t=4T: N=N0/16(12.5) -->\n  <path d=\"M 60,60 C 120,110 160,145 200,145 C 240,145 280,185 300,185 C 340,185 370,210 400,210 C 430,210 460,220 480,222\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"3\"/>\n\n  <!-- Mốc t = 0 -->\n  <text x=\"35\" y=\"65\" fill=\"#f43f5e\" font-size=\"13\" font-weight=\"bold\">N₀</text>\n\n  <!-- Mốc t = T (145 px từ trục hoành = 230 - 85) -->\n  <line x1=\"60\" y1=\"145\" x2=\"160\" y2=\"145\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n  <line x1=\"160\" y1=\"145\" x2=\"160\" y2=\"230\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n  <circle cx=\"160\" cy=\"145\" r=\"5\" fill=\"#f43f5e\"/>\n  <text x=\"20\" y=\"150\" fill=\"#cbd5e1\" font-size=\"12\">N₀/2</text>\n  <text x=\"155\" y=\"248\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">T</text>\n\n  <!-- Mốc t = 2T -->\n  <line x1=\"60\" y1=\"188\" x2=\"260\" y2=\"188\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n  <line x1=\"260\" y1=\"188\" x2=\"260\" y2=\"230\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n  <circle cx=\"260\" cy=\"188\" r=\"5\" fill=\"#f43f5e\"/>\n  <text x=\"20\" y=\"192\" fill=\"#cbd5e1\" font-size=\"12\">N₀/4</text>\n  <text x=\"250\" y=\"248\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">2T</text>\n\n  <!-- Mốc t = 3T -->\n  <line x1=\"60\" y1=\"210\" x2=\"360\" y2=\"210\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n  <line x1=\"360\" y1=\"210\" x2=\"360\" y2=\"230\" stroke=\"#475569\" stroke-width=\"1.2\" stroke-dasharray=\"4,3\"/>\n  <circle cx=\"360\" cy=\"210\" r=\"5\" fill=\"#f43f5e\"/>\n  <text x=\"20\" y=\"214\" fill=\"#cbd5e1\" font-size=\"12\">N₀/8</text>\n  <text x=\"350\" y=\"248\" fill=\"#38bdf8\" font-size=\"12\" font-weight=\"bold\">3T</text>\n\n  <!-- Hộp chú thích chu kỳ bán rã -->\n  <rect x=\"270\" y=\"55\" width=\"220\" height=\"70\" rx=\"8\" fill=\"rgba(30,41,59,0.9)\" stroke=\"#475569\" stroke-width=\"1.2\"/>\n  <text x=\"280\" y=\"78\" fill=\"#fbbf24\" font-size=\"12\" font-weight=\"bold\">• Chu kỳ bán rã T = ln 2 / λ</text>\n  <text x=\"280\" y=\"98\" fill=\"#cbd5e1\" font-size=\"11\">Cứ sau mỗi chu kỳ T, số hạt nhân</text>\n  <text x=\"280\" y=\"114\" fill=\"#f43f5e\" font-size=\"11\" font-weight=\"bold\">mẹ giảm đi một nửa (còn lại 50%).</text>\n</svg>",
      "q": "Quan sát đồ thị hàm mũ phân rã phóng xạ N(t) theo chu kỳ bán rã T hình bên. Đánh giá tính Đúng/Sai của các mệnh đề sau:",
      "stmts": [
        "Tại thời điểm t = T, số hạt nhân mẹ chưa bị phân rã chiếm 50% số hạt ban đầu N₀.",
        "Tại thời điểm t = 2T, số hạt nhân con mới sinh ra chiếm 75% tổng số hạt ban đầu.",
        "Đồ thị phân rã tiệm cận tới trục hoành, chứng tỏ về mặt lí thuyết sau thời gian vô cùng lớn chất phóng xạ mới phân rã hết hoàn toàn.",
        "Nếu tăng nhiệt độ của mẫu phóng xạ lên 1000°C thì chu kỳ bán rã T sẽ bị rút ngắn đi một nửa."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) ĐÚNG | d) SAI",
      "exp": "• <b>Ý a: ĐÚNG.</b> Sau 1 chu kỳ còn 50% hạt mẹ.<br>• <b>Ý b: ĐÚNG.</b> Sau 2 chu kỳ còn 25% hạt mẹ ⇒ đã phân rã tạo thành 75% hạt con.<br>• <b>Ý c: ĐÚNG.</b> Hàm <span class=\"math-sym\">e^(-λt)</span> tiệm cận 0 khi <span class=\"math-sym\">t → ∞</span>.<br>• <b>Ý d: SAI.</b> Phóng xạ là hiện tượng tự phát từ bên trong hạt nhân, hoàn toàn không phụ thuộc nhiệt độ hay áp suất."
    },
    {
      "type": "mcq",
      "q": "Một mẫu gỗ cổ khai quật từ một di chỉ khảo cổ học có độ phóng xạ của đồng vị ¹⁴₆C bằng 25% độ phóng xạ của mẫu gỗ tươi cùng loại cùng khối lượng. Biết chu kỳ bán rã của ¹⁴C là 5730 năm. Tuổi của mẫu gỗ cổ đó là:",
      "opts": [
        "11460 năm.",
        "5730 năm.",
        "17190 năm.",
        "22920 năm."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <span class=\"math-sym\"><span class=\"fraction\"><span class=\"numerator\">H(t)</span><span class=\"denominator\">H₀</span></span></span> = 25% = <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">4</span></span> = <span class=\"math-sym\">2⁻² ⇒ t / T</span> = 2.<br>• Tuổi mẫu gỗ: <span class=\"math-sym\">t = 2T</span> = 2 × 5730 = <b>11460 năm</b>."
    }
  ],
  "24": [
    {
      "type": "mcq",
      "q": "Phản ứng phân hạch hạt nhân là quá trình:",
      "opts": [
        "Một hạt nhân nặng hấp thụ một neutron chậm rồi vỡ thành hai hạt nhân nhẹ hơn và giải phóng thêm các neutron thứ cấp kèm năng lượng lớn.",
        "Hai hạt nhân nhẹ kết hợp lại với nhau thành hạt nhân nặng hơn ở nhiệt độ hàng trăm triệu độ.",
        "Hạt nhân tự phát phóng ra các tia alpha để trở nên bền vững hơn.",
        "Hạt nhân hấp thụ photon gamma để biến đổi điện tích."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Định nghĩa phản ứng phân hạch:</b> Là phản ứng trong đó một <b>hạt nhân rất nặng</b> (như ²³⁵U, ²³⁹Pu) hấp thụ một neutron nhiệt (chậm), kích hoạt vỡ thành 2 mảnh nhẹ hơn và kèm theo 2 đến 3 neutron mới."
    },
    {
      "type": "mcq",
      "q": "Để duy trì phản ứng phân hạch dây chuyền tự kiểm soát được và ổn định trong lò phản ứng của nhà máy điện hạt nhân, hệ số nhân neutron k phải được duy trì ở giá trị:",
      "opts": [
        "k = 1 (trạng thái tới hạn).",
        "k > 1 (trạng thái trên tới hạn).",
        "k < 1 (trạng thái dưới tới hạn).",
        "k = 0."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Các chế độ phản ứng dây chuyền:</b><br>• <span class=\"math-sym\">k = 1</span>: Số neutron sinh ra trung bình bằng số neutron tiêu hao, phản ứng diễn ra <b>ổn định và kiểm soát được</b> trong lò phản ứng điện hạt nhân.<br>• <span class=\"math-sym\">k > 1</span>: Bùng nổ mãnh liệt (bom nguyên tử).<br>• <span class=\"math-sym\">k < 1</span>: Phản ứng tự tắt."
    },
    {
      "type": "mcq",
      "q": "Phản ứng nhiệt hạch là phản ứng tổng hợp hai hạt nhân rất nhẹ thành hạt nhân nặng hơn. Điều kiện cốt lõi để phản ứng nhiệt hạch có thể xảy ra trong thực tế là:",
      "opts": [
        "Nhiệt độ phải cực kì cao (hàng chục đến hàng trăm triệu độ) để các hạt nhân có động năng đủ lớn thắng được lực đẩy tĩnh điện Coulomb.",
        "Nhiệt độ phải hạ xuống gần độ không tuyệt đối 0 K.",
        "Phải có từ trường ngoài cực mạnh hướng dọc trục lò phản ứng.",
        "Phải dùng tia laser công suất thấp chiếu liên tục nhiều năm."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Để hai hạt nhân tích điện dương thắng được lực đẩy tĩnh điện và tiến vào khoảng cách <span class=\"math-sym\">10⁻¹⁵</span> m (tầm tác dụng của lực hạt nhân), chúng cần động năng nhiệt cực lớn, tương ứng nhiệt độ <b>hàng trăm triệu Kelvin</b>."
    },
    {
      "type": "tf",
      "q": "Xét ưu điểm và an toàn năng lượng hạt nhân. Mỗi nhận định sau đây là Đúng hay Sai?",
      "stmts": [
        "Năng lượng nhiệt hạch là nguồn năng lượng sạch, nguồn nhiên liệu hiđrô gần như vô tận trong nước biển và không tạo ra chất thải phóng xạ nguy hại lâu dài.",
        "Trong lò phản ứng hạt nhân, các thanh điều khiển làm bằng chất hấp thụ neutron mạnh (như Bo hoặc Cadimi) được dùng để điều chỉnh hệ số k.",
        "Năng lượng tỏa ra từ Mặt Trời và các ngôi sao trong vũ trụ có nguồn gốc chủ yếu từ các phản ứng phân hạch dây chuyền của urani.",
        "Chất làm chậm (như nước nặng D₂O hoặc than chì) trong lò phản ứng có tác dụng giảm tốc độ của neutron nhanh thành neutron nhiệt."
      ],
      "ans": [
        true,
        true,
        false,
        true
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) SAI | d) ĐÚNG",
      "exp": "• <b>Ý a: ĐÚNG.</b> Nhiệt hạch là nguồn năng lượng tương lai sạch và dồi dào.<br>• <b>Ý b: ĐÚNG.</b> Thanh Bo / Cd hấp thụ neutron để kiểm soát tốc độ phản ứng.<br>• <b>Ý c: SAI.</b> Năng lượng Mặt Trời có nguồn gốc từ <b>phản ứng nhiệt hạch</b> (tổng hợp hiđrô thành heli), không phải phân hạch urani.<br>• <b>Ý d: ĐÚNG.</b> Neutron nhiệt dễ bị hấp thụ bởi ²³⁵U hơn neutron nhanh."
    },
    {
      "type": "match",
      "q": "Hãy ghép thuật ngữ/bộ phận ở Cột A với chức năng tương ứng trong công nghệ hạt nhân ở Cột B:",
      "colA": [
        "Chất làm chậm (nước nặng, than chì)",
        "Thanh điều khiển (Bo, Cadimi)",
        "Vỏ bọc an toàn bê tông cốt thép",
        "Vòng tuần hoàn chất tải nhiệt"
      ],
      "colB": [
        "Hấp thụ các neutron dư thừa để khống chế hệ số nhân neutron k = 1.",
        "Làm giảm động năng của neutron nhanh thành neutron nhiệt dễ gây phân hạch.",
        "Ngăn chặn phóng xạ rò rỉ và bảo vệ lò phản ứng trước tác động từ bên ngoài.",
        "Truyền nhiệt từ vùng lõi phản ứng ra máy sinh hơi để quay tuabin máy phát điện."
      ],
      "ans": [
        1,
        0,
        2,
        3
      ],
      "correctText": "1-B, 2-A, 3-C, 4-D",
      "exp": "• 1 ghép với B (Chất làm chậm giảm tốc neutron).<br>• 2 ghép với A (Thanh điều khiển hấp thụ neutron).<br>• 3 ghép với C (Vỏ bê tông chắn bức xạ).<br>• 4 ghép với D (Chất tải nhiệt truyền nhiệt quay tuabin)."
    },
    {
      "type": "drag",
      "q": "Điền từ thích hợp vào chỗ trống để hoàn thiện khái niệm về năng lượng phân hạch:",
      "text": "Mỗi phân hạch hạt nhân ²³⁵U tỏa ra năng lượng khổng lồ khoảng [0] MeV. Khối lượng nhiên liệu tối thiểu để phản ứng phân hạch dây chuyền có thể duy trì tự phát được gọi là [1]. Nếu khối lượng nhỏ hơn mức này thì phần lớn neutron sẽ [2] ra ngoài không gian trước khi kịp gây phân hạch tiếp theo.",
      "words": [
        "200",
        "khối lượng tới hạn",
        "thoát",
        "2",
        "khối lượng nghỉ",
        "hấp thụ"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "[0]: 200 | [1]: khối lượng tới hạn | [2]: thoát",
      "exp": "• Mỗi phân hạch toả ~<b>200</b> MeV. Khối lượng tối thiểu là <b>khối lượng tới hạn</b>, nếu nhỏ hơn neutron sẽ <b>thoát</b> ra ngoài."
    },
    {
      "type": "mcq",
      "q": "Biết mỗi phân hạch hạt nhân ²³⁵U tỏa ra năng lượng trung bình là 200 MeV. Cho số Avogadro NA = 6,022 · 10²³ mol⁻¹ và 1 eV = 1,6 · 10⁻¹⁹ J. Năng lượng tỏa ra khi phân hạch hoàn toàn 1,0 kg ²³⁵U xấp xỉ bằng:",
      "opts": [
        "8,2 · 10¹³ J (tương đương đốt cháy hàng ngàn tấn than đá).",
        "2,5 · 10⁸ J.",
        "5,1 · 10¹⁰ J.",
        "1,6 · 10¹⁵ J."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Số hạt nhân trong 1 kg: <span class=\"math-sym\">N</span> = (<span class=\"fraction\"><span class=\"numerator\">1000</span><span class=\"denominator\">235</span></span>) × 6,022 · 10²³ ≈ 2,56 · 10²⁴ hạt.<br>• Năng lượng tỏa ra: <span class=\"math-sym\">E</span> = 2,56 · 10²⁴ × 200 × 10⁶ × 1,6 · 10⁻¹⁹ ≈ <b>8,2 · 10¹³ J</b>."
    },
    {
      "type": "mcq",
      "q": "Ưu thế vượt trội lớn nhất của việc phát triển điện hạt nhân so với các nhà máy nhiệt điện đốt nhiên liệu hóa thạch truyền thống (than đá, dầu khí) là:",
      "opts": [
        "Mật độ năng lượng cực kì cao và không phát thải khí nhà kính (CO₂) gây biến đổi khí hậu trong quá trình vận hành.",
        "Chi phí xây dựng ban đầu của nhà máy điện hạt nhân rẻ hơn rất nhiều.",
        "Không bao giờ sinh ra chất thải sau quá trình sản xuất điện.",
        "Có thể xây dựng ở bất kì vị trí nào mà không cần nguồn nước làm mát."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Ưu điểm cốt lõi của điện hạt nhân:</b> Năng lượng hạt nhân có mật độ năng lượng siêu đậm đặc, vận hành liên tục ổn định (công suất nền) và <b>không phát thải khí CO₂ hay SO₂</b> gây ô nhiễm không khí."
    },
    {
      "type": "tf",
      "svgGraph": "<svg viewBox=\"0 0 540 280\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <radialGradient id=\"u235\" cx=\"35%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#f59e0b\"/>\n      <stop offset=\"100%\" stop-color=\"#b45309\"/>\n    </radialGradient>\n    <radialGradient id=\"fissionProd\" cx=\"35%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#06b6d4\"/>\n      <stop offset=\"100%\" stop-color=\"#0e7490\"/>\n    </radialGradient>\n    <radialGradient id=\"neutronG\" cx=\"35%\" cy=\"35%\" r=\"65%\">\n      <stop offset=\"0%\" stop-color=\"#e2e8f0\"/>\n      <stop offset=\"100%\" stop-color=\"#64748b\"/>\n    </radialGradient>\n  </defs>\n  <rect width=\"540\" height=\"280\" rx=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"26\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">SƠ ĐỒ PHẢN ỨNG PHÂN HẠCH DÂY CHUYỀN (URANI ²³⁵U)</text>\n\n  <!-- Neutron ban đầu bắn vào -->\n  <circle cx=\"45\" cy=\"140\" r=\"8\" fill=\"url(#neutronG)\"/>\n  <text x=\"45\" y=\"144\" fill=\"#0f172a\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">n</text>\n  <line x1=\"55\" y1=\"140\" x2=\"105\" y2=\"140\" stroke=\"#f8fafc\" stroke-width=\"2\"/>\n\n  <!-- Hạt nhân U-235 thế hệ 1 -->\n  <circle cx=\"135\" cy=\"140\" r=\"26\" fill=\"url(#u235)\" stroke=\"#fbbf24\" stroke-width=\"2\"/>\n  <text x=\"135\" y=\"145\" fill=\"#f8fafc\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">²³⁵U</text>\n\n  <!-- Hai mảnh phân hạch thế hệ 1 -->\n  <line x1=\"155\" y1=\"125\" x2=\"210\" y2=\"90\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n  <circle cx=\"230\" cy=\"80\" r=\"18\" fill=\"url(#fissionProd)\"/>\n  <text x=\"230\" y=\"85\" fill=\"#f8fafc\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Ba</text>\n\n  <line x1=\"155\" y1=\"155\" x2=\"210\" y2=\"190\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n  <circle cx=\"230\" cy=\"200\" r=\"18\" fill=\"url(#fissionProd)\"/>\n  <text x=\"230\" y=\"205\" fill=\"#f8fafc\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">Kr</text>\n\n  <!-- 3 neutron thứ cấp phóng ra -->\n  <line x1=\"160\" y1=\"135\" x2=\"310\" y2=\"115\" stroke=\"#facc15\" stroke-width=\"1.8\" stroke-dasharray=\"4,2\"/>\n  <circle cx=\"315\" cy=\"115\" r=\"7\" fill=\"url(#neutronG)\"/>\n  <text x=\"315\" y=\"118\" fill=\"#0f172a\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">n</text>\n\n  <line x1=\"160\" y1=\"140\" x2=\"310\" y2=\"140\" stroke=\"#facc15\" stroke-width=\"1.8\" stroke-dasharray=\"4,2\"/>\n  <circle cx=\"315\" cy=\"140\" r=\"7\" fill=\"url(#neutronG)\"/>\n  <text x=\"315\" y=\"143\" fill=\"#0f172a\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">n</text>\n\n  <line x1=\"160\" y1=\"145\" x2=\"310\" y2=\"165\" stroke=\"#facc15\" stroke-width=\"1.8\" stroke-dasharray=\"4,2\"/>\n  <circle cx=\"315\" cy=\"165\" r=\"7\" fill=\"url(#neutronG)\"/>\n  <text x=\"315\" y=\"168\" fill=\"#0f172a\" font-size=\"8\" font-weight=\"bold\" text-anchor=\"middle\">n</text>\n\n  <!-- Hạt nhân U-235 thế hệ 2 tiếp tục bị kích hoạt -->\n  <circle cx=\"410\" cy=\"100\" r=\"22\" fill=\"url(#u235)\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n  <text x=\"410\" y=\"104\" fill=\"#f8fafc\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">²³⁵U</text>\n\n  <circle cx=\"410\" cy=\"180\" r=\"22\" fill=\"url(#u235)\" stroke=\"#fbbf24\" stroke-width=\"1.5\"/>\n  <text x=\"410\" y=\"184\" fill=\"#f8fafc\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\">²³⁵U</text>\n\n  <!-- Chú thích chân -->\n  <rect x=\"70\" y=\"235\" width=\"400\" height=\"35\" rx=\"6\" fill=\"rgba(30,41,59,0.85)\" stroke=\"#475569\" stroke-width=\"1\"/>\n  <text x=\"270\" y=\"257\" fill=\"#facc15\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Hệ số nhân neutron: k = 1 (Lò phản ứng hạt nhân) • k &gt; 1 (Vụ nổ hạt nhân)</text>\n</svg>",
      "q": "Quan sát sơ đồ chuỗi phản ứng phân hạch dây chuyền hình bên. Đánh giá tính Đúng/Sai của các mệnh đề sau:",
      "stmts": [
        "Neutron kích hoạt ban đầu phải là neutron chậm để hạt nhân ²³⁵U dễ hấp thụ.",
        "Mỗi lần phân hạch giải phóng trung bình 2 đến 3 neutron mới.",
        "Nếu không có biện pháp hấp thụ bớt neutron thì số lượng phân hạch sẽ tăng theo cấp số nhân dẫn đến vụ nổ hạt nhân.",
        "Hai hạt nhân sản phẩm phân hạch (như Ba và Kr) là các hạt nhân hoàn toàn bền vững và không có tính phóng xạ."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) ĐÚNG | d) SAI",
      "exp": "• <b>Ý a: ĐÚNG.</b> Cần neutron chậm (nhiệt).<br>• <b>Ý b: ĐÚNG.</b> Số neutron trung bình sinh ra là 2,5 hạt.<br>• <b>Ý c: ĐÚNG.</b> Đây là nguyên lí của bom nguyên tử (<span class=\"math-sym\">k > 1</span>).<br>• <b>Ý d: SAI.</b> Các mảnh phân hạch thường thừa neutron và là các đồng vị phóng xạ phát ra tia beta và gamma (chất thải phóng xạ)."
    },
    {
      "type": "mcq",
      "q": "Đồng vị phóng xạ Co-60 (Coban-60) được ứng dụng rộng rãi trong y tế chủ yếu để:",
      "opts": [
        "Xạ trị tiêu diệt tế bào ung thư bằng chùm tia gamma.",
        "Chụp ảnh cắt lớp phổi bằng sóng siêu âm.",
        "Làm nguồn phát quang cho đèn tín hiệu giao thông.",
        "Khử trùng nguồn nước sinh hoạt bằng nhiệt độ cao."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Đồng vị <b>⁶⁰₂₇Co</b> phát ra tia gamma năng lượng cao dùng trong máy xạ trị điều trị ung thư."
    }
  ],
  "25": [
    {
      "type": "mcq",
      "q": "Tỉ số giữa số hạt nhân con tạo thành N<sub>con</sub> và số hạt nhân mẹ còn lại N<sub>m</sub>ẹ tại thời điểm t trong một phân rã phóng xạ tuân theo hệ thức:",
      "opts": [
        "<span class=\"fraction\"><span class=\"numerator\">N<sub>con</sub></span><span class=\"denominator\">N<sub>mẹ</sub></span></span> = 2<sup><span class=\"fraction\" style=\"font-size:0.75em;\"><span class=\"numerator\">t</span><span class=\"denominator\">T</span></span></sup> - 1.",
        "<span class=\"fraction\"><span class=\"numerator\">N<sub>con</sub></span><span class=\"denominator\">N<sub>mẹ</sub></span></span> = 2<sup>-<span class=\"fraction\" style=\"font-size:0.75em;\"><span class=\"numerator\">t</span><span class=\"denominator\">T</span></span></sup>.",
        "<span class=\"fraction\"><span class=\"numerator\">N<sub>con</sub></span><span class=\"denominator\">N<sub>mẹ</sub></span></span> = 1 - 2<sup>-<span class=\"fraction\" style=\"font-size:0.75em;\"><span class=\"numerator\">t</span><span class=\"denominator\">T</span></span></sup>.",
        "<span class=\"fraction\"><span class=\"numerator\">N<sub>con</sub></span><span class=\"denominator\">N<sub>mẹ</sub></span></span> = 2<sup><span class=\"fraction\" style=\"font-size:0.75em;\"><span class=\"numerator\">t</span><span class=\"denominator\">T</span></span></sup> + 1."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Số hạt con tạo thành bằng số hạt mẹ đã phân rã: <span class=\"math-sym\">N</span><sub>con</sub> = <span class=\"math-sym\">ΔN = N</span><sub>0</sub>(1 - <span class=\"math-sym\">2⁻ᵗ/ᵀ</span>).<br>• Số hạt mẹ còn lại: <span class=\"math-sym\">N</span><sub>mẹ</sub> = <span class=\"math-sym\">N</span><sub>0</sub> · <span class=\"math-sym\">2⁻ᵗ/ᵀ</span>.<br>• Tỉ số: <span class=\"fraction\"><span class=\"numerator\">N<sub>con</sub></span><span class=\"denominator\">N<sub>m</sub>ẹ</span></span> = <span class=\"fraction\"><span class=\"numerator\">1 - 2⁻ᵗ/ᵀ</span><span class=\"denominator\">2⁻ᵗ/ᵀ</span></span> = <b>2ᵗ/ᵀ - 1</b>."
    },
    {
      "type": "mcq",
      "q": "Tại thời điểm t = 2T (sau 2 chu kỳ bán rã), tỉ số giữa số hạt nhân con tạo thành và số hạt nhân mẹ còn lại là:",
      "opts": [
        "3.",
        "2.",
        "4.",
        "<span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">3</span></span>."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Áp dụng công thức: <span class=\"math-sym\">N</span><sub>con</sub> / <span class=\"math-sym\">N</span><sub>mẹ</sub> = <span class=\"math-sym\">2² - 1 = 4 - 1</span> = <b>3</b> (số hạt con gấp 3 lần số hạt mẹ)."
    },
    {
      "type": "mcq",
      "q": "Phương pháp 'nguyên tử đánh dấu' (radioactive tracer) ứng dụng phổ biến trong y tế chẩn đoán và khảo sát nông nghiệp dựa trên nguyên lí vật lí nào sau đây?",
      "opts": [
        "Đưa lượng nhỏ đồng vị phóng xạ vào hệ thống và dùng thiết bị dò bức xạ theo dõi đường đi và sự tích tụ của nguyên tố đó.",
        "Chiếu chùm tia gamma cường độ mạnh để biến đổi toàn bộ cấu trúc di truyền của sinh vật.",
        "Kích thích phản ứng nhiệt hạch mini bên trong các cơ quan nội tạng để tiêu diệt mầm bệnh.",
        "Đo vận tốc truyền sóng ánh sáng khả kiến qua tế bào sinh học để xác định nồng độ khoáng chất."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Kĩ thuật nguyên tử đánh dấu:</b> Đồng vị phóng xạ có tính chất hóa học giống hệt đồng vị bền của cùng nguyên tố nên tham gia vào các quá trình sinh hóa tự nhiên của cơ thể hoặc hệ thống ống dẫn.<br>• Trong quá trình di chuyển, chúng liên tục phát ra tia bức xạ (như tia γ). Thiết bị dò bức xạ bên ngoài có thể theo dõi chính xác dòng chảy của máu, phát hiện các vị trí tắc mạch, đánh giá chức năng tuyến giáp (dùng ¹³¹I), hoặc phát hiện các điểm rò rỉ ngầm dưới lòng đất."
    },
    {
      "type": "tf",
      "q": "Xét các bài toán cân bằng và bảo toàn trong phản ứng hạt nhân. Mỗi khẳng định sau là Đúng hay Sai?",
      "stmts": [
        "Trong phản ứng hạt nhân tỏa năng lượng, tổng động năng của các hạt sinh ra sau phản ứng luôn lớn hơn tổng động năng của các hạt ban đầu trước phản ứng.",
        "Nếu một hạt nhân mẹ đứng yên phóng xạ tạo thành hai hạt mới thì hai hạt sinh ra sẽ chuyển động cùng chiều với cùng độ lớn động lượng.",
        "Trong phản ứng hạt nhân thu năng lượng, tổng khối lượng nghỉ của các hạt sau phản ứng lớn hơn tổng khối lượng nghỉ trước phản ứng.",
        "Định luật phóng xạ là định luật mang tính thống kê, chỉ nghiệm đúng khi xét số lượng rất lớn các nguyên tử hạt nhân."
      ],
      "ans": [
        true,
        false,
        true,
        true
      ],
      "correctText": "a) ĐÚNG | b) SAI | c) ĐÚNG | d) ĐÚNG",
      "exp": "• <b>Ý a: ĐÚNG.</b> Năng lượng tỏa ra chuyển thành động năng hạt sản phẩm: <span class=\"math-sym\">K</span><sub>sau</sub> - <span class=\"math-sym\">K</span><sub>trước</sub> = Δ<span class=\"math-sym\">E > 0</span>.<br>• <b>Ý b: SAI.</b> Vì ban đầu đứng yên nên <span class=\"math-sym\">p<sub>m</sub>ẹ = 0 ⇒ p₁ + p₂ = 0 ⇒ p₁ = -p₂</span> (hai hạt phải chuyển động <b>ngược chiều nhau</b>).<br>• <b>Ý c: ĐÚNG.</b> Thu năng lượng thì khối lượng nghỉ tăng lên: <span class=\"math-sym\">m</span><sub>sau</sub> > <span class=\"math-sym\">m</span><sub>trước</sub>.<br>• <b>Ý d: ĐÚNG.</b> Bản chất ngẫu nhiên thống kê."
    },
    {
      "type": "match",
      "q": "Hãy ghép dạng bài toán hạt nhân ở Cột A với phương trình cơ sở tương ứng ở Cột B:",
      "colA": [
        "Năng lượng phản ứng hạt nhân theo độ hụt khối",
        "Tỉ số hạt con và hạt mẹ",
        "Bảo toàn động lượng khi hạt nhân mẹ đứng yên",
        "Bảo toàn số nucleon"
      ],
      "colB": [
        "p₁ = -p₂ (véc-tơ động lượng đối nhau)",
        "A₁ + A₂ = A₃ + A₄",
        "ΔE = (Δmsau - Δmtrước) · c²",
        "<span class=\"fraction\"><span class=\"numerator\">N<sub>con</sub></span><span class=\"denominator\">N<sub>mẹ</sub></span></span> = 2<sup><span class=\"fraction\" style=\"font-size:0.75em;\"><span class=\"numerator\">t</span><span class=\"denominator\">T</span></span></sup> - 1"
      ],
      "ans": [
        2,
        3,
        0,
        1
      ],
      "correctText": "1-C, 2-D, 3-A, 4-B",
      "exp": "• 1 ghép với C (Năng lượng theo độ hụt khối sau - trước).<br>• 2 ghép với D (Tỉ số con / mẹ).<br>• 3 ghép với A (Bảo toàn động lượng đứng yên).<br>• 4 ghép với B (Bảo toàn số khối A)."
    },
    {
      "type": "drag",
      "q": "Chọn từ thích hợp điền vào chỗ trống để hoàn thiện bài toán động lượng phân rã:",
      "text": "Một hạt nhân mẹ ban đầu đứng yên phóng xạ hạt alpha. Theo định luật bảo toàn động lượng, hạt nhân con và hạt alpha sẽ bay ra theo hai hướng [0]. Tỉ số động năng của hạt alpha so với hạt nhân con [1] với tỉ số khối lượng của chúng, do đó hạt alpha nhẹ hơn sẽ nhận phần lớn [2] của phản ứng.",
      "words": [
        "ngược chiều nhau",
        "tỉ lệ nghịch",
        "động năng",
        "cùng chiều nhau",
        "tỉ lệ thuận",
        "khối lượng"
      ],
      "ans": [
        0,
        1,
        2
      ],
      "correctText": "[0]: ngược chiều nhau | [1]: tỉ lệ nghịch | [2]: động năng",
      "exp": "• Hai hạt bay <b>ngược chiều nhau</b>; động lượng bằng nhau <span class=\"math-sym\">p_α = p<sub>c</sub> ⇒ K = p² / 2m</span> tỉ lệ <b>nghịch</b> với khối lượng; hạt α nhẹ hơn chiếm hầu hết <b>động năng</b>."
    },
    {
      "type": "mcq",
      "q": "Một hạt nhân ²¹⁰₈₄Po đứng yên phân rã alpha thành hạt nhân chì ²⁰⁶₈₂Pb. Cho khối lượng các hạt xấp xỉ bằng số khối: m_α = 4 u; m<sub>Pb</sub> = 206 u. Phản ứng tỏa ra năng lượng ΔE = 5,4 MeV. Động năng của hạt alpha sinh ra là:",
      "opts": [
        "5,3 MeV.",
        "5,1 MeV.",
        "4,8 MeV.",
        "2,7 MeV."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• Bảo toàn động lượng: <span class=\"math-sym\"><span class=\"fraction\"><span class=\"numerator\">K_α</span><span class=\"denominator\">K<sub>Pb</sub></span></span> = <span class=\"fraction\"><span class=\"numerator\">m<sub>Pb</sub></span><span class=\"denominator\">m_α</span></span></span> = <span class=\"fraction\"><span class=\"numerator\">206</span><span class=\"denominator\">4</span></span> = 51,5.<br>• <span class=\"math-sym\">K_α = ΔE</span> × <span class=\"fraction\"><span class=\"numerator\">m<sub>Pb</sub></span><span class=\"denominator\">m<sub>Pb</sub> + m_α</span></span> = 5,4 × (<span class=\"fraction\"><span class=\"numerator\">206</span><span class=\"denominator\">210</span></span>) ≈ <b>5,3 MeV</b>."
    },
    {
      "type": "mcq",
      "q": "Các nhà địa chất và thiên văn học xác định tuổi của các mẫu đất đá trên Mặt Trăng do tàu Apollo mang về là khoảng 4,5 tỉ năm dựa trên phương pháp định tuổi bằng tỉ số phóng xạ nào?",
      "opts": [
        "Tỉ số giữa số hạt chì con ²⁰⁶₈₂Pb tạo thành và số hạt urani mẹ ²³⁸₉₂U còn lại trong mẫu đá.",
        "Tỉ số giữa đồng vị carbon phóng xạ ¹⁴₆C và đồng vị carbon bền ¹²₆C.",
        "Tỉ số giữa lượng khí heli và lượng khí hydrogen thoát ra khi nung chảy mẫu đá.",
        "Tỉ số giữa khối lượng của mẫu đá so với khối lượng toàn bộ vỏ Mặt Trăng."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Định tuổi địa chất U - Pb:</b> Chuỗi phân rã của đồng vị ²³⁸₉₂U chuyển hóa thành đồng vị bền ²⁰⁶₈₂Pb có chu kì bán rã rất lớn T ≈ 4,47 · 10⁹ năm (xấp xỉ tuổi của Trái Đất và hệ Mặt Trời).<br>• Tỉ số số hạt: <span class=\"fraction\"><span class=\"numerator\">N<sub>Pb</sub></span><span class=\"denominator\">N<sub>U</sub></span></span> = 2<sup><span class=\"fraction\" style=\"font-size:0.75em;\"><span class=\"numerator\">t</span><span class=\"denominator\">T</span></span></sup> - 1. Bằng cách đo tỉ số này trong các tinh thể zircon của mẫu đá, các nhà khoa học tính chính xác tuổi t của đá Mặt Trăng là khoảng 4,5 tỉ năm (trong khi phương pháp ¹⁴C chỉ đo được cổ vật dưới 50.000 năm do T<sub>C14</sub> ≈ 5730 năm)."
    },
    {
      "type": "tf",
      "svgGraph": "<svg viewBox=\"0 0 540 280\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arr25\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#94a3b8\"/>\n    </marker>\n  </defs>\n  <rect width=\"540\" height=\"280\" rx=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n  <text x=\"270\" y=\"26\" fill=\"#38bdf8\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\">ĐỒ THỊ SỰ BIẾN THIÊN SỐ HẠT MẸ N(t) &amp; SỐ HẠT CON Ncon(t)</text>\n\n  <!-- Trục tọa độ -->\n  <line x1=\"60\" y1=\"230\" x2=\"490\" y2=\"230\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr25)\"/>\n  <line x1=\"60\" y1=\"230\" x2=\"60\" y2=\"35\" stroke=\"#94a3b8\" stroke-width=\"2\" marker-end=\"url(#arr25)\"/>\n  <text x=\"475\" y=\"250\" fill=\"#94a3b8\" font-size=\"13\">Thời gian t</text>\n  <text x=\"25\" y=\"45\" fill=\"#38bdf8\" font-size=\"12\">Số hạt</text>\n  <text x=\"45\" y=\"245\" fill=\"#94a3b8\" font-size=\"12\">0</text>\n\n  <!-- Mốc N0 -->\n  <line x1=\"60\" y1=\"60\" x2=\"470\" y2=\"60\" stroke=\"#475569\" stroke-width=\"1\" stroke-dasharray=\"4,4\"/>\n  <text x=\"35\" y=\"65\" fill=\"#38bdf8\" font-size=\"13\" font-weight=\"bold\">N₀</text>\n\n  <!-- Mốc N0/2 -->\n  <line x1=\"60\" y1=\"145\" x2=\"470\" y2=\"145\" stroke=\"#475569\" stroke-width=\"1\" stroke-dasharray=\"4,4\"/>\n  <text x=\"20\" y=\"150\" fill=\"#cbd5e1\" font-size=\"12\">N₀/2</text>\n\n  <!-- Đường hạt mẹ N(t) màu đỏ: giảm dần -->\n  <path d=\"M 60,60 C 130,110 180,145 220,145 C 270,145 320,190 380,210 C 420,218 450,225 470,226\" fill=\"none\" stroke=\"#f43f5e\" stroke-width=\"3\"/>\n  <text x=\"410\" y=\"200\" fill=\"#f43f5e\" font-size=\"12\" font-weight=\"bold\">Hạt mẹ N(t)</text>\n\n  <!-- Đường hạt con N<tspan baseline-shift=\"sub\" font-size=\"70%\">con</tspan>(t) màu xanh: tăng dần -->\n  <path d=\"M 60,230 C 130,180 180,145 220,145 C 270,145 320,100 380,80 C 420,72 450,65 470,64\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"3\"/>\n  <text x=\"410\" y=\"95\" fill=\"#10b981\" font-size=\"12\" font-weight=\"bold\">Hạt con Ncon(t)</text>\n\n  <!-- Điểm giao nhau tại t = T: N<tspan baseline-shift=\"sub\" font-size=\"70%\">me</tspan> = N<tspan baseline-shift=\"sub\" font-size=\"70%\">con</tspan> = N0 / 2 -->\n  <circle cx=\"220\" cy=\"145\" r=\"6\" fill=\"#fbbf24\"/>\n  <line x1=\"220\" y1=\"145\" x2=\"220\" y2=\"230\" stroke=\"#fbbf24\" stroke-width=\"1.5\" stroke-dasharray=\"4,3\"/>\n  <text x=\"215\" y=\"248\" fill=\"#fbbf24\" font-size=\"13\" font-weight=\"bold\">t = T</text>\n\n  <!-- Chú thích công thức -->\n  <text x=\"270\" y=\"268\" fill=\"#facc15\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">Tại t = T: N<tspan baseline-shift=\"sub\" font-size=\"70%\">con</tspan> = N<tspan baseline-shift=\"sub\" font-size=\"70%\">mẹ</tspan> = N₀/2 • Tỉ số N<tspan baseline-shift=\"sub\" font-size=\"70%\">con</tspan> / N<tspan baseline-shift=\"sub\" font-size=\"70%\">mẹ</tspan> = 2^(t/T) - 1</text>\n</svg>",
      "q": "Quan sát đồ thị biến thiên của số hạt mẹ N(t) và số hạt con N<sub>con</sub>(t) theo thời gian hình bên. Đánh giá tính Đúng/Sai của các mệnh đề sau:",
      "stmts": [
        "Tại thời điểm t = T (giao điểm của hai đường cong), số hạt nhân mẹ còn lại đúng bằng số hạt nhân con tạo thành.",
        "Tổng số hạt nhân mẹ còn lại và số hạt nhân con tạo thành ở bất kì thời điểm nào luôn bằng số hạt nhân mẹ ban đầu N₀.",
        "Sau thời gian t = 3T, số hạt con tạo thành chiếm 87,5% tổng số hạt ban đầu.",
        "Độ dốc của đường tăng trưởng số hạt con ngày càng tăng dần theo thời gian."
      ],
      "ans": [
        true,
        true,
        true,
        false
      ],
      "correctText": "a) ĐÚNG | b) ĐÚNG | c) ĐÚNG | d) SAI",
      "exp": "• <b>Ý a: ĐÚNG.</b> Tại t = T thì <span class=\"math-sym\">N<sub>m</sub>ẹ = N<sub>con</sub> = N₀/2</span>.<br>• <b>Ý b: ĐÚNG.</b> Định luật bảo toàn: mỗi hạt mẹ phân rã sinh ra 1 hạt con ⇒ <span class=\"math-sym\">N<sub>m</sub>ẹ(t) + N<sub>con</sub>(t) = N₀</span>.<br>• <b>Ý c: ĐÚNG.</b> Sau 3T hạt mẹ còn <span class=\"fraction\"><span class=\"numerator\">1</span><span class=\"denominator\">8</span></span> = 12,5% ⇒ hạt con chiếm 87,5%.<br>• <b>Ý d: SAI.</b> Số hạt mẹ giảm dần nên tốc độ sinh hạt con (<span class=\"math-sym\"><span class=\"fraction\"><span class=\"numerator\">dN</span><span class=\"denominator\">dt</span></span></span>) giảm dần theo thời gian (đường cong thoải dần)."
    },
    {
      "type": "mcq",
      "q": "Trong dây chuyền sản xuất tự động các lá màng nhôm mỏng hoặc giấy công nghiệp, người ta đặt nguồn phát tia phóng xạ β ở một bên tấm màng và đầu dò bức xạ ở bên đối diện. Thiết bị này dùng để:",
      "opts": [
        "Tự động kiểm soát và điều chỉnh độ dày của màng thông qua mức độ suy giảm của chùm tia β khi đâm xuyên qua màng.",
        "Khử trùng và tiệt trùng bề mặt tấm màng để chống nấm mốc và vi khuẩn bám dính.",
        "Đốt nóng làm khô nhanh màng nhôm và giấy trong quá trình cán tốc độ cao.",
        "Tích điện âm cho màng kim loại để các lớp màng tự động dính chặt vào nhau."
      ],
      "ans": 0,
      "correctText": "Đáp án A",
      "exp": "• <b>Thiết bị đo độ dày bức xạ:</b> Tia β (các electron năng lượng cao) có khả năng đâm xuyên qua các màng vật chất mỏng và bị hấp thụ một phần.<br>• Độ suy giảm cường độ của chùm tia β phụ thuộc chặt chẽ vào độ dày của lớp vật liệu. Nếu màng bị dày hơn tiêu chuẩn, lượng tia β tới đầu dò giảm ⇒ hệ thống tự động điều khiển trục cán ép chặt lại. Ngược lại, nếu màng mỏng hơn, lượng tia tới tăng ⇒ nới lỏng trục cán. Thiết bị hoạt động liên tục không tiếp xúc và tự động hóa 100%."
    }
  ]
};
if (typeof module !== "undefined") module.exports = lessonsData;
