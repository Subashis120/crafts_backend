package com.crafts.order.serviceimpl;

import com.crafts.order.common.Store;
import com.crafts.order.model.Order;
import com.crafts.order.repository.OrderRepository;
import com.crafts.order.service.InventoryService;
import com.crafts.order.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private InventoryService inventoryService;

    @Autowired
    private Store store;

    @Override
    public List<Order> getOrder() {
        ResponseEntity<String> inventory = inventoryService.getInventory(store.getToken());
        return orderRepository.findAll();
    }

    @Override
    public Order saveOrder(Order order) {


        return orderRepository.save(order);
    }
}
