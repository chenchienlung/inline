function tabComponent() {
    return {
        activeTab: 'restaurant',
        
        switchTab(tabName) {
            this.activeTab = tabName;
        }
    }
}