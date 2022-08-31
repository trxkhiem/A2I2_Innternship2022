//
//  WebViewController.swift
//  IOS Health Reporter
//
//  Created by Truong Xuan Khiem on 31/8/2022.
//

import UIKit
import WebKit
class WebViewController: UIViewController {

    private let webView: WKWebView = {
        let prefs = WKWebpagePreferences()
        prefs.allowsContentJavaScript = true
        let config = WKWebViewConfiguration()
        config.defaultWebpagePreferences = prefs
        let webView = WKWebView(frame: .zero, configuration: config)
        return webView
    }()
    
    private let url:URL
    
    init(url:URL, title: String){
        self.url = url 
        super.init(nibName: nil, bundle: nil)
        self.title = title
    }
    
    required init?(coder: NSCoder) {
        fatalError()
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        view.addSubview(webView)
        // Do any additional setup after loading the view.
        webView.load(URLRequest(url: url))
        configureButtons()
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        webView.frame = view.bounds
    }
    
    
    private func configureButtons(){
        navigationItem.leftBarButtonItem = UIBarButtonItem (title: "Done", style: .done, target: self, action: #selector(tapDone))
        navigationItem.rightBarButtonItem   = UIBarButtonItem (barButtonSystemItem: .refresh, target: self,  action: #selector(tapRefresh))
    }
    
    @objc private func tapDone(){
        dismiss(animated: true, completion: nil)
    }
    
    @objc private func tapRefresh(){
        webView.load(URLRequest(url: url))
    }
}
