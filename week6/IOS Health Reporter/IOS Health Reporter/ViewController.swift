//
//  ViewController.swift
//  IOS Health Reporter
//
//  Created by Truong Xuan Khiem on 31/8/2022.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var roundButton: UIButton!
    override func viewDidLoad() {
        super.viewDidLoad()
        roundButton.layer.borderWidth = 5
        roundButton.layer.borderColor = UIColor.orange.cgColor
        roundButton.layer.cornerRadius = roundButton.frame.width/2
        roundButton.layer.masksToBounds = true
        roundButton.addTarget(self, action: #selector(getStart), for: .touchUpInside)
        // Do any additional setup after loading the view.
    }
    @objc private func getStart(){
        guard let url = URL(string: "https://main.d2a8gmdwh094j5.amplifyapp.com/") else {
            return
        }
        let vc = WebViewController(url: url, title: "IOS Health Reporter")
        
        let navVC = UINavigationController(rootViewController: vc)
        present(navVC, animated: true)
    } 

}

